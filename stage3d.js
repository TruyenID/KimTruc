/* ══════════════════════════════════════════════════════════════
   stage3d.js — LỚP 3D THẬT (WebGL / Three.js)
   ──────────────────────────────────────────────────────────────
   Kiến trúc "Layered Separation":

     [ CSS aurora ]  z0
     [ bgCanvas 2D ] z1   ← sao 2D cũ, đã giảm mật độ khi lớp này bật
     [ glCanvas 3D ] z2   ← FILE NÀY: thiên hà, trái tim hạt, pháo hoa WebGL
     [ nội dung DOM ] z5+
     [ fxCanvas 2D ] z6   ← kim tuyến / pháo hoa 2D vẫn nằm trên cùng

   File này KHÔNG tự chạy vòng lặp riêng. Nó phơi ra window.Stage3D và
   được script.js gọi từ đúng một vòng requestAnimationFrame duy nhất
   → không có 2 render loop đánh nhau.

   Mọi thứ đều degrade an toàn: máy không có WebGL, mạng chặn CDN, hay
   người dùng bật "giảm chuyển động" → trang vẫn chạy y như cũ.
   ══════════════════════════════════════════════════════════════ */

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

/* ══════════ THAM SỐ THEO THIẾT BỊ ══════════ */
const BD = window.__BD || {};
const reduceMotion = BD.reduceMotion ?? matchMedia('(prefers-reduced-motion: reduce)').matches;
const isSmall = BD.isSmall ?? matchMedia('(pointer: coarse)').matches;

const Q = isSmall
    ? { stars: 5200, heart: 3400, dust: 260, fw: 1400, dpr: 1.5, bloom: true, glass: false }
    : { stars: 14000, heart: 9000, dust: 700, fw: 3600, dpr: 2, bloom: true, glass: true };

if (reduceMotion) { Q.stars = 2600; Q.heart = 2200; Q.dust = 0; Q.fw = 600; }

/* ══════════ BẢNG MÀU CHO 3 GIAO DIỆN ══════════ */
const THEME3D = {
    night: { a: '#ff6ec7', b: '#6fd0ff', c: '#9b6bff', key: '#ff7ad9', rim: '#63e0ff', bloom: 0.62, exposure: 1.0 },
    luxe: { a: '#ffd76b', b: '#ffb25f', c: '#fff6d8', key: '#ffcf5c', rim: '#ffa33c', bloom: 0.72, exposure: 1.05 },
    party: { a: '#ff8fc7', b: '#8fe3ff', c: '#ffe6a0', key: '#ff9ecf', rim: '#8fe3ff', bloom: 0.50, exposure: 1.1 }
};

const TAU = Math.PI * 2;
const rnd = (a, b) => a + Math.random() * (b - a);

/* ══════════════════════════════════════════════════════════════
   HÌNH TRÁI TIM 3D — phương trình ẩn kinh điển
     (x² + 9/4·y² + z² − 1)³ − x²z³ − 9/80·y²z³ = 0
   f < 0 nghĩa là điểm nằm TRONG khối tim.
   ══════════════════════════════════════════════════════════════ */
function heartField(x, y, z) {
    const a = x * x + 2.25 * y * y + z * z - 1;
    return a * a * a - x * x * z * z * z - 0.1125 * y * y * z * z * z;
}

/* Bắn một tia từ tâm theo hướng d, tìm bán kính chạm vỏ trái tim.
   Nhị phân 20 vòng là quá đủ cho độ chính xác mắt thường. */
function heartRadius(dx, dy, dz) {
    let lo = 0, hi = 2.2;
    if (heartField(dx * hi, dy * hi, dz * hi) < 0) return hi;   // hướng này không cắt vỏ
    for (let i = 0; i < 20; i++) {
        const mid = (lo + hi) * 0.5;
        if (heartField(dx * mid, dy * mid, dz * mid) < 0) lo = mid; else hi = mid;
    }
    return lo;
}

/* ══════════════════════════════════════════════════════════════
   TRẠNG THÁI MODULE
   ══════════════════════════════════════════════════════════════ */
