# 💗 KimTruc — Website chúc mừng sinh nhật

Một trang web quà tặng sinh nhật dành riêng cho người yêu: hành trình 5 màn tương tác, không gian 3D điều khiển bằng chuột / con quay hồi chuyển, pháo hoa vật lý, nhạc tự tổng hợp — tất cả chỉ bằng HTML/CSS/JS thuần, **không cần cài đặt gì cả**.

## 🚀 Chạy thử

Trang cần chạy **qua một web server**, không mở thẳng bằng `file://` được nữa — lớp
3D nạp Three.js dưới dạng ES module, mà trình duyệt chặn ES module trên `file://` vì
lý do bảo mật (CORS).

```bash
npx serve .
# rồi mở http://localhost:3000
```

Hoặc không cần Node:

```bash
python3 -m http.server 3000
```

Đem lên GitHub Pages / Netlify / Vercel thì chạy thẳng, không cần cấu hình gì.

> Máy không có WebGL, hoặc mạng chặn CDN? Trang vẫn chạy — chỉ là quay về engine
> hạt 2D như bản gốc. Không có màn hình trắng.

## ✨ Có gì bên trong

**Hành trình mở đầu — 6 màn, mỗi màn một động tác:**

| # | Màn | Động tác |
|---|-----|----------|
| 1 | 🕯️ Thắp nến trong bóng tối | Chạm |
| 2 | ⭐ Nối các vì sao thành chòm sao trái tim | Chạm lần lượt |
| 3 | 🎈 Thả bóng bay mang từng chữ trong tên | Chạm từng quả |
| 4 | 🎀 Mở hộp quà | Kéo dải ruy băng |
| 5 | 💗 Trái tim đang đập | Chạm và giữ |
| 6 | 🎂 Bay vào trong trái tim, bánh kem giấu ở tâm | Lăn chuột · vuốt lên · chụm 2 ngón |

### Màn 6 — cổng trái tim

Trái tim hạt 3D phóng to hết cỡ giữa màn hình, chiếc bánh sinh nhật đặt đúng tâm
nó. Lăn chuột (hoặc vuốt lên / chụm hai ngón trên điện thoại) để camera bay xuyên
qua lớp vỏ hạt — vào tới nơi thì bữa tiệc bắt đầu.

Vài điểm đáng lưu ý trong lúc dựng màn này:

- Overlay hành trình vốn có nền đục để che trang tiệc phía sau. Màn này cần nhìn
  xuyên xuống lớp WebGL nên nền phải trong suốt — kéo theo là phải giấu `.stage`
  đi, nếu không nội dung trang tiệc sẽ lộ ra.
- **Không cho trái tim xoay tròn ở màn này.** Trái tim 3D nhìn nghiêng chỉ còn là
  một đám mây vô hình thù, mà cả màn sống nhờ việc nhìn RÕ đó là trái tim. Chỉ
  đung đưa ±22° quanh mặt chính diện.
- Cùng số hạt đó trải trên gần cả màn hình thì loãng thành bụi. Phải phóng to hạt
  (`uSizeBoost`) chứ không phải thu nhỏ trái tim.
- Vỏ tim chỉ nở ra ở nửa sau hành trình. Nở sớm thì hình tim nhoè ngay lúc người
  xem đang cần nhận ra nó.
- Bánh ở màn này có nến riêng, nên `blowAll()` / `checkAllOut()` phải giới hạn
  phạm vi vào `#candles .candle` — quét `.candle` toàn trang thì "thổi hết nến"
  sẽ không bao giờ đúng.

**Bữa tiệc chính:**

- Tên ghép từ hàng nghìn hạt sáng, xoay 3D, chạm vào là vỡ tung rồi tự ghép lại
- Bánh kem vẽ bằng CSS, nến thổi được bằng chuột **hoặc bằng micro thật**
- Pháo hoa 3D: cầu hoa cúc, trái tim, liễu rủ vàng, vành đai kiểu sao Thổ
- Nhạc "Happy Birthday" tổng hợp bằng Web Audio API + vòng visualizer nhảy theo nhạc
- Bộ đếm số ngày hai đứa bên nhau, đếm ngược tới sinh nhật
- Lá thư tay viết dần trong phong bì mở được
- Lý do yêu, lời hứa (thẻ lật 3D), dòng thời gian kỷ niệm, album ảnh
- 3 giao diện: Đêm sao 🌙 · Dạ tiệc vàng ✨ · Tiệc pastel ☀️

