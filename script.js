/* ══════════════════════════════════════════════════════════════
   WEBSITE CHÚC MỪNG SINH NHẬT — phiên bản CINEMATIC
   ──────────────────────────────────────────────────────────────
   TÙY CHỈNH: sửa khối CONFIG, hoặc truyền qua URL:
     index.html?name=Mai&age=22&date=12-14
   ══════════════════════════════════════════════════════════════ */

const CONFIG = {
    /* ── THÔNG TIN CƠ BẢN ── */
    name: 'Em Yêu',            // tên người yêu
    age: null,                 // số tuổi (null = ẩn)
    birthday: '12-14',         // sinh nhật 14/12, dạng MM-DD (lặp lại hằng năm)
    loveStart: '2023-02-14',   // ngày bắt đầu yêu nhau, dạng YYYY-MM-DD
    title: 'Chúc Mừng Sinh Nhật',

    /* ── XƯNG HÔ ──
       Trong mọi câu chữ bên dưới, {anh} = người viết, {em} = người yêu.
       Viết hoa thì dùng {Anh} / {Em}.
       ⚠️ NẾU BẠN LÀ CON GÁI viết cho bạn trai: đổi thành me: 'em', you: 'anh' */
    me: 'anh',
    you: 'em',

    /* ── LỜI CHÚC chạy trên thiệp ── */
    wishes: [
        'Sinh nhật {em} rồi — chúc {em} tuổi mới luôn cười thật nhiều nhé 🎂',
        '{Anh} không giỏi nói lời hoa mỹ, chỉ mong {em} mãi bình an 💗',
        'Cảm ơn {em} vì đã chọn {anh}, và đã ở lại 🌷',
        'Mỗi ngày có {em} đều là một ngày đáng sống ✨',
        'Chúc {em} tuổi mới nhiều sức khoẻ, ít lo âu, và luôn có {anh} bên cạnh 💞'
    ],

    /* ── LÁ THƯ TAY ── */
    letter: `Gửi {em} của {anh},

Thêm một tuổi mới của {em}, và {anh} lại thấy mình may mắn đến lạ. Cảm ơn {em} vì đã bước vào cuộc đời {anh} — vì những buổi tối nhắn tin tới khuya, những lần {em} giận rồi lại làm hoà trước, và cả những ngày bình thường nhất mà chỉ cần có {em} là đủ vui.

{Anh} biết {anh} chưa hoàn hảo, đôi khi còn vụng về và làm {em} buồn. Nhưng có một điều {anh} chắc chắn: {anh} muốn được ở cạnh {em} thật lâu, đi cùng {em} thật xa.

Sinh nhật {em}, {anh} không chúc điều gì to tát. Chỉ mong {em} luôn khoẻ, luôn được cưng chiều, và mỗi lần quay lại phía sau đều thấy {anh} vẫn đang ở đó.`,
    letterSign: '— {Anh} của {em} 💝',

    /* ── LỜI HỨA (thẻ lật) ── */
    promises: [
        '{Anh} hứa sẽ luôn nắm tay {em}, kể cả những lúc giận nhau 🤝',
        '{Anh} hứa sẽ nhớ hết những ngày quan trọng của {em} 📅',
        '{Anh} hứa sẽ lắng nghe {em} nhiều hơn là nói 👂',
        '{Anh} hứa sẽ cùng {em} đi hết những nơi mình từng hẹn 🗺️',
        '{Anh} hứa sẽ là nơi {em} về sau một ngày thật mệt 🏠',
        '{Anh} hứa sẽ nấu cho {em} ăn những hôm {em} ốm 🍲',
        '{Anh} hứa sẽ ôm {em} thật chặt mỗi khi {em} buồn 🫂',
        '{Anh} hứa sẽ yêu {em} nhiều hơn một chút, mỗi ngày 💗'
    ],

    /* ── LÝ DO YÊU ── */
    reasons: [
        'Vì nụ cười của {em} làm {anh} quên hết mệt mỏi.',
        'Vì {em} nhớ cả những chuyện nhỏ xíu {anh} kể.',
        'Vì {em} vừa mạnh mẽ, vừa dịu dàng đúng lúc.',
        'Vì {em} giận thì hay, nhưng làm hoà còn dễ thương hơn.',
        'Vì cách {em} chăm sóc mọi người xung quanh.',
        'Vì {em} luôn tin {anh}, kể cả khi {anh} chưa tin chính mình.',
        'Vì cái ôm của {em} chữa lành mọi thứ.',
        'Vì {em} làm {anh} muốn trở thành phiên bản tốt hơn.',
        'Vì {em} cười lớn khi xem phim hài, dù đã xem rồi.',
        'Vì giọng {em} lúc mới ngủ dậy.',
        'Vì {em} luôn để phần {anh} miếng ngon nhất.',
        'Vì {em} kiên nhẫn với những lúc {anh} vụng về.',
        'Vì {em} nắm tay {anh} chặt hơn khi qua đường.',
        'Vì {em} là người {anh} muốn kể đầu tiên khi có chuyện vui.',
        'Vì {em} khiến những ngày bình thường trở nên đặc biệt.',
        'Vì {em} chưa từng bỏ cuộc với {anh}.',
        'Vì {em} thơm 🥰',
        'Vì {anh} không cần lý do — {anh} chỉ yêu {em} thôi.'
    ],

    /* ── DÒNG THỜI GIAN CHÚNG MÌNH ── */
    timeline: [
        { date: '14/02/2023', icon: '💘', title: 'Ngày mình chính thức', text: 'Ngày {anh} may mắn nhất đời.' },
        { date: '20/03/2023', icon: '🤝', title: 'Lần đầu nắm tay', text: 'Tay {anh} run muốn chết mà cố tỏ ra bình tĩnh.' },
        { date: '10/06/2023', icon: '✈️', title: 'Chuyến đi đầu tiên', text: 'Nắng, biển, và {em} cười suốt chuyến.' },
        { date: '25/12/2023', icon: '🎄', title: 'Giáng sinh đầu tiên', text: 'Lạnh thật, nhưng có {em} nên ấm.' },
        { date: '14/12/2026', icon: '🎂', title: 'Sinh nhật {em}', text: 'Và còn rất nhiều cái sinh nhật nữa, {anh} hứa.' }
    ],

    /* ── ẢNH KỶ NIỆM: bỏ ảnh vào thư mục photos/ ── */
    photos: [
        { src: 'photos/1.jpg', caption: 'Lần đầu mình đi chơi' },
        { src: 'photos/2.jpg', caption: 'Nụ cười {anh} thích nhất' },
        { src: 'photos/3.jpg', caption: 'Chuyến đi của chúng mình' },
        { src: 'photos/4.jpg', caption: 'Ngày thường bên nhau' },
        { src: 'photos/5.jpg', caption: 'Một khoảnh khắc rất {em}' },
        { src: 'photos/6.jpg', caption: 'Và còn nhiều nữa…' }
    ],
    photoEmojis: ['💑', '💖', '🌷', '🥰', '💞', '🌙', '🎀', '⭐'],

    candleCount: 5,
    palette: ['#ff6ec7', '#ffd76b', '#6ff2d0', '#9b6bff', '#6fd0ff', '#ff5f8d', '#ffffff'],
    goldPalette: ['#ffe9a8', '#f5c95c', '#ffb25f', '#fff6d8', '#e8a33c']
};

/* Ghi đè bằng tham số URL */
(function readURL() {
    const q = new URLSearchParams(location.search);
    if (q.get('name')) CONFIG.name = q.get('name');
    if (q.get('age')) CONFIG.age = parseInt(q.get('age'), 10) || null;
    if (q.get('date')) CONFIG.birthday = q.get('date');
    if (q.get('title')) CONFIG.title = q.get('title');
    if (q.get('wish')) CONFIG.wishes = q.get('wish').split('|');
    if (q.get('letter')) CONFIG.letter = q.get('letter');
    if (q.get('love')) CONFIG.loveStart = q.get('love');
    if (q.get('me')) CONFIG.me = q.get('me');
    if (q.get('you')) CONFIG.you = q.get('you');
})();

/* ══════════ XƯNG HÔ: {anh}/{em} → theo CONFIG ══════════ */
const capFirst = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function tx(s) {
    return String(s)
        .replace(/\{anh\}/g, CONFIG.me)
        .replace(/\{Anh\}/g, capFirst(CONFIG.me))
        .replace(/\{em\}/g, CONFIG.you)
        .replace(/\{Em\}/g, capFirst(CONFIG.you));
}

/* Quét toàn bộ chữ trong HTML, thay các chỗ đánh dấu {anh}/{em} */
function applyPronouns(root = document.body) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) {
        if (n.nodeValue.includes('{')) n.nodeValue = tx(n.nodeValue);
    }
    // placeholder là thuộc tính, TreeWalker không quét được → xử lý riêng
    root.querySelectorAll('[placeholder]').forEach(el => {
        if (el.placeholder.includes('{')) el.placeholder = tx(el.placeholder);
    });
}

const $ = (id) => document.getElementById(id);
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let mouse = { x: innerWidth / 2, y: innerHeight / 2 };

/* ══════════ HỒ SƠ HIỆU NĂNG CHO MOBILE ══════════ */
const isTouch = matchMedia('(pointer: coarse)').matches;
const isSmall = isTouch || Math.min(screen.width, screen.height) < 760;
const PERF = isSmall
    ? { starDensity: 15000, burst: .55, confetti: .55, dpr: 1.5, trail: .6, vizBars: 40 }
    : { starDensity: 8000, burst: 1, confetti: 1, dpr: 2, trail: 1, vizBars: 56 };

/* Chia sẻ hồ sơ thiết bị sang stage3d.js (module chạy sau file này) */
window.__BD = { PERF, reduceMotion, isSmall, isTouch, palette: CONFIG.palette };

/* Lớp WebGL có mặt hay không — quyết định mật độ sao 2D để hai lớp không chồng nhau */
const has3D = () => !!(window.Stage3D && window.Stage3D.ready);

/* Cờ tiết kiệm cho điện thoại (bật lúc vào tiệc, xem enterParty) */
let bg2dOff = false;      // tắt hẳn trường sao 2D — thiên hà WebGL đã thay thế
let cakeVisible = true;   // khu vực bánh kem còn trong tầm nhìn không
let nameVisible = true;   // khu vực tên ghép từ hạt còn trong tầm nhìn không
let vizSkip = 0;          // bộ đếm vẽ cách khung cho vòng visualizer

/* Rung nhẹ phản hồi trên điện thoại (Android) */
function buzz(pattern) {
    if (isTouch && navigator.vibrate) { try { navigator.vibrate(pattern); } catch (e) { } }
}

/* ══════════ TOAST ══════════ */
let toastTimer;
function toast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

/* ══════════ CANVAS NỀN: sao 3 lớp parallax + sao băng ══════════ */
const bg = $('bgCanvas');
const bgx = bg.getContext('2d');
let stars = [], shootingStars = [];

/* ── CAMERA 3D ẢO ──
   Desktop: nghiêng theo chuột. Mobile: theo con quay hồi chuyển (gyroscope)
   → cả không gian sao, pháo hoa, vật thể trôi nổi đều xoay theo góc nhìn. */
const FOV = 720;
const STAR_DEPTH = 1600;
const cam = { rx: 0, ry: 0 };          // góc camera hiện tại (đã làm mượt)
const targetCam = { rx: 0, ry: 0 };    // góc camera đích
let warp = 2;                          // tốc độ bay xuyên trường sao
let gyroActive = false, gyroBase = null;

function sizeCanvas(c) {
    const dpr = Math.min(devicePixelRatio || 1, PERF.dpr);
    c.width = innerWidth * dpr;
    c.height = innerHeight * dpr;
    c.style.width = innerWidth + 'px';
    c.style.height = innerHeight + 'px';
    c.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0);
}

/* Trường sao 3D thật — mỗi sao có toạ độ (x, y, z), bay dần về phía người xem */
function resetStar(s, init = false) {
    s.x = rand(-.9, .9) * innerWidth;
    s.y = rand(-.9, .9) * innerHeight;
    s.z = init ? rand(200, STAR_DEPTH) : STAR_DEPTH;
    s.r = rand(.5, 1.7);
    s.a = Math.random() * 6;
    s.tw = rand(.004, .022);
    s.hue = pick(CONFIG.palette);
    s.px = null;
    return s;
}