let renderer, scene, camera, composer, bloomPass;
let galaxy, heart, dust, fireworks, gem, ring, keyLight, rimLight;
let ok = false, active = false;
let drift = 0, pulse = 0, scrollT = 0;
const camTarget = { rx: 0, ry: 0 };
const camSmooth = { rx: 0, ry: 0 };

/* ══════════ SHADER DÙNG CHUNG CHO CÁC HỆ HẠT ══════════ */
const POINT_FRAG = /* glsl */`
    varying vec3  vColor;
    varying float vAlpha;
    void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.0, d);
        a = pow(a, 2.0);                      // lõi đặc, viền tan mềm
        gl_FragColor = vec4(vColor, a * vAlpha);
    }
`;

/* ══════════════════════════════════════════════════════════════
   1. THIÊN HÀ — trường sao 3D thật, bay xuyên qua người xem
   ══════════════════════════════════════════════════════════════ */
function buildGalaxy(pal) {
    const n = Q.stars;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const size = new Float32Array(n);
    const phase = new Float32Array(n);

    const c1 = new THREE.Color(pal.a), c2 = new THREE.Color(pal.b), c3 = new THREE.Color(pal.c);
    const white = new THREE.Color('#ffffff');
    const tmp = new THREE.Color();

    for (let i = 0; i < n; i++) {
        // Đĩa thiên hà dẹt: rộng theo x/y, dài theo z để tạo chiều sâu bay xuyên
        const r = Math.pow(Math.random(), 0.65) * 46;
        const th = Math.random() * TAU;
        pos[i * 3] = Math.cos(th) * r;
        pos[i * 3 + 1] = Math.sin(th) * r * 0.62 + rnd(-6, 6);
        pos[i * 3 + 2] = rnd(-60, 60);

        const t = Math.random();
        tmp.copy(t < 0.4 ? c1 : t < 0.7 ? c2 : t < 0.9 ? c3 : white);
        tmp.lerp(white, Math.random() * 0.35);
        col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;

        size[i] = rnd(0.6, 2.6);
        phase[i] = Math.random() * TAU;
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));

    const m = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uDrift: { value: 0 },
            uDpr: { value: Math.min(devicePixelRatio || 1, Q.dpr) },
            uOpacity: { value: 0 }
        },
        vertexShader: /* glsl */`
            attribute vec3  aColor;
            attribute float aSize;
            attribute float aPhase;
            uniform float uTime, uDrift, uDpr, uOpacity;
            varying vec3  vColor;
            varying float vAlpha;
            void main() {
                vColor = aColor;
                vec3 p = position;
                // Cuộn vô tận theo trục z — uDrift do JS cộng dồn nên không giật
                p.z = mod(p.z + uDrift + 60.0, 120.0) - 60.0;
                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                float d = -mv.z;
                float tw = 0.5 + 0.5 * sin(uTime * 1.8 + aPhase);
                // Xa thì mờ dần (có chiều sâu), GẦN cũng phải mờ dần — nếu không
                // hạt sát mặt camera sẽ phình thành quả cầu to che hết chữ.
                float fade = smoothstep(95.0, 30.0, d) * smoothstep(3.0, 16.0, d);
                vAlpha = (0.30 + 0.70 * tw) * fade * uOpacity * 0.85;
                gl_PointSize = min(aSize * uDpr * (62.0 / max(d, 6.0)), 9.0 * uDpr);
                gl_Position = projectionMatrix * mv;
            }
        `,
        fragmentShader: POINT_FRAG,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    return new THREE.Points(g, m);
}

/* ══════════════════════════════════════════════════════════════
   2. TRÁI TIM HẠT — vỏ trái tim 3D dựng từ hàng nghìn đốm sáng.
      Đập theo nhịp, nổ tung khi chạm rồi tự ghép lại.
   ══════════════════════════════════════════════════════════════ */
