# 💗 KimTruc — Website chúc mừng sinh nhật

Một trang web quà tặng sinh nhật dành riêng cho người yêu: hành trình 5 màn tương tác, không gian 3D điều khiển bằng chuột / con quay hồi chuyển, pháo hoa vật lý, nhạc tự tổng hợp — tất cả chỉ bằng HTML/CSS/JS thuần, **không cần cài đặt gì cả**.

## 🚀 Chạy thử

Mở thẳng `index.html` bằng trình duyệt là xong.

Muốn dùng đầy đủ tính năng (micro thổi nến, con quay hồi chuyển trên điện thoại) thì chạy qua server:

```bash
npx serve .
# rồi mở http://localhost:3000
```

## ✨ Có gì bên trong

**Hành trình mở đầu — 5 màn, mỗi màn một động tác:**

| # | Màn | Động tác |
|---|-----|----------|
| 1 | 🕯️ Thắp nến trong bóng tối | Chạm |
| 2 | ⭐ Nối các vì sao thành chòm sao trái tim | Chạm lần lượt |
| 3 | 🎈 Thả bóng bay mang từng chữ trong tên | Chạm từng quả |
| 4 | 🎀 Mở hộp quà | Kéo dải ruy băng |
| 5 | 💗 Trái tim đang đập | Chạm và giữ |

**Bữa tiệc chính:**

- Tên ghép từ hàng nghìn hạt sáng, xoay 3D, chạm vào là vỡ tung rồi tự ghép lại
- Bánh kem vẽ bằng CSS, nến thổi được bằng chuột **hoặc bằng micro thật**
- Pháo hoa 3D: cầu hoa cúc, trái tim, liễu rủ vàng, vành đai kiểu sao Thổ
- Nhạc "Happy Birthday" tổng hợp bằng Web Audio API + vòng visualizer nhảy theo nhạc
- Bộ đếm số ngày hai đứa bên nhau, đếm ngược tới sinh nhật
- Lá thư tay viết dần trong phong bì mở được
- Lý do yêu, lời hứa (thẻ lật 3D), dòng thời gian kỷ niệm, album ảnh
- 3 giao diện: Đêm sao 🌙 · Dạ tiệc vàng ✨ · Tiệc pastel ☀️

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
script.js     — CONFIG + toàn bộ engine (camera 3D, pháo hoa, âm thanh, hành trình)
photos/       — ảnh kỷ niệm của hai đứa
```

## 📱 Hỗ trợ

Chrome / Edge / Firefox / Safari, cả máy tính lẫn điện thoại. Có hồ sơ hiệu năng riêng cho máy yếu, rung phản hồi trên Android, safe-area cho tai thỏ iPhone, và tôn trọng `prefers-reduced-motion`.

---

Làm bằng 💖