function buildStars() {
    // Khi thiên hà WebGL đã bật, giảm mạnh sao 2D: giữ lại chút lấp lánh gần
    // mà không làm dày đặc chồng lên lớp 3D phía sau.
    const density = has3D() ? PERF.starDensity * 3.2 : PERF.starDensity;
    const count = Math.round(innerWidth * innerHeight / density);
    stars = Array.from({ length: count }, () => resetStar({}, true));
}

function drawStars() {
    bgx.clearRect(0, 0, innerWidth, innerHeight);
    const cx = innerWidth / 2, cy = innerHeight / 2;

    for (const s of stars) {
        s.z -= warp;
        s.a += s.tw;
        if (s.z < 40) { resetStar(s); continue; }

        const k = FOV / s.z;
        const par = 1 - Math.min(k, 1);      // sao càng xa càng trôi theo góc camera
        const sx = cx + s.x * k - cam.ry * 340 * par;
        const sy = cy + s.y * k - cam.rx * 260 * par;
        if (sx < -60 || sx > innerWidth + 60 || sy < -60 || sy > innerHeight + 60) {
            resetStar(s);
            continue;
        }

        bgx.globalAlpha = (.25 + Math.abs(Math.sin(s.a)) * .75) * Math.min(k * 1.6, 1);
        if (warp > 5 && s.px !== null) {
            // đang "warp" → sao kéo thành vệt hyperspace
            bgx.strokeStyle = s.hue;
            bgx.lineWidth = Math.min(s.r * k, 3);
            bgx.lineCap = 'round';
            bgx.beginPath();
            bgx.moveTo(s.px, s.py);
            bgx.lineTo(sx, sy);
            bgx.stroke();
        } else {
            bgx.fillStyle = s.hue;
            bgx.beginPath();
            bgx.arc(sx, sy, Math.min(s.r * k, 3.2), 0, Math.PI * 2);
            bgx.fill();
        }
        s.px = sx;
        s.py = sy;
    }

    // Sao băng thi thoảng lướt qua
    if (!reduceMotion && Math.random() < .004 && shootingStars.length < 2) {
        shootingStars.push({
            x: rand(innerWidth * .3, innerWidth),
            y: rand(0, innerHeight * .3),
            vx: -rand(9, 14), vy: rand(3, 6), life: 1
        });
    }
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const st = shootingStars[i];
        st.x += st.vx; st.y += st.vy; st.life -= .015;
        const grad = bgx.createLinearGradient(st.x, st.y, st.x - st.vx * 9, st.y - st.vy * 9);
        grad.addColorStop(0, `rgba(255,255,255,${st.life})`);
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        bgx.globalAlpha = 1;
        bgx.strokeStyle = grad;
        bgx.lineWidth = 2;
        bgx.beginPath();
        bgx.moveTo(st.x, st.y);
        bgx.lineTo(st.x - st.vx * 9, st.y - st.vy * 9);
        bgx.stroke();
        if (st.life <= 0) shootingStars.splice(i, 1);
    }
    bgx.globalAlpha = 1;
}

/* ══════════ CANVAS HIỆU ỨNG: pháo hoa 3D + kim tuyến + vật thể trôi nổi ══════════ */
const fx = $('fxCanvas');
const fxx = fx.getContext('2d');
let sparksArr = [], rockets = [], confetti = [], floaters = [];
let autoFireworks = false, flashA = 0;

/* Chiếu điểm 3D → 2D. (X, Y) tính từ tâm màn hình, Z = độ sâu (0 = mặt màn hình,
   dương = lùi xa, âm = tiến về phía người xem). Vật xa trôi theo góc camera → parallax. */
function project(X, Y, Z) {
    const s = FOV / (FOV + Z);
    const par = 1 - Math.min(s, 1);
    return {
        x: innerWidth / 2 + X * s - cam.ry * 340 * par,
        y: innerHeight / 2 + Y * s - cam.rx * 260 * par,
        s
    };
}

/* Vector ngẫu nhiên phân bố đều trên mặt cầu — pháo nổ tròn đều mọi hướng không gian */
function sphereDir(speed) {
    const th = Math.random() * Math.PI * 2;
    const cz = rand(-1, 1);
    const sn = Math.sqrt(1 - cz * cz);
    return { x: sn * Math.cos(th) * speed, y: sn * Math.sin(th) * speed, z: cz * speed };
}

class Spark {
    constructor(X, Y, Z, color, opts = {}) {
        this.X = X; this.Y = Y; this.Z = Z; this.color = color;
        if (opts.vx !== undefined) {
            this.vx = opts.vx; this.vy = opts.vy; this.vz = opts.vz ?? 0;
        } else {
            const d = sphereDir(opts.speed ?? rand(1.5, 7));
            this.vx = d.x; this.vy = d.y; this.vz = d.z;
        }
        this.life = 1;
        this.decay = opts.decay ?? rand(.008, .022);
        this.size = opts.size ?? rand(1.8, 3.6);
        this.gravity = opts.gravity ?? .045;
        this.friction = opts.friction ?? .985;
        this.crackle = opts.crackle ?? false;
        this.trailLen = opts.trailLen ?? 6;
        this.trail = [];
    }
    update() {
        this.trail.push({ X: this.X, Y: this.Y, Z: this.Z });
        if (this.trail.length > this.trailLen) this.trail.shift();
        this.vy += this.gravity;
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vz *= this.friction;
        this.X += this.vx;
        this.Y += this.vy;
        this.Z += this.vz;
        this.life -= this.decay;
        if (this.crackle && this.life < .45 && Math.random() < .06) {
            this.life = 0;
            for (let i = 0; i < 4; i++) {
                sparksArr.push(new Spark(this.X, this.Y, this.Z, '#fff6d8', { speed: rand(.5, 2.4), size: 1.2, decay: .06, trailLen: 2 }));
            }
        }
    }
    draw() {
        const p = project(this.X, this.Y, this.Z);
        const t0 = this.trail[0];
        const t = t0 ? project(t0.X, t0.Y, t0.Z) : p;
        fxx.globalAlpha = Math.max(this.life, 0) * Math.min(p.s * 1.15, 1);
        fxx.strokeStyle = this.color;
        fxx.lineWidth = Math.max(this.size * p.s, .5);
        fxx.lineCap = 'round';
        fxx.beginPath();
        fxx.moveTo(t.x, t.y);
        fxx.lineTo(p.x, p.y);
        fxx.stroke();
    }
}

class Rocket {
    constructor(sx, sy) {
        this.Z = rand(-120, 520);                       // mỗi quả bay ở một lớp độ sâu khác nhau
        const s = FOV / (FOV + this.Z);
        sx = sx ?? rand(innerWidth * .15, innerWidth * .85);
        const ty = sy ?? rand(innerHeight * .12, innerHeight * .5);
        this.X = (sx - innerWidth / 2) / s;
        this.Y = (innerHeight + 30 - innerHeight / 2) / s;
        this.tY = (ty - innerHeight / 2) / s;
        this.vy = -rand(9, 13);
        this.color = pick(CONFIG.palette);
        this.big = Math.random() < .3;
        this.dead = false;
    }
    update() {
        this.Y += this.vy;
        this.vy += .16;
        if (Math.random() < .8) {
            sparksArr.push(new Spark(this.X, this.Y, this.Z, this.color, { vx: rand(-.4, .4), vy: rand(.2, .8), vz: 0, size: 1.6, decay: .06, trailLen: 2 }));
        }
        if (this.Y <= this.tY || this.vy >= 0) { this.explode(); this.dead = true; }
    }
    explode() {
        burst(this.X, this.Y, this.Z, this.color, this.big);
        boom(this.big);
        buzz(this.big ? 35 : 15);
        if (this.big && !reduceMotion) {
            flashA = .22;
            document.body.classList.add('shake');
            setTimeout(() => document.body.classList.remove('shake'), 420);
        }
    }
    draw() {
        const p = project(this.X, this.Y, this.Z);
        fxx.globalAlpha = 1;
        fxx.fillStyle = this.color;
        fxx.beginPath();
        fxx.arc(p.x, p.y, Math.max(2.6 * p.s, .8), 0, Math.PI * 2);
        fxx.fill();
    }
}

/* Các kiểu nổ 3D: cầu hoa cúc / trái tim / liễu rủ vàng / vành đai nghiêng kiểu sao Thổ */
function burst(X, Y, Z, color, big = false) {
    // Nổ song song một quả cầu WebGL có bloom ở đúng vị trí — lớp 2D lo hình
    // dáng (tim, liễu rủ…), lớp 3D lo độ sáng và chiều sâu.
    if (window.Stage3D) {
        const p = project(X, Y, Z);
        window.Stage3D.burst(p.x, p.y, color, big);
    }

    const style = Math.random();
    const n = Math.round((reduceMotion ? 24 : 70) * PERF.burst * (big ? 1.5 : 1));

    if (style < .28) {
        // vành đai kép nghiêng ngẫu nhiên trong không gian (như vành sao Thổ)
        const c2 = pick(CONFIG.palette);
        const tilt = rand(-.9, .9);
        const cosT = Math.cos(tilt), sinT = Math.sin(tilt);
        for (let i = 0; i < n; i++) {
            const a = (Math.PI * 2 / n) * i;
            [[color, 5], [c2, 2.6]].forEach(([col, sp], ring) => {
                if (ring === 1 && i % 2) return;
                const vx = Math.cos(a) * sp;
                const vy0 = Math.sin(a) * sp;
                sparksArr.push(new Spark(X, Y, Z, col, { vx, vy: vy0 * cosT, vz: vy0 * sinT }));
            });
        }
    } else if (style < .5) {
        // trái tim 💗 hơi xoè theo chiều sâu
        for (let i = 0; i < n; i++) {
            const t = (Math.PI * 2 / n) * i;
            const hx = 16 * Math.pow(Math.sin(t), 3);
            const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            sparksArr.push(new Spark(X, Y, Z, color, { vx: hx * .28, vy: hy * .28, vz: rand(-.6, .6) }));
        }
    } else if (style < .74) {
        // liễu rủ vàng — toả hình cầu, rơi chậm, lách tách
        for (let i = 0; i < n; i++) {
            sparksArr.push(new Spark(X, Y, Z, pick(CONFIG.goldPalette), {
                speed: rand(1, 4.6), gravity: .085, friction: .992,
                decay: rand(.004, .009), trailLen: Math.round(12 * PERF.trail), crackle: true, size: rand(1.4, 2.4)
            }));
        }
    } else {
        // cầu hoa cúc nhiều màu — nổ tròn đều trong không gian 3D
        for (let i = 0; i < n; i++) {
            sparksArr.push(new Spark(X, Y, Z, Math.random() < .3 ? pick(CONFIG.palette) : color, { crackle: big }));
        }
    }
}

class Confetto {
    constructor(x, y, vx, vy) {
        this.z = rand(-100, 380);                    // kim tuyến rơi ở nhiều lớp độ sâu
        this.sf = FOV / (FOV + this.z);
        this.x = x ?? Math.random() * innerWidth;
        this.y = y ?? -20;
        this.w = rand(6, 12);
        this.h = rand(8, 16);
        this.color = pick(CONFIG.palette);
        this.vx = (vx ?? rand(-2.5, 2.5)) * this.sf;
        this.vy = (vy ?? rand(2, 5)) * this.sf;
        this.rot = Math.random() * Math.PI;
        this.vr = rand(-.16, .16);
        this.sway = Math.random() * Math.PI * 2;
    }
    update() {
        this.sway += .06;
        this.x += this.vx + Math.sin(this.sway) * 1.4 * this.sf;
        this.y += this.vy;
        this.vx *= .99;
        this.vy += .05 * this.sf;
        this.vy = Math.min(this.vy, 6.5 * this.sf);
        this.rot += this.vr;
    }
    draw() {
        const par = 1 - Math.min(this.sf, 1);
        fxx.save();
        fxx.globalAlpha = Math.min(.55 + this.sf * .5, 1);
        fxx.translate(this.x - cam.ry * 320 * par, this.y - cam.rx * 240 * par);
        fxx.rotate(this.rot);
        fxx.fillStyle = this.color;
        fxx.fillRect(-this.w * this.sf / 2, -this.h * this.sf / 2, this.w * this.sf, this.h * this.sf * Math.abs(Math.cos(this.sway)));
        fxx.restore();
    }
}