function buildHeart(pal) {
    const n = Q.heart;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const dir = new Float32Array(n * 3);   // hướng bay khi nổ
    const size = new Float32Array(n);
    const phase = new Float32Array(n);

    const c1 = new THREE.Color(pal.a), c2 = new THREE.Color(pal.c);
    const tmp = new THREE.Color();
    const S = 2.55;

    for (let i = 0; i < n; i++) {
        // Hướng ngẫu nhiên phân bố đều trên mặt cầu
        const u = Math.random() * 2 - 1;
        const th = Math.random() * TAU;
        const s = Math.sqrt(1 - u * u);
        const dx = s * Math.cos(th), dy = s * Math.sin(th), dz = u;

        const R = heartRadius(dx, dy, dz);
        // 88% nằm sát vỏ (nét rõ), 12% rải trong lòng (có chiều sâu)
        const k = Math.random() < 0.88 ? rnd(0.93, 1.0) : rnd(0.35, 0.9);

        // Trục của phương trình là z-lên; Three.js là y-lên → hoán vị
        pos[i * 3] = dx * R * k * S;
        pos[i * 3 + 1] = dz * R * k * S;
        pos[i * 3 + 2] = dy * R * k * S * 0.92;

        dir[i * 3] = dx + rnd(-0.3, 0.3);
        dir[i * 3 + 1] = dz + rnd(-0.3, 0.3) + 0.25;
        dir[i * 3 + 2] = dy + rnd(-0.3, 0.3);

        tmp.copy(c1).lerp(c2, Math.pow(Math.random(), 1.6));
        col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;

        size[i] = rnd(0.8, 2.4);
        phase[i] = Math.random() * TAU;
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aDir', new THREE.BufferAttribute(dir, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));

    const m = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uExplode: { value: 0 },   // 0 = nguyên vẹn, 1 = nổ hết cỡ
            uBeat: { value: 0 },   // nảy theo nhịp nhạc
            uDpr: { value: Math.min(devicePixelRatio || 1, Q.dpr) },
            uOpacity: { value: 0 }
        },
        vertexShader: /* glsl */`
            attribute vec3  aColor;
            attribute vec3  aDir;
            attribute float aSize;
            attribute float aPhase;
            uniform float uTime, uExplode, uBeat, uDpr, uOpacity;
            varying vec3  vColor;
            varying float vAlpha;
            void main() {
                vColor = aColor;

                // Nhịp đập: hai nhát gần nhau như tim thật (thình—thịch … nghỉ)
                float beat = sin(uTime * 2.2) * 0.5 + sin(uTime * 4.4) * 0.18;
                float scale = 1.0 + beat * 0.035 + uBeat * 0.14;

                vec3 p = position * scale;
                // Lượn sóng nhẹ để mặt vỏ không bao giờ đứng yên chết cứng
                p += normalize(position) * sin(uTime * 1.5 + aPhase) * 0.05;
                // Nổ tung: bay theo hướng riêng của từng hạt
                p += aDir * uExplode * (5.0 + aPhase * 0.7);

                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                float tw = 0.62 + 0.38 * sin(uTime * 3.0 + aPhase * 2.0);
                vAlpha = tw * uOpacity * (1.0 - uExplode * 0.55);
                gl_PointSize = aSize * uDpr * (110.0 / max(-mv.z, 1.0)) * (1.0 + uBeat * 0.5);
                gl_Position = projectionMatrix * mv;
            }
        `,
        fragmentShader: POINT_FRAG,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    return new THREE.Points(g, m);
}

/* ══════════════════════════════════════════════════════════════
   3. BỤI VÀNG — những đốm sáng trôi lên chậm rãi, tạo không khí
   ══════════════════════════════════════════════════════════════ */
