# 🎂 Happy Birthday, Angela Stefanie

Website ulang tahun interaktif — dibuat sebagai kejutan digital: ada amplop surat, galeri kenangan,
timeline, musik, dan satu pesan rahasia di bagian akhir.

Dibuat 100% dengan **HTML + CSS + Vanilla JavaScript**, tanpa backend, tanpa database, tanpa library.
Siap di-deploy gratis lewat **GitHub Pages**.

---

## ✨ Fitur

| Bagian | Isi |
| --- | --- |
| Opening screen | Layar pembuka “A Special Surprise For You” + tombol **Open Your Surprise** |
| Hero | Ucapan ulang tahun, confetti, balon melayang, kue dengan lilin, tombol **Make a Wish** |
| Surat | Amplop yang bisa dibuka + surat dengan animasi mengetik (ada tombol *Tampilkan semua*) |
| Galeri | Polaroid scrapbook, hover effect, lightbox dengan caption, navigasi prev/next + swipe |
| Timeline | Empat momen kenangan, muncul bergantian saat di-scroll |
| Musik | Tombol play/pause mengambang, lagu tidak autoplay sebelum ada interaksi |
| Finale | “You Deserve All The Happiness in The World” + tombol **One More Surprise** yang membuka pesan rahasia |
| Lainnya | Loader, smooth scroll, scroll reveal, floating hearts/stars, parallax ringan, cursor glow (desktop), modal dengan focus trap |

Website juga menghormati `prefers-reduced-motion` (animasi dimatikan otomatis untuk pengguna yang memintanya).

---

## 📁 Struktur project

```
birthday/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── config.js      ← SEMUA KONTEN DIATUR DI SINI
│   └── script.js
├── assets/
│   ├── images/        ← foto kamu (placeholder.svg tersedia)
│   ├── music/         ← taruh lagu.mp3 di sini
│   └── icons/
├── README.md
└── .nojekyll
```

---

## 🚀 Menjalankan secara lokal

Cara paling gampang: **klik dua kali `index.html`**.

Kalau ingin pakai server lokal (disarankan agar semua aset terbaca sempurna):

```powershell
# Python 3
python -m http.server 8080

# lalu buka http://localhost:8080
```

---

## ✏️ Cara mengganti konten

Cukup edit **`js/config.js`**. Tidak perlu menyentuh `index.html`, CSS, atau `script.js`.

### 1. Nama & tanggal

```js
name: "Angela",
fullName: "Angela Stefanie",
birthDate: { day: 6, month: 11 },
```

### 2. Ucapan & isi surat

```js
hero: {
  title: "Happy Birthday, {name}!",
  subtitle: "Semoga hari ini jadi awal dari tahun yang penuh hal baik untukmu.",
},

letter: {
  greeting: "Happy Birthday, {name}! 🎂",
  paragraphs: [
    "Paragraf pertama…",
    "Paragraf kedua…",
  ],
  signature: "With love",   // ← ganti dengan namamu
},
```

`{name}` akan otomatis diganti dengan `CONFIG.name`.

### 3. Foto galeri

Simpan foto di `assets/images/` dengan nama rapi, misal `foto-1.jpg` … `foto-6.jpg`,
lalu sesuaikan array `gallery.photos`:

```js
photos: [
  { src: "assets/images/foto-1.jpg", caption: "Ketemu pertama kali" },
  { src: "assets/images/foto-2.jpg", caption: "Ketawa sampai sakit perut" },
],
```

- Jumlah foto bebas; galeri mengikuti panjang array.
- Rasio yang paling rapi untuk polaroid: **4:5 (potret)**, sisi terpanjang ±1200 px.
- Nama file sebaiknya tanpa spasi.

### 4. Musik

File lagu sudah tersedia di `assets/music/lagu.m4a`.

```js
music: {
  src: "assets/music/lagu.m4a",
  title: "A Thousand Years (Piano)",
  volume: 0.55,
},
```

Ingin mengganti lagu? Taruh file baru di `assets/music/` lalu ubah `music.src`.
Format aman: MP3 (128–192 kbps) atau M4A/AAC, ukuran sebaiknya di bawah ±5 MB.

Kalau file belum ada, tombol musik tetap muncul dan menampilkan pesan lembut (bukan error).
Lagu baru diputar setelah pengunjung berinteraksi (misal menekan **Open Your Surprise**).

### 5. Timeline & pesan rahasia

```js
timeline: {
  items: [
    { date: "The beginning", title: "The First Memory", text: "…" },
  ],
},

secret: {
  title: "One More Thing…",
  body: ["Baris pertama", "Baris kedua"],
  sign: "🎁 Simpan kartunya, ya.",
},
```

---

## 🌐 Deploy ke GitHub Pages

Repo: <https://github.com/Limvardo1/Birthday>

1. Push semua file ke branch `main`:
   ```powershell
   git add .
   git commit -m "Update konten"
   git push
   ```
2. Buka **Settings → Pages** di repo.
3. **Source:** `Deploy from a branch`
4. **Branch:** `main` — folder `/ (root)` → **Save**
5. Tunggu ±1 menit, lalu buka:
   **https://limvardo1.github.io/Birthday/**

Semua path di project ini **relatif**, jadi tetap jalan meskipun situs berada di sub-folder repo.
File `.nojekyll` sudah disertakan supaya GitHub tidak memproses folder dengan Jekyll.

---

## 🧩 Tips

- Ganti `signature` di surat dengan namamu.
- Foto dan musik boleh diganti kapan saja — cukup edit `config.js` lalu push.
- Ingin mengubah warna tema? Semua warna ada di blok `:root` pada `css/style.css`.
- Ingin mematikan efek cursor? Hapus pemanggilan `initCursor()` di `js/script.js`.

---

Made with ♥ — selamat ulang tahun, Angela.