/* ── Vật thể trôi nổi trong không gian giữa người xem và trang ── */
function buildFloaters() {
    const chars = ['💖', '⭐', '🎈', '✨', '🎁', '🌟'];
    const n = isSmall ? 12 : 22;
    floaters = Array.from({ length: n }, () => ({
        X: rand(-.62, .62) * innerWidth,
        Y: rand(-.62, .62) * innerHeight,
        Z: rand(-90, 560),
        ch: pick(chars),
        ph: Math.random() * Math.PI * 2,
        size: rand(18, 34)
    }));
}

function drawFloaters() {
    fxx.textAlign = 'center';
    fxx.textBaseline = 'middle';
    for (const f of floaters) {
        f.ph += .004;
        const p = project(f.X + Math.cos(f.ph * .7) * 34, f.Y + Math.sin(f.ph) * 46, f.Z);
        fxx.globalAlpha = Math.max(Math.min(.5 * p.s, .65), .08);
        fxx.font = Math.max(f.size * p.s, 8) + 'px serif';
        fxx.fillText(f.ch, p.x, p.y);
    }
    fxx.globalAlpha = 1;
}

function launchFirework(x, y) { rockets.push(new Rocket(x, y)); }

function rainConfetti(amount = 120) {
    amount = Math.round(amount * PERF.confetti);
    for (let i = 0; i < amount; i++) confetti.push(new Confetto());
}

/* Đại bác kim tuyến bắn chéo từ 2 góc dưới màn hình */
function confettiCannons(amount = 70) {
    amount = Math.round(amount * PERF.confetti);
    for (let i = 0; i < amount; i++) {
        confetti.push(new Confetto(-10, innerHeight * rand(.75, 1), rand(4, 12), -rand(7, 15)));
        confetti.push(new Confetto(innerWidth + 10, innerHeight * rand(.75, 1), -rand(4, 12), -rand(7, 15)));
    }
}

function popConfettiFrom(el, amount = 60) {
    const r = el.getBoundingClientRect();
    for (let i = 0; i < amount; i++) {
        confetti.push(new Confetto(r.left + r.width / 2, r.top + r.height / 2, rand(-9, 9), rand(-13, -2)));
    }
}

/* ══════════ ÂM THANH — Web Audio, không cần file mp3 ══════════ */
let audioCtx = null, mixBus = null, analyser = null, vizData = null;
let musicOn = false, musicTimer = null, musicNodes = [], noiseBuf = null;

function ac() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        mixBus = audioCtx.createGain();
        mixBus.gain.value = .9;
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = .82;
        vizData = new Uint8Array(analyser.frequencyBinCount);
        mixBus.connect(analyser);
        analyser.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function beep(freq, dur = .2, type = 'sine', vol = .12) {
    if (!audioCtx || audioCtx.state !== 'running') return;
    const t = audioCtx.currentTime;
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + .01);
    g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(g).connect(mixBus);
    o.start(t); o.stop(t + dur + .02);

    // Mỗi nốt nhạc làm trái tim 3D nảy một cái — mạnh yếu theo âm lượng nốt
    window.Stage3D?.beat(Math.min(vol / .12, 1.4));
}

/* Tiếng "bùm" pháo hoa bằng nhiễu trắng lọc thấp */
function boom(big = false) {
    if (!audioCtx || audioCtx.state !== 'running') return;
    const c = audioCtx;
    if (!noiseBuf) {
        noiseBuf = c.createBuffer(1, c.sampleRate * .5, c.sampleRate);
        const d = noiseBuf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    }
    const src = c.createBufferSource();
    src.buffer = noiseBuf;
    const g = c.createGain();
    g.gain.value = big ? .3 : .14;
    const f = c.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(big ? 900 : 600, c.currentTime);
    f.frequency.exponentialRampToValueAtTime(80, c.currentTime + .45);
    src.connect(f).connect(g).connect(mixBus);
    src.start();
}

/* Giai điệu "Happy Birthday" — lead 2 osc lệch tông + bass + echo lấp lánh */
const N = { G4: 392, A4: 440, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99 };
const MELODY = [
    [N.G4, .5], [N.G4, .5], [N.A4, 1], [N.G4, 1], [N.C5, 1], [N.B4, 2],
    [N.G4, .5], [N.G4, .5], [N.A4, 1], [N.G4, 1], [N.D5, 1], [N.C5, 2],
    [N.G4, .5], [N.G4, .5], [N.G5, 1], [N.E5, 1], [N.C5, 1], [N.B4, 1], [N.A4, 2],
    [N.F5, .5], [N.F5, .5], [N.E5, 1], [N.C5, 1], [N.D5, 1], [N.C5, 3]
];
const BEAT = .42;

function playMelody() {
    const c = ac();
    const master = c.createGain();
    master.gain.value = .0001;
    master.gain.exponentialRampToValueAtTime(.2, c.currentTime + .6);
    const filter = c.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2600;
    master.connect(filter).connect(mixBus);

    // Echo lấp lánh (feedback delay)
    const delay = c.createDelay(1);
    delay.delayTime.value = BEAT * .75;
    const fb = c.createGain(); fb.gain.value = .28;
    const wet = c.createGain(); wet.gain.value = .35;
    filter.connect(delay);
    delay.connect(fb).connect(delay);
    delay.connect(wet).connect(mixBus);
    musicNodes.push(master, delay, fb, wet);

    let t = c.currentTime + .15;
    for (const [freq, beats] of MELODY) {
        const dur = beats * BEAT;
        // lead: 2 oscillator lệch nhẹ cho dày tiếng
        [[freq * .998, .38], [freq * 1.004, .3]].forEach(([f2, vol]) => {
            const o = c.createOscillator();
            const g = c.createGain();
            o.type = 'triangle';
            o.frequency.value = f2;
            g.gain.setValueAtTime(0, t);
            g.gain.linearRampToValueAtTime(vol, t + .04);
            g.gain.setValueAtTime(vol, t + dur * .6);
            g.gain.exponentialRampToValueAtTime(.0001, t + dur * .98);
            o.connect(g).connect(master);
            o.start(t); o.stop(t + dur);
            musicNodes.push(o);
        });
        // chuông cao lấp lánh
        const bell = c.createOscillator();
        const bg2 = c.createGain();
        bell.type = 'sine';
        bell.frequency.value = freq * 2;
        bg2.gain.setValueAtTime(.09, t);
        bg2.gain.exponentialRampToValueAtTime(.0001, t + dur * .8);
        bell.connect(bg2).connect(master);
        bell.start(t); bell.stop(t + dur);
        // bass
        const bass = c.createOscillator();
        const bg3 = c.createGain();
        bass.type = 'sine';
        bass.frequency.value = freq / 4;
        bg3.gain.setValueAtTime(.09, t);
        bg3.gain.exponentialRampToValueAtTime(.0001, t + dur);
        bass.connect(bg3).connect(master);
        bass.start(t); bass.stop(t + dur);
        musicNodes.push(bell, bass);

        t += dur;
    }
    const totalMs = (t - c.currentTime + 1.6) * 1000;
    musicTimer = setTimeout(() => { if (musicOn) playMelody(); }, totalMs);
}

function stopMusic() {
    clearTimeout(musicTimer);
    musicNodes.forEach(n => { try { n.stop ? n.stop() : n.disconnect(); } catch (e) { } });
    musicNodes = [];
}

function toggleMusic(force) {
    musicOn = force !== undefined ? force : !musicOn;
    const btn = $('musicToggle');
    if (musicOn) { ac(); playMelody(); btn.textContent = '🔊'; btn.classList.add('active'); }
    else { stopMusic(); btn.textContent = '🔇'; btn.classList.remove('active'); }
}

/* ══════════ VÒNG ÁNH SÁNG QUANH BÁNH (visualizer) ══════════ */
const viz = $('vizCanvas');
const vizx = viz.getContext('2d');
let vizRot = 0;

/* Quầng sáng giữa vòng visualizer.
   Bản cũ gọi createRadialGradient() ở MỖI khung hình — tức là cấp phát một đối
   tượng gradient mới 60 lần mỗi giây, chỉ để đổi mỗi độ mờ. Dựng sẵn một lần với
   màu đặc, rồi điều tiết bằng globalAlpha: nhìn y hệt, mà không rác bộ nhớ. */
let vizGlow = null;

function drawViz(ts) {
    // Trên điện thoại vẽ cách khung: vòng nhạc nhảy 30 lần/giây là quá đủ mượt,
    // mà nhường được nửa thời gian CPU cho thao tác cuộn.
    if (isSmall) { vizSkip ^= 1; if (vizSkip) return; }

    const W = viz.width, cx = W / 2, cy = W / 2;
    vizx.clearRect(0, 0, W, W);
    const bars = PERF.vizBars, baseR = 104;
    const pal = CONFIG.palette, nc = pal.length;
    vizRot += isSmall ? .0032 : .0016;          // bù lại vì mỗi khung vẽ đi 2 nhịp

    let bass = 0;
    if (analyser && musicOn) {
        analyser.getByteFrequencyData(vizData);
        for (let i = 0; i < 8; i++) bass += vizData[i];
        bass /= 8 * 255;
    }

    /* Gom các vạch theo MÀU rồi vẽ mỗi màu một lượt.
       Bản cũ gọi stroke() riêng cho từng vạch — 40 lượt mỗi khung hình, mà mỗi
       lượt stroke() đều bắt trình duyệt dựng lại đường viền từ đầu. Bảng màu chỉ
       có 7 màu, nên gom lại còn đúng 7 lượt. */
    vizx.lineWidth = 3;
    vizx.lineCap = 'round';

    for (let c = 0; c < nc; c++) {
        let sum = 0, n = 0;
        vizx.beginPath();

        for (let i = c; i < bars; i += nc) {
            const v = (analyser && musicOn)
                ? (vizData[2 + i] / 255) * 46 + 4
                : 8 + 6 * Math.sin(ts / 520 + i * .42);   // nhịp thở khi chưa bật nhạc

            const a = (i / bars) * Math.PI * 2 + vizRot;
            const ca = Math.cos(a), sa = Math.sin(a);
            vizx.moveTo(cx + ca * baseR, cy + sa * baseR);
            vizx.lineTo(cx + ca * (baseR + v), cy + sa * (baseR + v));
            sum += v; n++;
        }

        if (!n) continue;
        vizx.globalAlpha = .5 + (sum / n / 52) * .4;      // độ mờ trung bình của nhóm
        vizx.strokeStyle = pal[c];
        vizx.stroke();
    }

    // Quầng sáng giữa đập theo bass — gradient dựng sẵn, chỉ đổi độ mờ
    if (!vizGlow) {
        vizGlow = vizx.createRadialGradient(cx, cy, 10, cx, cy, baseR);
        vizGlow.addColorStop(0, 'rgba(255,215,110,1)');
        vizGlow.addColorStop(1, 'rgba(255,215,110,0)');
    }
    vizx.globalAlpha = .10 + bass * .3;
    vizx.fillStyle = vizGlow;
    vizx.beginPath();
    vizx.arc(cx, cy, baseR, 0, Math.PI * 2);
    vizx.fill();
    vizx.globalAlpha = 1;
}

/* ══════════ TÊN GHÉP TỪ HẠT SÁNG ══════════ */
const nameCv = $('nameCanvas');
const namex = nameCv.getContext('2d');
let nameParticles = [], nameMouse = { x: -9999, y: -9999 };