function buildDust(pal) {
    const n = Q.dust;
    if (!n) return null;

    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const size = new Float32Array(n);
    const phase = new Float32Array(n);
    const speed = new Float32Array(n);

    const c1 = new THREE.Color(pal.c), c2 = new THREE.Color(pal.a);
    const tmp = new THREE.Color();

    for (let i = 0; i < n; i++) {
        pos[i * 3] = rnd(-30, 30);
        pos[i * 3 + 1] = rnd(-18, 18);
        pos[i * 3 + 2] = rnd(-14, 16);
        tmp.copy(c1).lerp(c2, Math.random() * 0.5);
        col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;
        size[i] = rnd(1.0, 3.2);
        phase[i] = Math.random() * TAU;
        speed[i] = rnd(0.25, 0.9);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    g.setAttribute('aSpeed', new THREE.BufferAttribute(speed, 1));

    const m = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uDpr: { value: Math.min(devicePixelRatio || 1, Q.dpr) },
            uOpacity: { value: 0 }
        },
        vertexShader: /* glsl */`
            attribute vec3  aColor;
            attribute float aSize, aPhase, aSpeed;
            uniform float uTime, uDpr, uOpacity;
            varying vec3  vColor;
            varying float vAlpha;
            void main() {
                vColor = aColor;
                vec3 p = position;
                p.y = mod(p.y + uTime * aSpeed + 18.0, 36.0) - 18.0;   // trôi lên, vòng lại
                p.x += sin(uTime * 0.5 + aPhase) * 1.6;                 // đung đưa như bụi thật
                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                float tw = 0.4 + 0.6 * sin(uTime * 2.2 + aPhase);
                vAlpha = tw * uOpacity * 0.75;
                gl_PointSize = aSize * uDpr * (90.0 / max(-mv.z, 1.0));
                gl_Position = projectionMatrix * mv;
            }
        `,
        fragmentShader: POINT_FRAG,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    return new THREE.Points(g, m);
}

/* ══════════════════════════════════════════════════════════════
   4. PHÁO HOA WEBGL — hồ hạt tái sử dụng, mô phỏng trên CPU.
      Bloom biến chúng thành những quả cầu sáng thật sự chói.
   ══════════════════════════════════════════════════════════════ */