**Lớp 3D thật (WebGL):**

- Thiên hà 14.000 hạt bay xuyên qua người xem, có chiều sâu và độ mờ theo khoảng cách
- Trái tim dựng từ 9.000 đốm sáng theo phương trình tim 3D — đập theo nhịp nhạc,
  chạm vào tên là nổ tung rồi tự ghép lại
- Pháo hoa WebGL nổ song song với pháo hoa 2D, có hiệu ứng bloom nên sáng thật
- Viên ngọc thuỷ tinh khúc xạ + vành đai kiểu sao Thổ, bồng bềnh ở lề trái
- Cả thế giới 3D đổi màu theo giao diện đang chọn

**Animation theo cuộn (GSAP ScrollTrigger):**

- Camera 3D lùi dần và hạ xuống khi cuộn — trang càng đọc càng thấy không gian mở ra
- Panel dựng lên từ mặt phẳng nghiêng, nội dung bên trong hiện so le
- Dòng thời gian lật vào như trang sách, album ảnh lật 3D theo lưới
- Nút bấm có từ tính, ảnh nảy nhẹ khi rê chuột

## ⚙️ Tùy chỉnh

Mở `script.js`, sửa khối `CONFIG` ở đầu file:

```js
const CONFIG = {
    name: 'Em Yêu',            // tên người yêu
    age: null,                 // số tuổi (null = ẩn)
    birthday: '12-25',         // sinh nhật, dạng MM-DD
    loveStart: '2023-02-14',   // ngày bắt đầu yêu nhau, dạng YYYY-MM-DD

    me: 'anh',                 // cách bạn tự xưng
    you: 'em',                 // cách gọi người yêu

    wishes: [...],             // lời chúc chạy trên thiệp
    letter: `...`,             // lá thư tay
    promises: [...],           // lời hứa (thẻ lật)
    reasons: [...],            // lý do yêu
    timeline: [...],           // các mốc kỷ niệm
    photos: [...]              // ảnh + chú thích
};
```

### Xưng hô

Mọi câu chữ trong dự án viết bằng dấu `{anh}` / `{em}` (viết hoa: `{Anh}` / `{Em}`) và được thay tự động khi trang tải.

> **Nếu bạn là con gái viết cho bạn trai**, chỉ cần đổi `me: 'em', you: 'anh'` là cả trang lật ngược xưng hô.

### Ảnh kỷ niệm

Bỏ ảnh vào thư mục `photos/` với tên `1.jpg`, `2.jpg`… Chưa có ảnh thì ô ảnh tự hiện khung gradient dễ thương, không vỡ layout.

### Đổi nhanh không cần sửa code

```
index.html?name=Kim%20Trúc&age=22&date=09-15&love=2023-02-14
```

Tham số hỗ trợ: `name`, `age`, `date`, `love`, `title`, `me`, `you`, `wish`, `letter`.

## ⌨️ Phím tắt

`F` pháo hoa · `C` kim tuyến · `B` thổi nến · `M` nhạc · `S` bất ngờ

## 📁 Cấu trúc

```
index.html    — khung trang, hành trình 5 màn, các mục nội dung
style.css     — 3 giao diện, hiệu ứng 3D, responsive, hỗ trợ giảm chuyển động
script.js     — CONFIG + engine hạt 2D (pháo hoa, âm thanh, hành trình) + vòng lặp chính
stage3d.js    — lớp WebGL: thiên hà, trái tim hạt, pháo hoa 3D, bloom  (ES module)
choreo.js     — lớp biên đạo: toàn bộ animation theo cuộn trang (GSAP ScrollTrigger)
photos/       — ảnh kỷ niệm của hai đứa
```

### Ba lớp rời nhau

```
CSS aurora   z0
sao 2D       z1   ← script.js
WebGL 3D     z2   ← stage3d.js   (thiên hà, trái tim, pháo hoa có bloom)
nội dung     z5+  ← choreo.js điều khiển animation khi cuộn
kim tuyến 2D z6   ← script.js, luôn nằm trên cùng
```

Ba lớp nhưng **chỉ có đúng một vòng `requestAnimationFrame`**: `loop()` trong
`script.js` gọi nhờ `Stage3D.render()`. Hai render loop chạy song song sẽ tranh
khung hình của nhau và làm giật.