function buildNameParticles() {
    const dpr = Math.min(devicePixelRatio || 1, PERF.dpr);
    const cssW = nameCv.clientWidth || 600;
    const cssH = nameCv.clientHeight || 150;
    nameCv.width = cssW * dpr;
    nameCv.height = cssH * dpr;
    namex.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Vẽ tên lên canvas ẩn rồi lấy mẫu điểm ảnh
    const off = document.createElement('canvas');
    off.width = cssW; off.height = cssH;
    const ox = off.getContext('2d');
    let fontSize = Math.min(cssH * .62, cssW / (CONFIG.name.length * .48));
    fontSize = Math.max(fontSize, 26);
    ox.font = `700 ${fontSize}px "Dancing Script", cursive`;
    ox.textAlign = 'center';
    ox.textBaseline = 'middle';
    ox.fillStyle = '#fff';
    ox.fillText(CONFIG.name, cssW / 2, cssH / 2);

    const data = ox.getImageData(0, 0, cssW, cssH).data;
    const gap = cssW > 480 ? 3 : 4;
    nameParticles = [];
    const stops = CONFIG.palette;
    for (let y = 0; y < cssH; y += gap) {
        for (let x = 0; x < cssW; x += gap) {
            if (data[(y * cssW + x) * 4 + 3] > 128) {
                const t = x / cssW;
                nameParticles.push({
                    hx: x, hy: y,                                    // vị trí "nhà"
                    x: Math.random() * cssW, y: Math.random() * cssH, // xuất phát ngẫu nhiên → tự bay về ghép chữ
                    vx: 0, vy: 0,
                    zj: rand(-16, 16),                               // độ dày 3D của hologram
                    size: rand(1.1, 2.1),
                    color: Math.random() < .12 ? '#ffffff' : stops[Math.floor(t * stops.length) % stops.length],
                    tw: Math.random() * 6                            // pha nhấp nháy
                });
            }
        }
    }
}

function drawNameParticles(ts) {
    const cssW = nameCv.clientWidth, cssH = nameCv.clientHeight;
    namex.clearRect(0, 0, cssW, cssH);

    // Hologram xoay quanh trục dọc: tự đung đưa + nghiêng theo camera (chuột/gyro)
    const angle = Math.sin(ts * .0005) * .3 + cam.ry * .5;
    const cosA = Math.cos(angle), sinA = Math.sin(angle);
    const F = 520, cxn = cssW / 2, cyn = cssH / 2;

    for (const p of nameParticles) {
        // lò xo kéo hạt về "nhà"
        p.vx += (p.hx - p.x) * .022;
        p.vy += (p.hy - p.y) * .022;
        // chuột/ngón tay đẩy hạt bay tán loạn
        const dx = p.x - nameMouse.x, dy = p.y - nameMouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 4900) {
            const d = Math.sqrt(d2) || 1;
            const f = (70 - d) / 70 * 2.6;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
        }
        p.vx *= .88; p.vy *= .88;
        p.x += p.vx; p.y += p.vy;

        // xoay quanh tâm chữ rồi chiếu phối cảnh
        const rx = p.x - cxn;
        const zr = rx * sinA + p.zj;
        const s = F / (F + zr);
        const sx = cxn + rx * cosA * s;
        const sy = cyn + (p.y - cyn) * s;

        p.tw += .08;
        namex.globalAlpha = (.55 + Math.abs(Math.sin(p.tw)) * .45) * Math.min(Math.max(s, .55), 1);
        namex.fillStyle = p.color;
        namex.fillRect(sx, sy, p.size * s, p.size * s);
    }
    namex.globalAlpha = 1;
}

function explodeName() {
    for (const p of nameParticles) {
        p.vx += rand(-9, 9);
        p.vy += rand(-9, 9);
    }
    window.Stage3D?.explodeHeart();     // trái tim 3D vỡ tung rồi tự ghép lại
    beep(rand(600, 900), .15, 'triangle', .07);
}

/* ══════════ VÒNG LẶP CHÍNH ══════════
   MỘT vòng requestAnimationFrame duy nhất cho cả trang: engine hạt 2D
   ở đây, và lớp WebGL được gọi nhờ ở cuối. Hai render loop song song
   sẽ tranh nhau khung hình và làm giật — nên chỉ có đúng một. */
let lastAuto = 0, lastTs = 0;
function loop(ts) {
    // dt tính bằng giây, chặn trần 50ms để lúc chuyển tab về không bị "nhảy cóc"
    const dt = lastTs ? Math.min((ts - lastTs) / 1000, .05) : .016;
    lastTs = ts;

    // làm mượt chuyển động camera + giảm dần tốc độ warp
    cam.rx += (targetCam.rx - cam.rx) * .055;
    cam.ry += (targetCam.ry - cam.ry) * .055;
    warp += (2 - warp) * .02;

    // Trên điện thoại khi đã có thiên hà WebGL, trường sao 2D là một lớp phủ
    // toàn màn hình vẽ thừa — bỏ hẳn, tiết kiệm cả lượt vẽ lẫn lượt ghép lớp.
    if (!bg2dOff) drawStars();

    // Vòng visualizer và tên ghép từ hạt nằm ở hai chỗ khác nhau trong thiệp,
    // nên theo dõi riêng: cuộn qua cái nào thì tắt đúng cái đó.
    if (cakeVisible) drawViz(ts);
    if (nameVisible) drawNameParticles(ts);

    fxx.clearRect(0, 0, innerWidth, innerHeight);

    if (flashA > .005) {
        fxx.globalAlpha = flashA;
        fxx.fillStyle = '#fff3d6';
        fxx.fillRect(0, 0, innerWidth, innerHeight);
        flashA *= .86;
    }

    drawFloaters();

    if (autoFireworks && ts - lastAuto > 520) { launchFirework(); lastAuto = ts; }

    for (let i = rockets.length - 1; i >= 0; i--) {
        rockets[i].update(); rockets[i].draw();
        if (rockets[i].dead) rockets.splice(i, 1);
    }
    for (let i = sparksArr.length - 1; i >= 0; i--) {
        sparksArr[i].update(); sparksArr[i].draw();
        if (sparksArr[i].life <= 0) sparksArr.splice(i, 1);
    }
    for (let i = confetti.length - 1; i >= 0; i--) {
        confetti[i].update(); confetti[i].draw();
        if (confetti[i].y > innerHeight + 40) confetti.splice(i, 1);
    }
    fxx.globalAlpha = 1;

    // Trên điện thoại: thiệp nghiêng theo con quay hồi chuyển như cửa sổ VR
    // (GSAP đang giữ transform của .card khi cuộn → nhường quyền cho nó)
    if (gyroActive && !document.documentElement.classList.contains('js-gsap')) {
        $('card').style.transform =
            `perspective(1000px) rotateY(${(cam.ry * 12).toFixed(2)}deg) rotateX(${(-cam.rx * 9).toFixed(2)}deg)`;
    }

    // ── Lớp WebGL: cùng một camera ảo, cùng một nhịp khung hình ──
    if (window.Stage3D) {
        window.Stage3D.look(cam.rx, cam.ry);
        window.Stage3D.render(dt, ts / 1000, warp);
    }

    requestAnimationFrame(loop);
}

/* ══════════ TIÊU ĐỀ ══════════ */
function buildTitle() {
    const el = $('title');
    el.innerHTML = '';
    [...CONFIG.title].forEach((ch, i) => {
        const s = document.createElement('span');
        s.className = 'letter';
        s.textContent = ch === ' ' ? ' ' : ch;
        s.style.animationDelay = (i * .06) + 's';
        el.appendChild(s);
    });
    $('introName').textContent = CONFIG.name;
    document.title = `🎉 Chúc Mừng Sinh Nhật ${CONFIG.name}! 🎂`;
    if (CONFIG.age) {
        $('ageBadge').hidden = false;
        countUp($('ageNum'), CONFIG.age);
    }
}

function countUp(el, target) {
    let cur = 0;
    const step = Math.max(1, Math.round(target / 40));
    const iv = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = cur;
        if (cur >= target) clearInterval(iv);
    }, 40);
}

/* ══════════ LỜI CHÚC GÕ CHỮ ══════════ */
let wishIdx = 0, typeTimer = null;
function typeWish() {
    const el = $('wishText');
    const text = tx(CONFIG.wishes[wishIdx % CONFIG.wishes.length]);
    let i = 0;
    el.textContent = '';
    clearInterval(typeTimer);
    typeTimer = setInterval(() => {
        el.textContent = text.slice(0, ++i);
        if (i >= text.length) {
            clearInterval(typeTimer);
            setTimeout(() => { wishIdx++; typeWish(); }, 2800);
        }
    }, reduceMotion ? 1 : 45);
}

/* ══════════ NẾN & THỔI NẾN ══════════ */
let blownAll = false;

/* CHỈ những ngọn nến trên bánh của tấm thiệp. Màn 6 cũng có một chiếc bánh với
   nến riêng — nếu quét '.candle' toàn trang thì "thổi hết nến" sẽ không bao giờ
   thành công, vì mấy ngọn ở màn 6 chẳng ai thổi. */
const cardCandles = () => [...document.querySelectorAll('#candles .candle')];

function buildCandles(wrap = $('candles'), interactive = true) {
    if (!wrap) return;
    wrap.innerHTML = '';
    for (let i = 0; i < CONFIG.candleCount; i++) {
        const c = document.createElement('div');
        c.className = 'candle';
        c.style.height = (38 + (i % 2 ? 8 : 0)) + 'px';
        c.innerHTML = '<div class="flame"></div>';
        if (interactive) c.addEventListener('click', (e) => { e.stopPropagation(); blowCandle(c); });
        wrap.appendChild(c);
    }
}

function blowCandle(candle) {
    if (candle.classList.contains('out')) return;
    candle.classList.add('out');
    const smoke = document.createElement('div');
    smoke.className = 'smoke';
    candle.appendChild(smoke);
    setTimeout(() => smoke.remove(), 2300);
    beep(rand(300, 500), .12, 'sine', .05);
    buzz(20);
    checkAllOut();
}

function blowAll() {
    cardCandles().forEach((c, i) => setTimeout(() => blowCandle(c), i * 110));
}

function relightCandles() {
    cardCandles().forEach(c => c.classList.remove('out'));
    blownAll = false;
    $('cakeHint').textContent = tx('{Em} thổi nến và ước đi, {anh} tính tới ba nhé 🕯️');
}

function checkAllOut() {
    const all = cardCandles().every(c => c.classList.contains('out'));
    if (all && !blownAll) {
        blownAll = true;
        $('cakeHint').innerHTML = tx('🌠 Điều ước của {em} bay đi rồi! <button class="btn" id="relightBtn" style="padding:6px 14px;font-size:.85rem;margin-left:8px">Thắp lại 🕯️</button>');
        $('relightBtn').addEventListener('click', relightCandles);
        celebrate();
        buzz([40, 60, 40, 60, 80]);
        toast(tx('{Em} ước gì {anh} cũng sẽ cùng {em} làm cho thành sự thật ✨'));
    }
}

function celebrate() {
    warp = Math.max(warp, 24);               // tăng tốc bay xuyên sao mỗi lần ăn mừng
    rainConfetti(140);
    confettiCannons(50);
    for (let i = 0; i < 9; i++) setTimeout(launchFirework, i * 240);
    if (!musicOn) toggleMusic(true);
}

/* ══════════ MICRO — thổi nến thật ══════════ */
let micStream = null, micRAF = null;

async function startMic() {
    if (micStream) { stopMic(); return; }
    try {
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const c = ac();
        const src = c.createMediaStreamSource(micStream);
        const micAnalyser = c.createAnalyser();
        micAnalyser.fftSize = 1024;
        src.connect(micAnalyser);
        const data = new Uint8Array(micAnalyser.frequencyBinCount);
        $('blowBtn').classList.add('on');
        $('blowBtn').textContent = '🎤 Đang nghe… thổi đi!';
        toast('Hãy thổi vào micro nhé 💨');

        const tick = () => {
            micAnalyser.getByteFrequencyData(data);
            let low = 0;
            for (let i = 0; i < 40; i++) low += data[i];
            low /= 40;
            if (low > 105) blowAll();
            micRAF = requestAnimationFrame(tick);
        };
        tick();
    } catch (err) {
        toast('Không dùng được micro — nhấn vào nến để thổi nhé 🕯️');
        blowAll();
    }
}

function stopMic() {
    if (micStream) micStream.getTracks().forEach(t => t.stop());
    micStream = null;
    cancelAnimationFrame(micRAF);
    $('blowBtn').classList.remove('on');
    $('blowBtn').textContent = '🎤 Thổi nến bằng mic';
}