function buildFireworks() {
    const n = Q.fw;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const size = new Float32Array(n);
    const alpha = new Float32Array(n);

    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1).setUsage(THREE.DynamicDrawUsage));

    const m = new THREE.ShaderMaterial({
        uniforms: { uDpr: { value: Math.min(devicePixelRatio || 1, Q.dpr) } },
        vertexShader: /* glsl */`
            attribute vec3  aColor;
            attribute float aSize, aAlpha;
            uniform float uDpr;
            varying vec3  vColor;
            varying float vAlpha;
            void main() {
                vColor = aColor;
                vAlpha = aAlpha;
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = aSize * uDpr * (150.0 / max(-mv.z, 1.0));
                gl_Position = projectionMatrix * mv;
            }
        `,
        fragmentShader: POINT_FRAG,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(g, m);
    points.frustumCulled = false;

    // Trạng thái mô phỏng, giữ ngoài GPU
    points.userData = {
        n, cursor: 0,
        vx: new Float32Array(n), vy: new Float32Array(n), vz: new Float32Array(n),
        life: new Float32Array(n), max: new Float32Array(n), base: new Float32Array(n)
    };
    return points;
}

/* Bắn một chùm pháo hoa 3D tại (x,y,z) trong không gian thế giới */
function spawnBurst(x, y, z, hex, big) {
    if (!fireworks) return;
    const d = fireworks.userData;
    const g = fireworks.geometry;
    const pos = g.attributes.position.array;
    const col = g.attributes.aColor.array;
    const size = g.attributes.aSize.array;

    const c = new THREE.Color(hex || '#ff6ec7');
    const white = new THREE.Color('#ffffff');
    const tmp = new THREE.Color();

    const count = Math.round((big ? 320 : 190) * (isSmall ? 0.55 : 1) * (reduceMotion ? 0.4 : 1));
    const power = big ? rnd(9, 12) : rnd(6.5, 9);

    for (let k = 0; k < count; k++) {
        const i = d.cursor;
        d.cursor = (d.cursor + 1) % d.n;

        // Phân bố đều trên mặt cầu → quả cầu hoa cúc tròn đều
        const u = Math.random() * 2 - 1;
        const th = Math.random() * TAU;
        const s = Math.sqrt(1 - u * u);
        // Căn bậc ba của random cho mật độ đều trong lòng cầu, không dồn ra vỏ
        const sp = power * Math.pow(Math.random(), 0.34);

        pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
        d.vx[i] = s * Math.cos(th) * sp;
        d.vy[i] = u * sp;
        d.vz[i] = s * Math.sin(th) * sp;

        tmp.copy(c).lerp(white, Math.pow(Math.random(), 2.2) * 0.85);
        col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;

        const life = rnd(1.1, 2.3) * (big ? 1.25 : 1);
        d.life[i] = life; d.max[i] = life;
        d.base[i] = rnd(1.2, 3.4) * (big ? 1.3 : 1);
        size[i] = d.base[i];
    }

    g.attributes.position.needsUpdate = true;
    g.attributes.aColor.needsUpdate = true;
    g.attributes.aSize.needsUpdate = true;
}

function stepFireworks(dt) {
    if (!fireworks) return;
    const d = fireworks.userData;
    const g = fireworks.geometry;
    const pos = g.attributes.position.array;
    const size = g.attributes.aSize.array;
    const alpha = g.attributes.aAlpha.array;

    const drag = Math.pow(0.86, dt * 60);
    let awake = false;

    for (let i = 0; i < d.n; i++) {
        if (d.life[i] <= 0) { alpha[i] = 0; continue; }
        awake = true;

        d.life[i] -= dt;
        d.vy[i] -= 5.2 * dt;                       // trọng lực
        d.vx[i] *= drag; d.vy[i] *= drag; d.vz[i] *= drag;

        pos[i * 3] += d.vx[i] * dt;
        pos[i * 3 + 1] += d.vy[i] * dt;
        pos[i * 3 + 2] += d.vz[i] * dt;

        const t = Math.max(d.life[i], 0) / d.max[i];
        // Nhấp nháy ở cuối đời hạt — đúng kiểu tàn pháo hoa thật
        const flick = t < 0.45 ? 0.55 + 0.45 * Math.sin(d.life[i] * 42) : 1;
        alpha[i] = t * t * flick;
        size[i] = d.base[i] * (0.35 + t * 0.65);
    }

    if (awake) {
        g.attributes.position.needsUpdate = true;
        g.attributes.aAlpha.needsUpdate = true;
        g.attributes.aSize.needsUpdate = true;
    }
}

/* ══════════════════════════════════════════════════════════════
   5. VIÊN NGỌC + VÒNG SAO THỔ — khối rắn duy nhất, để mắt có chỗ
      bám vào giữa biển hạt. Vật liệu kính thật trên máy khoẻ.
   ══════════════════════════════════════════════════════════════ */
function buildGem(pal) {
    const geo = new THREE.IcosahedronGeometry(1.5, 0);
    const mat = Q.glass
        ? new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(pal.c), transmission: 0.92, thickness: 1.4,
            roughness: 0.08, metalness: 0, ior: 1.7, iridescence: 1,
            iridescenceIOR: 1.9, clearcoat: 1, transparent: true, opacity: 0.9
        })
        : new THREE.MeshStandardMaterial({
            color: new THREE.Color(pal.c), roughness: 0.15, metalness: 0.8,
            emissive: new THREE.Color(pal.a), emissiveIntensity: 0.35,
            transparent: true, opacity: 0.85
        });

    const mesh = new THREE.Mesh(geo, mat);

    const ringGeo = new THREE.TorusGeometry(2.2, 0.03, 8, 128);
    const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(pal.b), transparent: true, opacity: 0.55,
        blending: THREE.AdditiveBlending, depthWrite: false
    });
    const r = new THREE.Mesh(ringGeo, ringMat);
    r.rotation.x = Math.PI * 0.42;
    r.rotation.z = 0.3;

    return { mesh, ring: r };
}

/* ══════════════════════════════════════════════════════════════
   KHỞI TẠO
   ══════════════════════════════════════════════════════════════ */