`stage3d.js` và `choreo.js` đều tự tắt êm nếu thiếu điều kiện (không có WebGL,
CDN hỏng, người dùng bật giảm chuyển động) — `script.js` không bao giờ phụ thuộc
vào chúng, chỉ gọi qua `window.Stage3D?.…`.

## 📱 Ưu tiên điện thoại

Trang được chỉnh để **cuộn mượt trên điện thoại** là ưu tiên số một. Bốn thứ hay
làm giật khi lướt, đã xử lý hết:

| Thủ phạm | Vì sao giật | Cách xử lý |
|---|---|---|
| `backdrop-filter` trên panel | Phải chụp lại nền rồi làm mờ **mỗi khung hình** khi cuộn, vì nền sau tấm kính vừa đổi | Bỏ hẳn trên cảm ứng, thay bằng nền đục hơn |
| Sự kiện `resize` giả | Thanh địa chỉ trượt lên/xuống lúc cuộn → dựng lại trường sao + cấp phát lại render target giữa chừng | Bỏ qua nếu chiều rộng không đổi; bật `ignoreMobileResize` |
| Animation "scrub" | Ghi transform cho 10 phần tử ở mọi khung hình cuộn | Còn đúng 1 (thiệp mờ dần bằng `opacity`) |
| Số điểm ảnh phải tô | `dpr 1.5` + bloom quét nhiều lượt toàn khung hình | Hạ `dpr` về 1 → **giảm 2,25× số điểm ảnh**, nhân với số lượt bloom |

Ngoài ra trên điện thoại: lớp 3D giới hạn ~32 khung/giây (máy yếu: 26 và tắt
bloom), trường sao 2D tắt hẳn vì đã có thiên hà WebGL, cực quang CSS ẩn đi, và
phần tính hạt bên trong tấm thiệp dừng lại khi thiệp cuộn khỏi màn hình.

### Cú khựng lúc vừa vào tiệc (chỗ bánh kem)

Đây là cú giật dễ thấy nhất, và nguyên nhân nằm ở chỗ ít ai ngờ:

**GPU chỉ biên dịch shader vào lần đầu tiên chúng thật sự được dùng để vẽ.** Khung
hình WebGL đầu tiên trước đây rơi đúng vào lúc vào tiệc — nên shader của thiên hà,
trái tim, bụi, pháo hoa cộng các lượt bloom phải biên dịch dồn trong một khung hình,
đúng lúc tấm thiệp và bánh kem hiện ra.

Cách chữa: `renderer.compile()` + một khung `composer.render()` **vô hình** ngay lúc
trang vừa tải (mọi thứ đang ở `uOpacity = 0`), trong khi người xem còn ở màn 1 của
hành trình. Đo được:

```
khung hình dài nhất lúc vào tiệc:  2806 ms  →  455 ms
```

Ba chỗ còn lại quanh bánh kem:

- **Vòng visualizer** gọi `createRadialGradient()` mới ở *mỗi* khung hình và
  `stroke()` riêng cho từng vạch → dựng sẵn gradient một lần, gom vạch theo màu:
  **40 lệnh `stroke()` mỗi khung → 7**, và **0** lần cấp phát gradient.
- **Ngọn nến** animate `transform` chu kỳ 0,28 giây với *hai* lớp `box-shadow` mờ,
  nhân 5 ngọn → bỏ vầng mờ ngoài 34px, giãn nhịp còn 0,42 giây.
- **Bánh kem cuộn khỏi màn hình** vẫn vẽ đủ mọi khung → dừng hẳn (đo được 0 khung).

> Con số 455 ms đo trong Chrome headless dùng SwiftShader (dựng hình bằng CPU).
> Trên GPU thật của điện thoại con số này nhỏ hơn nhiều — điều đáng tin ở đây là
> **tỉ lệ giảm**, không phải giá trị tuyệt đối.

Máy yếu được nhận diện qua `hardwareConcurrency` và `deviceMemory` để hạ thêm
một nấc nữa.

## 📱 Hỗ trợ

Chrome / Edge / Firefox / Safari, cả máy tính lẫn điện thoại. Có hồ sơ hiệu năng riêng cho máy yếu, rung phản hồi trên Android, safe-area cho tai thỏ iPhone, và tôn trọng `prefers-reduced-motion`.

---

Làm bằng 💖