/* ══════════ LÁ THƯ TAY ══════════ */
function openLetter() {
    const env = $('envelope');
    if (env.classList.contains('open')) return;
    env.classList.add('open');
    beep(660, .3, 'triangle', .08);
    setTimeout(() => {
        $('envelopeWrap').classList.add('gone');
        const letter = $('letter');
        letter.hidden = false;
        typeLetter();
        popConfettiFrom(letter, 40);
    }, 1050);
}

function typeLetter() {
    const el = $('letterText');
    const text = tx(CONFIG.letter);
    let i = 0;
    const iv = setInterval(() => {
        el.textContent = text.slice(0, ++i);
        if (i >= text.length) {
            clearInterval(iv);
            const sign = $('letterSign');
            sign.textContent = tx(CONFIG.letterSign);
            sign.classList.add('show');
        }
    }, reduceMotion ? 1 : 26);
}

/* ══════════ ĐẾM NGƯỢC ══════════ */
function nextBirthday() {
    const [m, d] = CONFIG.birthday.split('-').map(Number);
    const now = new Date();
    let target = new Date(now.getFullYear(), m - 1, d, 0, 0, 0);
    const isToday = now.getMonth() === m - 1 && now.getDate() === d;
    if (!isToday && target < now) target = new Date(now.getFullYear() + 1, m - 1, d);
    return { target, isToday };
}

function tickCountdown() {
    const { target, isToday } = nextBirthday();
    const note = $('cdNote');
    if (isToday) {
        $('countdown').style.display = 'none';
        note.className = 'cd-note party';
        note.textContent = tx('🎉 Hôm nay chính là sinh nhật {em}! 🎉');
        return;
    }
    const diff = Math.max(0, target - new Date());
    const s = Math.floor(diff / 1000);
    $('cdDays').textContent = Math.floor(s / 86400);
    $('cdHours').textContent = String(Math.floor(s % 86400 / 3600)).padStart(2, '0');
    $('cdMins').textContent = String(Math.floor(s % 3600 / 60)).padStart(2, '0');
    $('cdSecs').textContent = String(s % 60).padStart(2, '0');
    note.textContent = `Ngày đặc biệt: ${target.getDate()}/${target.getMonth() + 1}/${target.getFullYear()}`;
}

/* ══════════ CHÚNG MÌNH ĐÃ BÊN NHAU ══════════ */
function tickLove() {
    const start = new Date(CONFIG.loveStart + 'T00:00:00');
    if (isNaN(start)) return;
    const diff = Math.max(0, Date.now() - start.getTime());
    const s = Math.floor(diff / 1000);
    const days = Math.floor(s / 86400);

    $('lcDays').textContent = days.toLocaleString('vi-VN');
    $('lcHours').textContent = String(Math.floor(s % 86400 / 3600)).padStart(2, '0');
    $('lcMins').textContent = String(Math.floor(s % 3600 / 60)).padStart(2, '0');
    $('lcSecs').textContent = String(s % 60).padStart(2, '0');

    const d = start;
    $('loveNote').textContent =
        `Từ ngày ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} 💘`;

    // vài con số vui vui
    const months = Math.floor(days / 30.44);
    const beats = Math.round(days * 24 * 60 * 75 / 1e6);   // ~75 nhịp/phút
    $('loveExtra').textContent = tx(
        `≈ ${Math.floor(days / 7).toLocaleString('vi-VN')} tuần · ${months} tháng — ` +
        `tim {anh} đã đập khoảng ${beats} triệu nhịp khi có {em} 💓`
    );
}

/* ══════════ LÝ DO {ANH} YÊU {EM} ══════════ */
let reasonOrder = [], reasonPos = 0;

function showReason(first = false) {
    if (!reasonOrder.length) {
        reasonOrder = CONFIG.reasons.map((_, i) => i).sort(() => Math.random() - .5);
        reasonPos = 0;
    }
    const idx = reasonOrder[reasonPos % reasonOrder.length];
    const card = $('reasonCard');

    card.classList.remove('flip-in');
    void card.offsetWidth;                       // ép trình duyệt chạy lại animation
    card.classList.add('flip-in');

    $('reasonNum').textContent = String(idx + 1).padStart(2, '0');
    $('reasonText').textContent = tx(CONFIG.reasons[idx]);
    $('reasonCount').textContent = `${(reasonPos % reasonOrder.length) + 1} / ${CONFIG.reasons.length}`;

    if (!first) {
        beep(rand(520, 760), .16, 'triangle', .07);
        buzz(12);
        popConfettiFrom(card, 18);
    }
    reasonPos++;
}

/* ══════════ DÒNG THỜI GIAN CHÚNG MÌNH ══════════ */
function buildTimeline() {
    const ol = $('timeline');
    ol.innerHTML = '';
    CONFIG.timeline.forEach((m, i) => {
        const li = document.createElement('li');
        li.className = 'tl-item';
        li.style.transitionDelay = (i * .09) + 's';
        li.innerHTML = `
            <span class="tl-dot">${m.icon || '💗'}</span>
            <div class="tl-body">
                <time class="tl-date"></time>
                <h4 class="tl-title"></h4>
                <p class="tl-text"></p>
            </div>`;
        li.querySelector('.tl-date').textContent = m.date;
        li.querySelector('.tl-title').textContent = tx(m.title);
        li.querySelector('.tl-text').textContent = tx(m.text);
        ol.appendChild(li);
    });

    if (document.documentElement.classList.contains('js-gsap')) return;   // GSAP lo phần này
    const io = new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
    }, { threshold: .3 });
    ol.querySelectorAll('.tl-item').forEach(el => io.observe(el));
}

/* ══════════ ALBUM ẢNH + LIGHTBOX ══════════ */
function buildGallery() {
    const wrap = $('gallery');
    wrap.innerHTML = '';
    CONFIG.photos.forEach((p, i) => {
        const fig = document.createElement('figure');
        fig.className = 'photo';
        fig.style.animationDelay = (i * .08) + 's';

        const img = new Image();
        img.alt = tx(p.caption || 'Ảnh kỷ niệm');
        img.src = p.src;
        img.onerror = () => {
            img.remove();
            fig.textContent = CONFIG.photoEmojis[i % CONFIG.photoEmojis.length];
            fig.dataset.placeholder = fig.textContent;
        };
        fig.appendChild(img);

        if (p.caption) {
            const cap = document.createElement('figcaption');
            cap.textContent = tx(p.caption);
            fig.appendChild(cap);
        }
        fig.addEventListener('click', () => openLightbox(p.src, fig.dataset.placeholder));
        wrap.appendChild(fig);
    });
}

let lightbox;
function openLightbox(src, placeholder) {
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.addEventListener('click', () => lightbox.classList.remove('show'));
        document.body.appendChild(lightbox);
    }
    lightbox.innerHTML = placeholder
        ? `<div class="ph">${placeholder}</div>`
        : `<img src="${src}" alt="Ảnh kỷ niệm">`;
    lightbox.classList.add('show');
}

/* ══════════ THẺ LỜI CHÚC LẬT ══════════ */
function buildFortunes() {
    const grid = $('fortuneGrid');
    grid.innerHTML = '';
    const shuffled = [...CONFIG.promises].sort(() => Math.random() - .5).slice(0, 6);
    const covers = ['💍', '💗', '🤞', '💞', '🎀', '🌹'];
    shuffled.forEach((text, i) => {
        const card = document.createElement('div');
        card.className = 'fortune';
        card.innerHTML = `
            <div class="fortune-inner">
                <div class="fortune-face fortune-front">${covers[i % covers.length]}</div>
                <div class="fortune-face fortune-back"></div>
            </div>`;
        card.querySelector('.fortune-back').textContent = tx(text);
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
            if (card.classList.contains('flipped')) {
                beep(rand(500, 800), .12, 'triangle', .06);
                buzz(15);
                popConfettiFrom(card, 24);
            }
        });
        grid.appendChild(card);
    });
}

/* ══════════ TƯỜNG LỜI CHÚC ══════════ */
const WALL_KEY = 'birthday-wishes-v1';
const NOTE_COLORS = ['#ffe082', '#ffb3d1', '#b3e5fc', '#c8f7d4', '#e1c4ff', '#ffd6a5'];

function loadWall() { try { return JSON.parse(localStorage.getItem(WALL_KEY)) || []; } catch { return []; } }
function saveWall(list) { localStorage.setItem(WALL_KEY, JSON.stringify(list)); }

function renderWall() {
    const list = loadWall();
    const wall = $('wishWall');
    wall.innerHTML = '';
    if (!list.length) {
        wall.innerHTML = `<p class="wall-empty">${tx('Chưa có dòng nào — {em} viết cho {anh} vài chữ nhé 💌')}</p>`;
        return;
    }
    list.forEach((w, i) => {
        const note = document.createElement('div');
        note.className = 'note';
        note.style.background = NOTE_COLORS[i % NOTE_COLORS.length];
        note.style.setProperty('--tilt', rand(-3, 3).toFixed(2) + 'deg');
        note.innerHTML = `<button class="del" title="Xoá">✕</button><p></p><b></b>`;
        note.querySelector('p').textContent = w.msg;
        note.querySelector('b').textContent = '— ' + (w.author || 'Ẩn danh');
        note.querySelector('.del').addEventListener('click', () => {
            const cur = loadWall();
            cur.splice(i, 1);
            saveWall(cur);
            renderWall();
        });
        wall.appendChild(note);
    });
}

/* ══════════ BÓNG BAY & MƯA EMOJI ══════════ */
function spawnBalloon() {
    if (reduceMotion) return;
    const b = document.createElement('div');
    b.className = 'rising-balloon';
    b.textContent = pick(['🎈', '🎈', '🎈', '🎀', '💝', '⭐']);
    b.style.left = rand(0, 92) + 'vw';
    b.style.fontSize = rand(22, 46) + 'px';
    b.style.animationDuration = rand(11, 20) + 's';
    $('balloonsBg').appendChild(b);
    setTimeout(() => b.remove(), 21000);
}

function emojiRain() {
    const emojis = ['🎂', '🎉', '🎈', '🍰', '🎁', '💖', '⭐', '🥳'];
    const count = isSmall ? 22 : 40;
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'rising-balloon';
            el.textContent = pick(emojis);
            el.style.left = rand(0, 95) + 'vw';
            el.style.bottom = 'auto';
            el.style.top = '-10vh';
            el.style.fontSize = rand(22, 46) + 'px';
            el.style.animation = `fall ${rand(3, 6)}s linear forwards`;
            $('balloonsBg').appendChild(el);
            setTimeout(() => el.remove(), 7000);
        }, i * 60);
    }
}

const styleTag = document.createElement('style');
styleTag.textContent = '@keyframes fall{to{transform:translateY(120vh) rotate(360deg);opacity:0}}';
document.head.appendChild(styleTag);

/* ══════════ NGHIÊNG THIỆP + VỆT SÁNG CHUỘT ══════════ */
function enableTilt() {
    const card = $('card');
    if (matchMedia('(pointer: coarse)').matches || reduceMotion) return;
    card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(1000px) rotateY(${px * 11}deg) rotateX(${-py * 11}deg) translateZ(6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
}

let lastSpark = 0;
function sparkTrail(e) {
    if (reduceMotion) return;
    const now = performance.now();
    if (now - lastSpark < 45) return;
    lastSpark = now;
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = (e.clientX - 5) + 'px';
    s.style.top = (e.clientY - 5) + 'px';
    s.style.background = pick(CONFIG.palette);
    s.style.boxShadow = `0 0 12px ${s.style.background}`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 900);
}

/* Reveal khi cuộn. Nếu choreo.js (GSAP) đã lên, nhường hẳn quyền cho nó —
   hai bên cùng ghi opacity/transform lên một phần tử thì sẽ giật. */
function observePanels() {
    if (document.documentElement.classList.contains('js-gsap')) return;
    const io = new IntersectionObserver((entries) => {
        entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); });
    }, { threshold: .18 });
    document.querySelectorAll('.panel').forEach(p => io.observe(p));
}