function init() {
    const canvas = document.getElementById('glCanvas');
    if (!canvas) return false;

    try {
        renderer = new THREE.WebGLRenderer({
            canvas, alpha: true, antialias: !isSmall,
            powerPreference: 'high-performance'
        });
    } catch (e) {
        return false;
    }
    if (!renderer.getContext()) return false;

    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, Q.dpr));
    renderer.setSize(innerWidth, innerHeight);
    renderer.setClearAlpha(0);                       // để lộ aurora CSS phía sau
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.1, 220);
    camera.position.set(0, 0, 16);

    const pal = THEME3D[document.documentElement.dataset.theme] || THEME3D.night;

    galaxy = buildGalaxy(pal); scene.add(galaxy);
    heart = buildHeart(pal); scene.add(heart);
    dust = buildDust(pal); if (dust) scene.add(dust);
    fireworks = buildFireworks(); scene.add(fireworks);

    const gemParts = buildGem(pal);
    gem = gemParts.mesh; ring = gemParts.ring;
    gem.add(ring);
    gem.position.set(0, 0, 0);
    gem.scale.setScalar(0);                          // hiện dần khi vào tiệc
    scene.add(gem);

    /* Môi trường phản chiếu dựng bằng code (RoomEnvironment) — không tải asset nào.
       Thiếu nó thì vật liệu kính `transmission` không có gì để khúc xạ và viên ngọc
       trông chỉ như một khối đa giác phẳng lì. */
    if (Q.glass) {
        const pmrem = new THREE.PMREMGenerator(renderer);
        scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
        scene.environmentIntensity = 0.55;
        pmrem.dispose();
    }

    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    keyLight = new THREE.PointLight(new THREE.Color(pal.key), 90, 60, 2);
    keyLight.position.set(6, 5, 8);
    scene.add(keyLight);
    rimLight = new THREE.PointLight(new THREE.Color(pal.rim), 60, 60, 2);
    rimLight.position.set(-7, -3, 5);
    scene.add(rimLight);

    /* ── Hậu kỳ: Bloom là thứ biến hạt sáng thành ánh sáng thật ── */
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    if (Q.bloom) {
        bloomPass = new UnrealBloomPass(
            new THREE.Vector2(innerWidth, innerHeight),
            pal.bloom,          // cường độ
            0.45,               // bán kính toả
            0.42                // ngưỡng: chỉ lõi thật sáng mới loé, hạt mờ giữ nét
        );                      //         để nền không bị bệt sáng nuốt mất chữ
        composer.addPass(bloomPass);
    }
    composer.addPass(new OutputPass());
    composer.setPixelRatio(Math.min(devicePixelRatio || 1, Q.dpr));
    composer.setSize(innerWidth, innerHeight);

    layoutScene();
    addEventListener('resize', onResize, { passive: true });

    // Mất WebGL context (đổi GPU, tab ngủ lâu) → tắt hẳn thay vì vẽ rác
    canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); ok = false; });
    canvas.addEventListener('webglcontextrestored', () => { ok = true; });

    ok = true;
    return true;
}

/* ── BỐ CỤC THEO KHỔ MÀN HÌNH ──
   Nội dung trang là một cột hẹp ở giữa. Màn rộng còn lề trống hai bên:
   đặt trái tim vào lề PHẢI, viên ngọc vào lề TRÁI — cân đối, và quan trọng
   hơn là không có vật thể nào thò ra từ sau tấm thiệp (trông như lỗi hiển thị).
   Màn hẹp (điện thoại) không có lề: dồn về giữa, đẩy viên ngọc ra sau trái tim,
   cả hai hắt sáng qua lớp kính mờ của panel. */
const home = { heartX: 0, gemX: -8, gemZ: -2, gemR: 1.6 };

function layoutScene() {
    if (!heart) return;                 // gọi cả lúc init (ok chưa bật) lẫn lúc resize
    const stage = document.querySelector('.stage');
    const contentW = stage ? stage.getBoundingClientRect().width : innerWidth;
    const marginFrac = Math.max(0, (innerWidth - contentW) / 2 / innerWidth);

    const halfH = Math.tan(camera.fov * Math.PI / 360) * 16;
    const halfW = halfH * camera.aspect;

    if (marginFrac > 0.17) {
        // Canh vào giữa dải lề, lùi thêm chút để quầng bloom không bị cắt mép
        home.heartX = halfW * (1 - marginFrac * 1.3);
        home.gemX = -halfW * (1 - marginFrac * 0.72);   // ra sát mép hơn trái tim một chút
        home.gemZ = -2; home.gemR = 1.1;
        heart.scale.setScalar(0.92);
    } else {
        home.heartX = 0;
        home.gemX = 0; home.gemZ = -9; home.gemR = 2.4;   // lùi hẳn ra sau trái tim
        heart.scale.setScalar(1.2);
    }
    heart.position.x = home.heartX;
}

