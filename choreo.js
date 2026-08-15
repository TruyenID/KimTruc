/* ══════════════════════════════════════════════════════════════
   choreo.js — LỚP BIÊN ĐẠO (GSAP + ScrollTrigger)
   ──────────────────────────────────────────────────────────────
   Toàn bộ chuyển động theo cuộn trang nằm ở đây, tách hẳn khỏi
   engine hạt (script.js) và lớp WebGL (stage3d.js).

   Khi file này chạy được, nó gắn cờ .js-gsap lên <html>. CSS thấy cờ
   đó sẽ nhả quyền điều khiển reveal cho GSAP (xem cuối style.css).
   Không có GSAP → CSS transition cũ vẫn hoạt động y nguyên.
   ══════════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    const g = window.gsap;
    const ST = window.ScrollTrigger;
    if (!g || !ST) return;                 // CDN hỏng → trang vẫn chạy bằng CSS

    g.registerPlugin(ST);

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    root.classList.add('js-gsap');

    /* Giảm chuyển động: hiện mọi thứ ra ngay, bỏ hết hiệu ứng cuộn */
    if (reduce) {
        g.set('.panel, .tl-item, .photo, .fortune', { opacity: 1, y: 0, x: 0, rotateX: 0, rotateY: 0, scale: 1 });
        return;
    }

    const D = 0.9;                          // thời lượng chuẩn, giữ nhịp toàn trang
    const EASE = 'power3.out';

    /* ══════════ 1. CÁC KHỐI NỘI DUNG — dựng lên từ mặt phẳng nghiêng ══════════ */
    function revealPanels() {
        g.utils.toArray('.panel').forEach((panel) => {
            const kids = panel.querySelectorAll(':scope > *');

            const tl = g.timeline({
                scrollTrigger: { trigger: panel, start: 'top 85%', once: true }
            });

            tl.fromTo(panel,
                { opacity: 0, y: 70, rotateX: -14, transformPerspective: 1000, transformOrigin: 'center top' },
                { opacity: 1, y: 0, rotateX: 0, duration: D + 0.2, ease: EASE }
            ).fromTo(kids,
                { opacity: 0, y: 26 },
                { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: EASE },
                '-=0.65'
            );
        });
    }

    /* ══════════ 2. DÒNG THỜI GIAN — từng mốc lật vào như trang sách ══════════ */
    function revealTimeline() {
        const items = g.utils.toArray('.tl-item');
        if (!items.length) return;

        g.fromTo(items,
            { opacity: 0, x: -50, rotateY: -35, transformPerspective: 900, transformOrigin: 'left center' },
            {
                opacity: 1, x: 0, rotateY: 0, duration: 0.85, ease: EASE, stagger: 0.14,
                scrollTrigger: { trigger: '.timeline', start: 'top 80%', once: true }
            }
        );
    }

    /* ══════════ 3. ALBUM ẢNH — lật 3D so le theo lưới ══════════ */
    function revealGallery() {
        const photos = g.utils.toArray('.photo');
        if (!photos.length) return;

        g.fromTo(photos,
            { opacity: 0, scale: 0.82, rotateY: 42, transformPerspective: 1200 },
            {
                opacity: 1, scale: 1, rotateY: 0, duration: 1, ease: 'back.out(1.4)',
                stagger: { each: 0.09, from: 'start', grid: 'auto' },
                scrollTrigger: { trigger: '.gallery', start: 'top 82%', once: true }
            }
        );

        // Trôi nhẹ ngược chiều cuộn → lưới ảnh có chiều sâu thật
        photos.forEach((p, i) => {
            g.to(p, {
                y: (i % 2 ? -1 : 1) * 26, ease: 'none',
                scrollTrigger: { trigger: '.gallery', start: 'top bottom', end: 'bottom top', scrub: 1 }
            });
        });
    }

    /* ══════════ 4. THẺ LỜI HỨA — bung ra từ tâm ══════════ */
    function revealFortunes() {
        const cards = g.utils.toArray('.fortune');
        if (!cards.length) return;

        g.fromTo(cards,
            { opacity: 0, scale: 0.6, rotateZ: -8 },
            {
                opacity: 1, scale: 1, rotateZ: 0, duration: 0.75, ease: 'back.out(1.7)',
                stagger: { each: 0.06, from: 'center' },
                scrollTrigger: { trigger: '.fortune-grid', start: 'top 84%', once: true }
            }
        );
    }

    /* ══════════ 5. BỘ ĐẾM — từng ô nảy lên như bật nắp ══════════ */
    function revealCounters() {
        g.utils.toArray('.countdown').forEach((cd) => {
            g.fromTo(cd.querySelectorAll('.cd-unit'),
                { opacity: 0, y: 34, scale: 0.7 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(2)', stagger: 0.09,
                    scrollTrigger: { trigger: cd, start: 'top 88%', once: true }
                }
            );
        });
    }

    /* ══════════ 6. THIỆP CHÍNH — lùi dần và mờ đi khi cuộn qua ══════════ */
    function cardParallax() {
        const card = document.getElementById('card');
        if (!card) return;

        g.to(card, {
            y: -60, scale: 0.94, opacity: 0.55, rotateX: 8,
            transformPerspective: 1200, transformOrigin: 'center top', ease: 'none',
            scrollTrigger: { trigger: card, start: 'top top', end: 'bottom top', scrub: 1 }
        });
    }

    /* ══════════ 7. CỰC QUANG NỀN — 3 lớp trôi lệch tốc độ ══════════ */
    function auroraParallax() {
        const blobs = g.utils.toArray('.aurora-blob');
        blobs.forEach((b, i) => {
            g.to(b, {
                yPercent: (i + 1) * 22, xPercent: (i % 2 ? -12 : 12), ease: 'none',
                scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.4 }
            });
        });
    }

    /* ══════════ 8. TIÊU ĐỀ MỤC — chữ trượt lên sau lớp cắt ══════════ */
    function revealTitles() {
        g.utils.toArray('.panel-title').forEach((t) => {
            g.fromTo(t,
                { opacity: 0, y: 30, letterSpacing: '0.3em' },
                {
                    opacity: 1, y: 0, letterSpacing: 'normal', duration: 1, ease: 'power4.out',
                    scrollTrigger: { trigger: t, start: 'top 90%', once: true }
                }
            );
        });
    }

    /* ══════════ 9. ĐẨY TIẾN ĐỘ CUỘN SANG LỚP 3D ══════════ */
    function driveScene() {
        ST.create({
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => { window.Stage3D?.scroll(self.progress); }
        });
    }

    /* ══════════ 10. NÚT BẤM CÓ TỪ TÍNH — vi tương tác trên desktop ══════════ */
    function magneticButtons() {
        if (matchMedia('(pointer: coarse)').matches) return;

        document.querySelectorAll('.btn, .icon-btn').forEach((btn) => {
            const xTo = g.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
            const yTo = g.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });

            btn.addEventListener('pointermove', (e) => {
                const r = btn.getBoundingClientRect();
                xTo((e.clientX - r.left - r.width / 2) * 0.32);
                yTo((e.clientY - r.top - r.height / 2) * 0.42);
            });
            btn.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
        });
    }

    /* ══════════ 11. ẢNH KỶ NIỆM — hover nảy nhẹ.
       CSS đã nhả `transform` ra cho GSAP (xem .js-gsap .photo), nên hiệu ứng
       hover phải do GSAP làm nốt, nếu không ảnh sẽ đứng im khi rê chuột. ══════════ */
    function photoHover() {
        if (matchMedia('(pointer: coarse)').matches) return;

        g.utils.toArray('.photo').forEach((p) => {
            const to = g.quickTo(p, 'scale', { duration: 0.45, ease: 'back.out(2)' });
            p.addEventListener('pointerenter', () => to(1.06));
            p.addEventListener('pointerleave', () => to(1));
        });
    }

    /* ══════════ 12. MÀN MỞ TIỆC — thiệp bay vào từ chiều sâu ══════════ */
    function partyEntrance() {
        const card = document.getElementById('card');
        if (!card) return;

        g.timeline()
            .fromTo(card,
                { opacity: 0, scale: 0.7, y: 90, rotateX: 26, transformPerspective: 1200 },
                { opacity: 1, scale: 1, y: 0, rotateX: 0, duration: 1.5, ease: 'power4.out' }
            )
            .fromTo('.topbar .icon-btn',
                { opacity: 0, y: -24, scale: 0.6 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(2)' },
                '-=1.0'
            );
    }

    /* ══════════════════════════════════════════════════════════════
       LẮP RÁP

       ⚠️ Thời điểm là thứ quan trọng nhất ở đây.

       Suốt hành trình 5 màn, <body> mang class .locked → `overflow: hidden`
       → cả trang KHÔNG cuộn được. Nếu tạo ScrollTrigger lúc này, nó sẽ chốt
       vào một scroller vô hiệu và không bao giờ nhận sự kiện cuộn nữa —
       gọi ScrollTrigger.refresh() sau đó cũng không cứu được: giá trị scroll
       đọc đúng trở lại nhưng progress vẫn đứng nguyên ở 0, và mọi panel kẹt
       ở trạng thái "from" (opacity 0) vĩnh viễn.

       Nên: chỉ dựng scroll animation SAU khi vào tiệc, lúc .locked đã gỡ.
       Những hiệu ứng không liên quan tới cuộn (hover, nút từ tính) thì dựng
       sớm ngay khi DOM sẵn sàng.
       ══════════════════════════════════════════════════════════════ */
    let built = false;

    function buildScrollFx() {
        if (built) return;
        if (document.body.classList.contains('locked')) return;   // chưa mở khoá thì chưa dựng
        built = true;

        revealPanels();
        revealTitles();
        revealTimeline();
        revealGallery();
        revealFortunes();
        revealCounters();
        cardParallax();
        auroraParallax();
        driveScene();
        ST.refresh();
    }

    function buildHoverFx() {
        magneticButtons();
        photoHover();
    }

    // DOM đã dựng xong trong init() của script.js (listener này đăng ký sau nên
    // luôn chạy sau) → gắn được hiệu ứng hover ngay.
    document.addEventListener('DOMContentLoaded', buildHoverFx);

    // Vào tiệc: .locked vừa được gỡ nên trang đã cuộn được → dựng ngay, ĐỒNG BỘ.
    //
    // Tuyệt đối không bọc trong requestAnimationFrame: trình duyệt bóp rAF khi
    // tab ở nền hoặc đang tiết kiệm pin, và khi đó callback có thể không bao giờ
    // chạy — toàn bộ nội dung sẽ kẹt ở opacity 0. Đọc layout ngay tại đây vẫn
    // chính xác, vì ScrollTrigger gọi getBoundingClientRect() và thao tác đó tự
    // ép trình duyệt reflow đồng bộ với class .locked vừa gỡ.
    document.addEventListener('party:start', () => {
        buildScrollFx();
        partyEntrance();
    });

    // Font và ảnh album tải xong sẽ làm trang dài ra → đo lại mốc cuộn
    addEventListener('load', () => { if (built) ST.refresh(); }, { once: true });

    // Lưới an toàn: nếu vì lý do nào đó sự kiện party:start không tới mà trang
    // đã cuộn được, vẫn dựng — tuyệt đối không để nội dung kẹt ở opacity 0.
    addEventListener('scroll', buildScrollFx, { passive: true });
})();