/* ══════════ NÚT BẤT NGỜ ══════════ */
const SURPRISES = [
    () => { confettiCannons(90); toast('Đại bác kim tuyến! 🎊'); },
    () => { for (let i = 0; i < 14; i++) setTimeout(launchFirework, i * 140); toast('Đại tiệc pháo hoa! 🎆'); },
    () => { explodeName(); toast('Bùm! Tên bay tán loạn rồi tự ghép lại ✨'); },
    () => { blowAll(); toast('Thổi hết nến rồi — ước đi nào! 🕯️'); },
    () => { emojiRain(); toast('Mưa bánh kem! 🍰'); },
    () => { $('themeToggle').click(); }
];
let surpriseIdx = 0;
function surprise() {
    SURPRISES[surpriseIdx % SURPRISES.length]();
    surpriseIdx++;
}

/* ══════════ CHỦ ĐỀ ══════════ */
const THEMES = ['night', 'luxe', 'party'];
const THEME_META = {
    night: { icon: '🌙', label: 'Đêm sao 🌙' },
    luxe: { icon: '✨', label: 'Dạ tiệc vàng ✨' },
    party: { icon: '☀️', label: 'Tiệc pastel ☀️' }
};

function applyTheme(name, silent = false) {
    document.documentElement.dataset.theme = name;
    $('themeToggle').textContent = THEME_META[name].icon;
    localStorage.setItem('bd-theme', name);
    window.Stage3D?.setTheme(name);     // nhuộm lại cả thiên hà, trái tim, bụi vàng
    if (!silent) toast('Chế độ ' + THEME_META[name].label);
}

/* ══════════ GYROSCOPE — nghiêng điện thoại là cả không gian xoay theo ══════════ */
function handleOrientation(e) {
    if (e.gamma == null && e.beta == null) return;
    if (gyroBase === null) gyroBase = e.beta ?? 45;   // lấy góc cầm máy ban đầu làm mốc
    gyroActive = true;
    const g = Math.max(-40, Math.min(40, e.gamma || 0));
    const b = Math.max(-40, Math.min(40, (e.beta || 0) - gyroBase));
    targetCam.ry = g / 40 * .85;
    targetCam.rx = b / 40 * .65;
}

function initGyro() {
    if (!isTouch) return;
    try {
        // iOS 13+ bắt buộc xin quyền trong một cú chạm của người dùng
        if (typeof DeviceOrientationEvent !== 'undefined' &&
            typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(st => {
                    if (st === 'granted') {
                        addEventListener('deviceorientation', handleOrientation);
                        toast('Nghiêng điện thoại để nhìn quanh không gian 🪐');
                    }
                })
                .catch(() => { });
        } else {
            addEventListener('deviceorientation', handleOrientation);
        }
    } catch (e) { }
}

/* ══════════════════════════════════════════════════════════════
   HÀNH TRÌNH 5 MÀN — mỗi màn một nghi thức chạm khác nhau
   1. Chạm để thắp nến     2. Nối chòm sao       3. Thả bóng bay
   4. Kéo ruy băng mở quà  5. Chạm & giữ trái tim → vào tiệc
   ══════════════════════════════════════════════════════════════ */
const SCENE_COUNT = 6;
let sceneIdx = 1;
const sceneReady = {};                       // đảm bảo mỗi màn chỉ khởi tạo một lần

function buildDots() {
    const wrap = $('journeyDots');
    wrap.innerHTML = '';
    for (let i = 1; i <= SCENE_COUNT; i++) {
        const d = document.createElement('span');
        d.className = 'jd' + (i === 1 ? ' now' : '');
        wrap.appendChild(d);
    }
}

function paintDots() {
    [...$('journeyDots').children].forEach((d, i) => {
        d.className = 'jd' + (i + 1 < sceneIdx ? ' done' : i + 1 === sceneIdx ? ' now' : '');
    });
}

/* Chuyển màn: màn cũ phóng to mờ dần, màn mới hiện lên */
function gotoScene(n) {
    if (n > SCENE_COUNT) { enterParty(); return; }
    const cur = $('scene' + sceneIdx);
    cur.classList.add('leaving');
    cur.classList.remove('active');
    setTimeout(() => cur.classList.remove('leaving'), 900);

    sceneIdx = n;
    paintDots();
    const next = $('scene' + n);
    setTimeout(() => {
        next.classList.add('active');
        SCENE_INIT[n] && SCENE_INIT[n]();
    }, 380);
}

/* Kết thúc một màn: ẩn gợi ý, hiện lời dẫn, rồi tự sang màn sau */
function finishScene(hintId, doneId, delay = 2200) {
    if (hintId) $(hintId).classList.add('fade');
    if (doneId) setTimeout(() => { $(doneId).hidden = false; }, 500);
    setTimeout(() => gotoScene(sceneIdx + 1), delay);
}

/* ── MÀN 1: thắp nến ── */
function lightIntroCandle() {
    const intro = $('intro');
    if (intro.classList.contains('lit')) return;
    intro.classList.add('lit');
    ac();
    beep(180, .5, 'sine', .1);              // tiếng "phù" trầm
    setTimeout(() => beep(880, .4, 'sine', .06), 200);
    setTimeout(() => { $('introReveal').hidden = false; }, 1500);
}

/* ── MÀN 2: nối các vì sao thành chòm sao hình trái tim ── */
let constRAF = null;
function initConstellation() {
    if (sceneReady[2]) return;
    sceneReady[2] = true;

    const cv = $('constCanvas');
    const cx = cv.getContext('2d');
    const dpr = Math.min(devicePixelRatio || 1, PERF.dpr);
    let W = cv.clientWidth, H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // 10 điểm đặt theo phương trình trái tim, xếp theo thứ tự vòng quanh
    const R = Math.min(W, H) * (isSmall ? .16 : .19);
    const nodes = [];
    const COUNT = 10;
    for (let i = 0; i < COUNT; i++) {
        const t = -Math.PI / 2 + (Math.PI * 2 / COUNT) * i;
        const hx = 16 * Math.pow(Math.sin(t), 3);
        const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        nodes.push({
            x: W / 2 + hx * R / 16,
            y: H / 2 - 30 + hy * R / 16,
            lit: false, ph: Math.random() * 6
        });
    }

    let next = 0, closed = false, glow = 0;
    const dust = [];   // hạt sáng toả ra khi nối được một ngôi sao

    const hitRadius = isSmall ? 44 : 34;
    function tryHit(px, py) {
        if (closed) return;
        const n = nodes[next];
        if (Math.hypot(px - n.x, py - n.y) > hitRadius) return;
        n.lit = true;
        beep(392 * Math.pow(2, next / 12), .22, 'triangle', .09);
        buzz(14);
        for (let i = 0; i < 14; i++) {
            const a = Math.random() * Math.PI * 2, s = rand(.6, 3);
            dust.push({ x: n.x, y: n.y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, c: pick(CONFIG.palette) });
        }
        next++;
        if (next >= nodes.length) {
            closed = true;
            beep(880, .6, 'sine', .12);
            buzz([30, 50, 30]);
            finishScene('constHint', 'constDone', 2600);
        }
    }

    const pos = (e) => {
        const r = cv.getBoundingClientRect();
        const t = e.touches ? e.touches[0] : e;
        return [t.clientX - r.left, t.clientY - r.top];
    };
    cv.addEventListener('pointerdown', (e) => tryHit(...pos(e)));
    cv.addEventListener('pointermove', (e) => { if (e.buttons || e.pointerType === 'touch') tryHit(...pos(e)); });

    addEventListener('resize', () => {
        W = cv.clientWidth; H = cv.clientHeight;
        cv.width = W * dpr; cv.height = H * dpr;
        cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });

    function draw(ts) {
        cx.clearRect(0, 0, W, H);
        if (closed) glow = Math.min(glow + .02, 1);

        // đường nối đã vẽ
        cx.lineWidth = 2;
        cx.lineCap = 'round';
        for (let i = 0; i < next - 1; i++) {
            const g = cx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[i + 1].x, nodes[i + 1].y);
            g.addColorStop(0, '#ffe9a8');
            g.addColorStop(1, '#ff9ad5');
            cx.strokeStyle = g;
            cx.globalAlpha = .55 + glow * .45;
            cx.beginPath();
            cx.moveTo(nodes[i].x, nodes[i].y);
            cx.lineTo(nodes[i + 1].x, nodes[i + 1].y);
            cx.stroke();
        }
        if (closed) {   // khép kín vòng trái tim
            cx.strokeStyle = '#ffb0dd';
            cx.globalAlpha = .55 + glow * .45;
            cx.beginPath();
            cx.moveTo(nodes[nodes.length - 1].x, nodes[nodes.length - 1].y);
            cx.lineTo(nodes[0].x, nodes[0].y);
            cx.stroke();

            // hào quang trái tim
            cx.globalAlpha = glow * .3;
            cx.fillStyle = '#ff7ec2';
            cx.filter = 'blur(28px)';
            cx.beginPath();
            nodes.forEach((n, i) => i ? cx.lineTo(n.x, n.y) : cx.moveTo(n.x, n.y));
            cx.closePath();
            cx.fill();
            cx.filter = 'none';
        }

        // các ngôi sao
        nodes.forEach((n, i) => {
            n.ph += .05;
            const isNext = i === next && !closed;
            const tw = .6 + Math.abs(Math.sin(n.ph)) * .4;

            if (isNext) {   // vòng nhịp mời gọi quanh ngôi sao kế tiếp
                const pulse = (ts % 1400) / 1400;
                cx.globalAlpha = (1 - pulse) * .8;
                cx.strokeStyle = '#ffe9a8';
                cx.lineWidth = 2;
                cx.beginPath();
                cx.arc(n.x, n.y, 10 + pulse * 26, 0, Math.PI * 2);
                cx.stroke();
            }

            cx.globalAlpha = n.lit ? 1 : .5 * tw;
            cx.fillStyle = n.lit ? '#fff6d8' : '#c9c2e8';
            cx.beginPath();
            cx.arc(n.x, n.y, n.lit ? 4.5 : 3, 0, Math.PI * 2);
            cx.fill();

            if (n.lit) {    // quầng sáng của sao đã nối
                const g = cx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 26);
                g.addColorStop(0, 'rgba(255,235,170,.55)');
                g.addColorStop(1, 'rgba(255,235,170,0)');
                cx.globalAlpha = 1;
                cx.fillStyle = g;
                cx.beginPath();
                cx.arc(n.x, n.y, 26, 0, Math.PI * 2);
                cx.fill();
            }
        });

        // bụi sao
        for (let i = dust.length - 1; i >= 0; i--) {
            const d = dust[i];
            d.x += d.vx; d.y += d.vy; d.vx *= .95; d.vy *= .95; d.life -= .022;
            cx.globalAlpha = Math.max(d.life, 0);
            cx.fillStyle = d.c;
            cx.fillRect(d.x, d.y, 2, 2);
            if (d.life <= 0) dust.splice(i, 1);
        }

        cx.globalAlpha = 1;
        constRAF = requestAnimationFrame(draw);
    }
    constRAF = requestAnimationFrame(draw);
}

/* ── MÀN 3: thả bóng bay mang từng chữ trong tên ── */
function initWishBalloons() {
    if (sceneReady[3]) return;
    sceneReady[3] = true;

    const wrap = $('wishBalloons');
    const letters = [...CONFIG.name].filter(c => c.trim()).slice(0, 7);
    const colors = ['#ff6ec7', '#ffd76b', '#6ff2d0', '#9b6bff', '#6fd0ff', '#ff5f8d', '#ffa86b'];
    const scale = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.7];   // ngũ cung đi lên
    let released = 0;

    $('balloonName').textContent = CONFIG.name;

    letters.forEach((ch, i) => {
        const b = document.createElement('div');
        b.className = 'wbal';
        b.textContent = ch;
        b.style.left = ((i + .5) / letters.length * 78 + 11) + '%';
        b.style.background = `radial-gradient(circle at 34% 30%, ${colors[i % colors.length]}, ${colors[i % colors.length]}bb 55%, #00000055)`;
        b.style.animationDelay = (i * .28) + 's';
        b.style.bottom = (140 + (i % 2 ? 34 : 0)) + 'px';

        b.addEventListener('click', () => {
            if (b.classList.contains('fly')) return;
            b.classList.add('fly');
            beep(scale[i % scale.length], .5, 'triangle', .1);
            buzz(18);
            released++;
            if (released === letters.length) {
                setTimeout(() => finishScene('balloonHint', 'balloonDone', 2600), 700);
            }
        }, { passive: true });

        wrap.appendChild(b);
    });
}