function onResize() {
    if (!ok) return;
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
    if (bloomPass) bloomPass.resolution.set(innerWidth, innerHeight);
    layoutScene();
}

/* ══════════════════════════════════════════════════════════════
   API — script.js gọi vào đây
   ══════════════════════════════════════════════════════════════ */
const Stage3D = {
    get ready() { return ok; },

    /* Bật lớp 3D khi hành trình 5 màn kết thúc, fade in bằng GSAP nếu có */
    start() {
        if (!ok || active) return;
        active = true;
        const g = window.gsap;
        const targets = [galaxy, heart, dust].filter(Boolean).map(o => o.material.uniforms.uOpacity);

        if (g) {
            targets.forEach((u, i) => g.to(u, { value: 1, duration: 2.2, delay: i * 0.25, ease: 'power2.out' }));
            g.to(gem.scale, { x: 1, y: 1, z: 1, duration: 1.8, delay: 0.8, ease: 'elastic.out(1, 0.6)' });
            g.fromTo(camera.position, { z: 42 }, { z: 16, duration: 3.2, ease: 'power3.out' });
        } else {
            targets.forEach(u => { u.value = 1; });
            gem.scale.setScalar(1);
        }
    },

    /* Đổi màu cả thế giới 3D theo giao diện đang chọn */
    setTheme(name) {
        if (!ok) return;
        const pal = THEME3D[name] || THEME3D.night;
        const g = window.gsap;

        const recolor = (obj, from, to, mix) => {
            if (!obj) return;
            const col = obj.geometry.attributes.aColor;
            const arr = col.array;
            const c1 = new THREE.Color(from), c2 = new THREE.Color(to), w = new THREE.Color('#ffffff');
            const tmp = new THREE.Color();
            for (let i = 0; i < arr.length; i += 3) {
                tmp.copy(Math.random() < mix ? c1 : c2).lerp(w, Math.random() * 0.35);
                arr[i] = tmp.r; arr[i + 1] = tmp.g; arr[i + 2] = tmp.b;
            }
            col.needsUpdate = true;
        };

        recolor(galaxy, pal.a, pal.b, 0.55);
        recolor(heart, pal.a, pal.c, 0.7);
        recolor(dust, pal.c, pal.a, 0.6);

        const tween = (target, hex) => {
            const c = new THREE.Color(hex);
            if (g) g.to(target, { r: c.r, g: c.g, b: c.b, duration: 0.9, ease: 'power2.inOut' });
            else target.copy(c);
        };
        tween(keyLight.color, pal.key);
        tween(rimLight.color, pal.rim);
        tween(gem.material.color, pal.c);
        tween(ring.material.color, pal.b);

        if (bloomPass) {
            if (g) g.to(bloomPass, { strength: pal.bloom, duration: 0.9 });
            else bloomPass.strength = pal.bloom;
        }
        if (g) g.to(renderer, { toneMappingExposure: pal.exposure, duration: 0.9 });
        else renderer.toneMappingExposure = pal.exposure;
    },

    /* Pháo hoa 3D. Nhận toạ độ MÀN HÌNH, tự chiếu ngược vào không gian 3D. */
    burst(sx, sy, hex, big = false) {
        if (!ok || !active) return;
        const ndcX = (sx / innerWidth) * 2 - 1;
        const ndcY = -(sy / innerHeight) * 2 + 1;
        const v = new THREE.Vector3(ndcX, ndcY, 0.5).unproject(camera);
        const dir = v.sub(camera.position).normalize();
        const dist = rnd(14, 24);
        const p = camera.position.clone().add(dir.multiplyScalar(dist));
        spawnBurst(p.x, p.y, p.z, hex, big);
    },

    /* Trái tim nổ tung rồi tự ghép lại — gọi khi chạm vào tên */
    explodeHeart() {
        if (!ok || !active) return;
        const u = heart.material.uniforms.uExplode;
        const g = window.gsap;
        if (g) {
            g.killTweensOf(u);
            g.timeline()
                .to(u, { value: 1, duration: 0.55, ease: 'power3.out' })
                .to(u, { value: 0, duration: 2.4, ease: 'elastic.out(1, 0.45)' }, '+=0.15');
        }
        spawnBurst(0, 0, 0, null, true);
    },

    /* Nhịp nhạc → trái tim nảy. script.js gọi mỗi nốt. */
    beat(strength = 1) {
        if (!ok || !active) return;
        pulse = Math.min(pulse + strength * 0.7, 1.6);
    },

    /* Góc camera từ chuột / con quay hồi chuyển (dùng chung với engine 2D) */
    look(rx, ry) { camTarget.rx = rx; camTarget.ry = ry; },

    /* Tiến độ cuộn trang 0→1, do GSAP ScrollTrigger đẩy vào */
    scroll(t) { scrollT = t; },

    /* Vòng lặp duy nhất của cả trang gọi hàm này */
    render(dt, elapsed, warp) {
        if (!ok || !active) return;

        // Camera trôi mượt theo chuột, cộng thêm dolly theo tiến độ cuộn
        camSmooth.rx += (camTarget.rx - camSmooth.rx) * 0.05;
        camSmooth.ry += (camTarget.ry - camSmooth.ry) * 0.05;
        camera.position.x = camSmooth.ry * 5.5;
        camera.position.y = -camSmooth.rx * 4.0 - scrollT * 3.0;
        camera.position.z = 16 + scrollT * 9;
        camera.lookAt(0, -scrollT * 1.5, 0);

        drift += (warp || 2) * dt * 1.6;
        pulse *= Math.pow(0.12, dt);                  // nhịp tắt dần mượt

        galaxy.material.uniforms.uTime.value = elapsed;
        galaxy.material.uniforms.uDrift.value = drift;
        galaxy.rotation.z = elapsed * 0.012;

        heart.material.uniforms.uTime.value = elapsed;
        heart.material.uniforms.uBeat.value = pulse;
        heart.rotation.y = elapsed * 0.22 + scrollT * Math.PI * 1.2;
        heart.position.y = Math.sin(elapsed * 0.6) * 0.35;

        if (dust) dust.material.uniforms.uTime.value = elapsed;

        gem.rotation.x = elapsed * 0.35;
        gem.rotation.y = elapsed * 0.5;
        // Bồng bềnh quanh "nhà" của nó trong dải lề, không bay vòng quanh gốc toạ độ
        gem.position.x = home.gemX + Math.cos(elapsed * 0.35) * home.gemR;
        gem.position.z = home.gemZ + Math.sin(elapsed * 0.35) * home.gemR;
        gem.position.y = Math.sin(elapsed * 0.7) * 1.2 + 1.5;
        ring.rotation.z = -elapsed * 0.8;

        stepFireworks(dt);
        composer.render();
    },

    /* Dọn dẹp — hiện chưa ai gọi, nhưng để sẵn cho tương lai */
    dispose() {
        if (!ok) return;
        ok = false;
        removeEventListener('resize', onResize);
        scene.traverse(o => {
            if (o.geometry) o.geometry.dispose();
            if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.dispose());
        });
        composer.dispose();
        renderer.dispose();
    }
};

/* ══════════ GẮN VÀO WINDOW ══════════ */
if (init()) {
    window.Stage3D = Stage3D;
    document.documentElement.classList.add('has-3d');
    // Nếu trang đã vào tiệc trước khi module tải xong (mạng chậm) → bật ngay
    if (!document.body.classList.contains('locked')) Stage3D.start();
    document.dispatchEvent(new CustomEvent('stage3d:ready'));
}