/* ── MÀN 4: kéo dải ruy băng để bung nắp hộp quà ── */
function initGiftDrag() {
    if (sceneReady[4]) return;
    sceneReady[4] = true;

    const ribbon = $('giftRibbon');
    const box = $('giftBox');
    const NEED = 150;               // quãng kéo cần thiết
    let startX = null, opened = false;

    const onDown = (e) => {
        if (opened) return;
        startX = (e.touches ? e.touches[0] : e).clientX;
        ribbon.setPointerCapture?.(e.pointerId);
    };
    const onMove = (e) => {
        if (startX === null || opened) return;
        const x = (e.touches ? e.touches[0] : e).clientX;
        const dx = x - startX;
        ribbon.style.transform = `translateX(${dx}px) rotate(${dx * .02}deg)`;
        ribbon.style.opacity = Math.max(1 - Math.abs(dx) / (NEED * 1.6), .25);
        if (Math.abs(dx) > 40 && Math.random() < .12) beep(rand(300, 600), .05, 'triangle', .03);
        if (Math.abs(dx) >= NEED) open();
    };
    const onUp = () => {
        if (opened) { startX = null; return; }
        startX = null;
        ribbon.style.transition = 'transform .5s cubic-bezier(.34,1.56,.64,1), opacity .5s';
        ribbon.style.transform = '';
        ribbon.style.opacity = '';
        setTimeout(() => { ribbon.style.transition = ''; }, 520);
    };

    function open() {
        opened = true;
        box.classList.add('open');
        ribbon.style.transition = 'transform .6s ease-in, opacity .5s';
        ribbon.style.transform = 'translateX(120vw) rotate(40deg)';
        ribbon.style.opacity = '0';          // inline thắng class, phải tự đặt
        boom(true);
        buzz([30, 40, 60]);
        flashA = .3;
        finishScene('giftHint', 'giftDone', 2800);
    }

    ribbon.addEventListener('pointerdown', onDown);
    addEventListener('pointermove', onMove);
    addEventListener('pointerup', onUp);
    addEventListener('pointercancel', onUp);
    // Chạm nhanh nhiều lần cũng mở được (phòng khi kéo không tiện)
    ribbon.addEventListener('dblclick', open);
}

/* ── MÀN 5: chạm & giữ trái tim cho tới khi vỡ oà ── */
function initHeartHold() {
    if (sceneReady[5]) return;
    sceneReady[5] = true;

    const hold = $('heartHold');
    const ring = $('heartRing');
    const LEN = 339.3;
    const DURATION = 1600;
    let holding = false, prog = 0, raf = null, done = false, droneOsc = null, droneGain = null;

    function startDrone() {
        const c = ac();
        droneOsc = c.createOscillator();
        droneGain = c.createGain();
        droneOsc.type = 'sine';
        droneOsc.frequency.setValueAtTime(220, c.currentTime);
        droneOsc.frequency.linearRampToValueAtTime(880, c.currentTime + DURATION / 1000);
        droneGain.gain.setValueAtTime(.0001, c.currentTime);
        droneGain.gain.linearRampToValueAtTime(.09, c.currentTime + .2);
        droneOsc.connect(droneGain).connect(mixBus);
        droneOsc.start();
    }
    function stopDrone() {
        if (!droneOsc) return;
        try {
            droneGain.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime + .12);
            droneOsc.stop(audioCtx.currentTime + .15);
        } catch (e) { }
        droneOsc = null;
    }

    function tick() {
        prog += holding ? (16 / DURATION) : -(16 / DURATION) * 2.2;
        prog = Math.max(0, Math.min(1, prog));
        ring.style.strokeDashoffset = LEN * (1 - prog);

        // hạt sáng bị hút vào trái tim
        if (holding && Math.random() < .5) {
            const r = hold.getBoundingClientRect();
            const cxp = r.left + r.width / 2, cyp = r.top + r.height / 2;
            const a = Math.random() * Math.PI * 2, d = rand(90, 220);
            sparksArr.push(new Spark(
                (cxp + Math.cos(a) * d) - innerWidth / 2,
                (cyp + Math.sin(a) * d) - innerHeight / 2, 0,
                pick(['#ff8ec4', '#ffd76b', '#ffffff']),
                { vx: -Math.cos(a) * 4.2, vy: -Math.sin(a) * 4.2, vz: 0, gravity: 0, friction: 1, decay: .028, trailLen: 4 }
            ));
        }

        if (prog >= 1 && !done) { complete(); return; }
        if (prog > 0 || holding) raf = requestAnimationFrame(tick);
        else raf = null;
    }

    function down(e) {
        if (done) return;
        e.preventDefault();
        holding = true;
        hold.classList.add('holding');
        initGyro();                       // xin quyền con quay hồi chuyển ngay trong cú chạm này (iOS)
        startDrone();
        if (!raf) raf = requestAnimationFrame(tick);
    }
    function up() {
        if (done) return;
        holding = false;
        hold.classList.remove('holding');
        stopDrone();
        if (!raf && prog > 0) raf = requestAnimationFrame(tick);
    }

    function complete() {
        done = true;
        holding = false;
        cancelAnimationFrame(raf);
        stopDrone();
        hold.classList.remove('holding');
        hold.classList.add('done');
        ring.style.strokeDashoffset = 0;
        flashA = .45;
        boom(true);
        buzz([50, 40, 90]);
        const r = hold.getBoundingClientRect();
        burst(r.left + r.width / 2 - innerWidth / 2, r.top + r.height / 2 - innerHeight / 2, 0, '#ff8ec4', true);
        finishScene('heartHint', 'heartDone', 2000);
    }

    hold.addEventListener('pointerdown', down);
    addEventListener('pointerup', up);
    addEventListener('pointercancel', up);
    hold.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') down(e); });
    hold.addEventListener('keyup', up);
}

/* ══════════════════════════════════════════════════════════════
   MÀN 6 — CỔNG TRÁI TIM
   ──────────────────────────────────────────────────────────────
   Trái tim hạt 3D (lớp WebGL, phía dưới) nằm chính giữa màn hình, chiếc bánh
   sinh nhật đặt đúng tâm nó. Người xem lăn chuột / chụm ngón tay / kéo lên để
   bay xuyên qua lớp vỏ hạt — vào tới nơi thì bữa tiệc bắt đầu.

   Không có WebGL thì màn này tự bỏ qua (xem initHeartPortal), vì lúc đó chẳng
   có trái tim nào để bay vào cả.
   ══════════════════════════════════════════════════════════════ */
function initHeartPortal() {
    if (sceneReady[6]) return;
    sceneReady[6] = true;

    // Không có lớp 3D → không có gì để bay vào, chuyển thẳng sang bữa tiệc
    if (!has3D()) { setTimeout(enterParty, 400); return; }

    const scene = $('scene6');
    const cakeEl = $('portalCake');
    const meter = $('portalMeter');
    const hint = $('portalHint');

    let target = 0, t = 0, done = false, raf = null;
    /* Bánh phải giữ đúng TỈ LỆ với trái tim ở mọi khổ màn. Trên màn dọc hẹp,
       trái tim bị co lại cho vừa khung — nếu bánh vẫn giữ nguyên cỡ thì quầng
       ấm của nó phủ lên tim và kéo màu về trắng bệch. */
    const fit = window.Stage3D?.portalFit?.() ?? 1;
    const CAKE_BASE = .32 * fit;
    const CAKE_GROW = 1.55 * (.45 + .55 * fit);   // vẫn phóng to đủ ở đoạn cuối

    document.documentElement.classList.add('portal-open');
    buildCandles($('portalCandles'), false);      // nến trang trí, không bấm được
    window.Stage3D?.portal();

    // Nói đúng thao tác của từng loại máy, và nói cả HAI việc làm được
    hint.innerHTML = isTouch
        ? tx('Bánh {anh} giấu trong tim đó…<br><b>vuốt để ngắm quanh · chụm 2 ngón để vào trong</b> 💗')
        : tx('Bánh {anh} giấu trong tim đó…<br><b>kéo để ngắm quanh · lăn chuột để vào trong</b> 💗');

    /* Giảm chuyển động: bỏ hẳn màn bay, một cú chạm là qua */
    if (reduceMotion) {
        hint.innerHTML = tx('Trái tim {anh} mở ra rồi…<br><b>chạm để vào trong</b> 💗');
        scene.addEventListener('click', finish, { once: true });
        return;
    }

    /* Vẽ lại theo tiến độ. Chạy trong rAF riêng vì đây là màn tương tác toàn
       màn hình, nhưng ĐIỀU KIỆN KẾT THÚC không nằm ở đây — xem push(). */
    function frame() {
        t += (target - t) * .11;
        window.Stage3D?.portalZoom(t);

        const s = CAKE_BASE + t * CAKE_GROW;
        cakeEl.style.transform = `translate(-50%, -50%) scale(${s.toFixed(3)})`;
        cakeEl.style.opacity = Math.min(1, .2 + t * 1.8).toFixed(2);
        meter.style.setProperty('--p', t.toFixed(3));

        raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    /* Đẩy tiến độ. Kiểm tra hoàn thành NGAY tại đây chứ không đợi rAF —
       trình duyệt có thể bóp rAF, mà lúc đó người xem sẽ kẹt lại vĩnh viễn
       dù đã lăn hết cỡ. */
    function push(d) {
        if (done) return;
        target = Math.max(0, Math.min(1, target + d));
        if (target > .6) scene.classList.add('diving');   // giữ chỉ dẫn cho tới khi gần tới nơi
        if (target >= .999) finish();
    }

    function finish() {
        if (done) return;
        done = true;
        cancelAnimationFrame(raf);
        target = t = 1;
        window.Stage3D?.portalZoom(1);
        meter.style.setProperty('--p', 1);

        hint.hidden = true;
        $('portalDone').hidden = false;
        buzz([18, 40, 24]);
        beep(660, .18, 'triangle', .08);
        setTimeout(() => beep(880, .3, 'sine', .09), 140);

        setTimeout(() => gotoScene(SCENE_COUNT + 1), 1500);   // → enterParty()
    }

    /* ══════════ ĐIỀU KHIỂN ══════════
       Hai thao tác tách bạch hẳn nhau:
         · KÉO / VUỐT  → xoay quanh trái tim, trọn 360°. Không tiến vào.
         · LĂN / CHỤM  → bay vào trong, nơi có bánh kem.
       Nhờ tách bạch mà {em} tha hồ ngắm quanh mà không sợ lỡ tay chui tọt vào. */
    const ORBIT_X = .0065;      // radian trên mỗi pixel kéo ngang
    const ORBIT_Y = .0042;      // dọc nhạy hơn một chút cho đỡ chóng mặt

    /* ── Lăn chuột = bay vào ──
       ~20 nấc cho trọn hành trình; nhạy hơn nữa thì mới chạm vào bánh xe đã tới
       nơi, chẳng kịp nhìn gì. */
    scene.addEventListener('wheel', (e) => {
        e.preventDefault();
        push(e.deltaY * .00045);
    }, { passive: false });

    /* ── Kéo chuột = xoay quanh (desktop) ── */
    let mDown = false, mX = 0, mY = 0, mMoved = 0;

    scene.addEventListener('mousedown', (e) => {
        mDown = true; mX = e.clientX; mY = e.clientY; mMoved = 0;
        scene.classList.add('grabbing');
    });
    addEventListener('mousemove', (e) => {
        if (!mDown || done) return;
        const dx = e.clientX - mX, dy = e.clientY - mY;
        mX = e.clientX; mY = e.clientY;
        mMoved += Math.abs(dx) + Math.abs(dy);
        window.Stage3D?.portalOrbit(dx * ORBIT_X, dy * ORBIT_Y);
    });
    addEventListener('mouseup', () => {
        if (!mDown) return;
        mDown = false;
        scene.classList.remove('grabbing');
        // Chạm nhẹ (không kéo) vẫn tiến vào một nấc — luôn phải có đường tới đích
        if (mMoved < 8) push(.16);
    });

    /* ── Điện thoại: 1 ngón = xoay, 2 ngón chụm/xoè = bay vào ── */
    let pinch0 = 0, tX = 0, tY = 0, tMoved = 0;
    const dist = (ts) => Math.hypot(ts[0].clientX - ts[1].clientX, ts[0].clientY - ts[1].clientY);

    scene.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) { pinch0 = dist(e.touches); }
        else { tX = e.touches[0].clientX; tY = e.touches[0].clientY; tMoved = 0; }
    }, { passive: true });

    scene.addEventListener('touchmove', (e) => {
        if (done) return;
        e.preventDefault();
        if (e.touches.length === 2) {
            const d = dist(e.touches);
            if (pinch0) push((d - pinch0) * .0018);   // xoè hai ngón = bay vào (~2 lần chụm)
            pinch0 = d;
        } else {
            const p = e.touches[0];
            const dx = p.clientX - tX, dy = p.clientY - tY;
            tX = p.clientX; tY = p.clientY;
            tMoved += Math.abs(dx) + Math.abs(dy);
            window.Stage3D?.portalOrbit(dx * ORBIT_X, dy * ORBIT_Y);   // vuốt = xoay
        }
    }, { passive: false });

    scene.addEventListener('touchend', (e) => {
        if (e.touches.length === 0 && tMoved < 10) push(.16);          // chạm nhẹ = tiến vào
        pinch0 = 0;
    }, { passive: true });

    /* ── Bàn phím ── */
    scene.addEventListener('keydown', (e) => {
        if (['ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); push(.2); }
        else if (e.key === 'ArrowDown') { e.preventDefault(); push(-.2); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); window.Stage3D?.portalOrbit(-.35, 0); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); window.Stage3D?.portalOrbit(.35, 0); }
    });
    scene.tabIndex = 0;
}

const SCENE_INIT = { 2: initConstellation, 3: initWishBalloons, 4: initGiftDrag, 5: initHeartHold, 6: initHeartPortal };

function enterParty() {
    if (constRAF) cancelAnimationFrame(constRAF);
    // Gỡ .active khỏi mọi màn — nếu không, màn cuối vẫn giữ visibility:visible
    // và phủ vô hình lên toàn trang, nuốt hết click của các nút bên dưới
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active', 'leaving'));
    $('intro').classList.add('open');
    document.documentElement.classList.remove('portal-open');   // trả lại nền cho trang tiệc
    document.body.classList.remove('locked');
    warp = 36;                               // cú nhảy hyperspace xuyên trường sao

    // Bật lớp WebGL, rồi dựng lại sao 2D với mật độ thưa cho khỏi chồng lớp
    window.Stage3D?.start();
    if (has3D()) {
        if (isSmall) {                       // điện thoại: nhường hẳn nền cho WebGL
            bg2dOff = true;                  // (khỏi dựng lại mảng sao rồi vứt đi)
            stars = []; shootingStars = [];
            bgx.clearRect(0, 0, innerWidth, innerHeight);
            bg.style.display = 'none';
        } else {
            buildStars();
        }
    }

    // Ngừng vẽ đúng phần đã cuộn khỏi màn hình (bánh kem và tên theo dõi riêng)
    if ('IntersectionObserver' in window) {
        const watch = (sel, set) => {
            const el = document.querySelector(sel);
            if (el) new IntersectionObserver(([e]) => set(e.isIntersecting), { rootMargin: '100px' }).observe(el);
        };
        watch('.cake-stage', v => { cakeVisible = v; });
        watch('.name-stage', v => { nameVisible = v; });
    }

    document.dispatchEvent(new CustomEvent('party:start'));   // choreo.js đo lại mốc cuộn

    initGyro();
    enableTilt();                            // tự thoát ngay trên thiết bị cảm ứng

    /* ⚠️ ĐÂY LÀ CHỖ GIẬT KHI VỪA VÀO TIỆC ⚠️
       Trước đây mọi thứ nặng dồn hết vào ĐÚNG MỘT khung hình: dựng 23 mốc cuộn
       (phải đo đạc toàn bộ panel), bắn pháo hoa, rồi buildNameParticles() —
       hàm này gọi getImageData() rồi quét từng điểm ảnh của canvas để dựng hạt.
       Cộng lại thừa sức làm rớt vài khung hình, đúng lúc tấm thiệp và bánh kem
       hiện ra nên nhìn rất rõ.

       Việc bắt buộc phải đồng bộ chỉ có dựng mốc cuộn (đã chứng minh: hoãn nó
       lại thì nội dung kẹt luôn ở opacity 0). Phần còn lại tách ra khung sau —
       dùng setTimeout chứ không dùng requestAnimationFrame, vì rAF có thể bị
       trình duyệt bóp và không bao giờ chạy. */
    setTimeout(celebrate, 30);
    setTimeout(buildNameParticles, 90);      // canvas đã hiện nên đo đúng kích thước
    for (let i = 0; i < 6; i++) setTimeout(spawnBalloon, 400 + i * 900);
}

/* ══════════ KHỞI TẠO ══════════ */
function init() {
    applyPronouns();                    // thay {anh}/{em} trong toàn bộ chữ của trang
    sizeCanvas(bg); sizeCanvas(fx); buildStars(); buildFloaters();
    buildTitle(); buildCandles(); buildGallery(); buildFortunes(); renderWall();
    buildTimeline(); showReason(true);
    typeWish(); tickCountdown(); tickLove(); observePanels();
    setInterval(tickCountdown, 1000);
    setInterval(tickLove, 1000);
    setInterval(spawnBalloon, isSmall ? 5200 : 3200);

    // Chỉnh lời gợi ý cho thiết bị cảm ứng
    if (isTouch) {
        document.querySelector('.micro-hint').textContent = 'Mẹo: chạm vào nền để bắn pháo hoa 💥';
        document.querySelector('.name-hint').textContent = '✨ chạm & kéo trên tên thử xem ✨';
        $('cakeHint').textContent = 'Chạm vào nến để thổi 🕯️';
    }
    requestAnimationFrame(loop);

    const savedTheme = localStorage.getItem('bd-theme');
    if (savedTheme && THEMES.includes(savedTheme)) applyTheme(savedTheme, true);

    // dựng lại hạt tên khi font viết tay tải xong (nét chữ chuẩn hơn)
    if (document.fonts && document.fonts.load) {
        document.fonts.load('700 60px "Dancing Script"').then(() => {
            if (!document.body.classList.contains('locked')) buildNameParticles();
        });
    }

    /* ⚠️ THỦ PHẠM GÂY GIẬT SỐ 1 TRÊN ĐIỆN THOẠI ⚠️
       Khi {em} lướt trang, thanh địa chỉ của trình duyệt trượt lên rồi trượt xuống.
       Mỗi lần như vậy trình duyệt bắn ra sự kiện `resize` — CHIỀU RỘNG KHÔNG ĐỔI,
       chỉ chiều cao thay đổi vài chục pixel. Handler cũ nghe thấy là dựng lại toàn
       bộ trường sao + vật thể trôi nổi + đổi kích thước canvas, ngay giữa lúc đang
       cuộn. Đó chính là những cú khựng.

       Chỉ xử lý khi chiều rộng thật sự đổi (xoay ngang máy), hoặc chiều cao đổi
       nhiều hơn mức thanh địa chỉ có thể gây ra. */
    let resizeT, lastW = innerWidth, lastH = innerHeight;
    addEventListener('resize', () => {
        const dw = Math.abs(innerWidth - lastW);
        const dh = Math.abs(innerHeight - lastH);
        if (dw === 0 && dh < 140) return;          // chỉ là thanh địa chỉ → lờ đi
        lastW = innerWidth; lastH = innerHeight;

        sizeCanvas(bg); sizeCanvas(fx); buildStars(); buildFloaters();
        clearTimeout(resizeT);
        resizeT = setTimeout(buildNameParticles, 250);
    }, { passive: true });

    // — Hành trình —
    buildDots();
    // Màn 1: chạm vào đâu trong màn cũng thắp được nến
    $('scene1').addEventListener('click', (e) => {
        if (!e.target.closest('#enterBtn')) lightIntroCandle();
    });
    $('introCandle').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') lightIntroCandle();
    });
    $('enterBtn').addEventListener('click', () => gotoScene(2));
    $('journeySkip').addEventListener('click', () => { ac(); enterParty(); });

    // — Tương tác tên hạt sáng —
    nameCv.addEventListener('mousemove', (e) => {
        const r = nameCv.getBoundingClientRect();
        nameMouse.x = e.clientX - r.left;
        nameMouse.y = e.clientY - r.top;
    });
    nameCv.addEventListener('mouseleave', () => { nameMouse.x = -9999; nameMouse.y = -9999; });
    nameCv.addEventListener('touchmove', (e) => {
        const r = nameCv.getBoundingClientRect();
        nameMouse.x = e.touches[0].clientX - r.left;
        nameMouse.y = e.touches[0].clientY - r.top;
    }, { passive: true });
    nameCv.addEventListener('touchend', () => { nameMouse.x = -9999; nameMouse.y = -9999; });
    nameCv.addEventListener('click', explodeName);

    // — Lá thư —
    $('envelope').addEventListener('click', openLetter);
    $('envelope').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') openLetter();
    });

    // — Nút chức năng —
    $('fireworksBtn').addEventListener('click', (e) => {
        autoFireworks = !autoFireworks;
        e.currentTarget.classList.toggle('on', autoFireworks);
        e.currentTarget.textContent = autoFireworks ? '🎆 Đang bắn… (tắt)' : '🎆 Bắn pháo hoa';
        if (autoFireworks) { ac(); for (let i = 0; i < 3; i++) setTimeout(launchFirework, i * 220); }
    });

    $('confettiBtn').addEventListener('click', () => { confettiCannons(80); });
    $('reasonBtn').addEventListener('click', () => showReason());
    $('blowBtn').addEventListener('click', startMic);
    $('surpriseBtn').addEventListener('click', surprise);
    $('musicToggle').addEventListener('click', () => toggleMusic());

    $('themeToggle').addEventListener('click', () => {
        const cur = document.documentElement.dataset.theme;
        const next = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length];
        applyTheme(next);
    });

    $('shareBtn').addEventListener('click', async () => {
        const url = location.href;
        const data = { title: document.title, text: tx(`Một món quà sinh nhật {anh} làm cho ${CONFIG.name} 💗`), url };
        try {
            if (navigator.share) await navigator.share(data);
            else { await navigator.clipboard.writeText(url); toast('Đã copy liên kết! Gửi cho bạn bè nhé 🔗'); }
        } catch { toast('Không chia sẻ được — bạn copy thủ công nhé 🙏'); }
    });

    // — Tường lời chúc —
    $('wishForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = $('wishMessage').value.trim();
        if (!msg) return;
        const list = loadWall();
        list.unshift({ author: $('wishAuthor').value.trim(), msg, at: Date.now() });
        saveWall(list);
        $('wishMessage').value = '';
        renderWall();
        popConfettiFrom($('wishForm'), 50);
        toast(tx('{Anh} nhận được rồi, cảm ơn {em} 💝'));
    });

    // — Bấm nền để bắn pháo hoa —
    addEventListener('click', (e) => {
        if (e.target.closest('button, a, input, textarea, canvas, .card, .panel, .intro, .topbar')) return;
        launchFirework(e.clientX, e.clientY - 40);
    });

    addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        // chuột điều khiển camera 3D (khi chưa có gyro)
        if (!gyroActive) {
            targetCam.ry = (e.clientX / innerWidth - .5) * .8;
            targetCam.rx = (e.clientY / innerHeight - .5) * .6;
        }
        sparkTrail(e);
    }, { passive: true });

    // Trên mobile: sao parallax nghiêng nhẹ theo vị trí chạm khi cuộn
    addEventListener('touchmove', (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }, { passive: true });

    // — Phím tắt —
    addEventListener('keydown', (e) => {
        if (e.target.matches('input, textarea')) return;
        const k = e.key.toLowerCase();
        if (k === 'f') launchFirework();
        if (k === 'c') confettiCannons(70);
        if (k === 'b') blowAll();
        if (k === 'm') toggleMusic();
        if (k === 's') surprise();
    });
}

document.addEventListener('DOMContentLoaded', init);
