# PROJECT PROMPT: Interactive Happy Birthday Website

Buat sebuah website **Happy Birthday – A Special Birthday Surprise** yang memiliki desain modern, aesthetic, romantis, interaktif, dan penuh kejutan. Website ini dibuat sebagai hadiah digital spesial untuk seseorang yang sedang berulang tahun.

Website harus memberikan pengalaman emosional dan menyenangkan ketika pengunjung membukanya, seolah-olah sedang membuka sebuah hadiah ulang tahun digital.

## 1. Technology Stack

Gunakan teknologi berikut:
- HTML5 untuk struktur halaman.
- CSS3 untuk styling, responsive layout, dan animasi.
- JavaScript Vanilla untuk interaksi.
- GSAP atau CSS Animation untuk animasi tambahan jika diperlukan.
- Google Fonts untuk tipografi.
- Lucide Icons untuk ikon.

**Ketentuan:**
- Tidak menggunakan backend.
- Tidak membutuhkan database.
- Tidak membutuhkan sistem login.
- Semua fitur berjalan di sisi frontend.
- Website harus bisa di-deploy langsung menggunakan GitHub Pages.
- Pastikan seluruh asset dapat diakses secara online atau disimpan secara lokal.

## 2. Design Concept

Gunakan konsep visual:
- Romantic, cute, elegant, dreamy, dan aesthetic.
- Warna utama soft pink, lavender, cream, putih, dan sedikit warna gold.
- Gunakan gradient yang lembut.
- Tambahkan efek glowing dan floating elements.
- Gunakan rounded corners dan soft shadows.
- Typography harus elegan dan mudah dibaca.
- Hindari desain yang terlalu ramai.

Website harus memiliki tampilan premium, bukan seperti template HTML sederhana.

## 3. Website Features

### A. Opening Screen – Birthday Surprise
Ketika website pertama kali dibuka:
- Tampilkan halaman pembuka dengan animasi.
- Tampilkan tulisan "A Special Surprise For You".
- Tambahkan animasi hati, bintang, dan bunga.
- Sediakan tombol "Open Your Surprise".
- Ketika tombol diklik, tampilkan transisi menuju halaman utama.

### B. Birthday Hero Section
Tampilkan:
- Tulisan "Happy Birthday, [NAME]!"
- Subtitle berupa ucapan singkat dan manis.
- Animasi confetti.
- Animasi balon yang bergerak.
- Ilustrasi kue ulang tahun dengan lilin.
- Tombol "Make a Wish".

Ketika tombol diklik, tampilkan animasi meniup lilin atau efek kejutan ulang tahun.

### C. Birthday Letter
Buat bagian surat ucapan ulang tahun dengan tampilan seperti surat digital.

Fitur:
- Kertas surat dengan desain aesthetic.
- Animasi membuka surat.
- Teks ucapan ulang tahun.
- Efek typing animation saat surat dibaca.
- Gunakan bahasa yang hangat, tulus, dan menyentuh.

Isi surat harus mudah diedit melalui file konfigurasi.

### D. Memory Gallery
Buat galeri foto yang berisi kenangan spesial.

Fitur:
- Layout foto seperti scrapbook atau polaroid.
- Animasi hover pada setiap foto.
- Efek zoom ketika foto diklik.
- Lightbox untuk melihat foto lebih besar.
- Caption untuk setiap foto.
- Responsive untuk mobile dan desktop.

Gunakan placeholder foto yang mudah diganti dengan foto pribadi.

### E. Birthday Music
Tambahkan fitur musik:
- Tombol Play dan Pause.
- Ikon musik yang bergerak ketika musik diputar.
- Musik tidak otomatis diputar sebelum ada interaksi pengguna.
- Pengguna bisa mengontrol musik kapan saja.

### F. Special Timeline
Buat timeline berisi beberapa momen atau kenangan spesial.

Contoh:
- The First Memory.
- Beautiful Moments.
- Unforgettable Days.
- More Memories to Come.

Tampilkan dengan desain timeline yang menarik dan animasi saat pengunjung melakukan scroll.

### G. Final Surprise Section
Buat bagian penutup yang menjadi kejutan utama.

Tampilkan:
- Pesan terakhir yang menyentuh.
- Animasi confetti dan floating hearts.
- Tulisan "You Deserve All The Happiness in The World".
- Tombol "One More Surprise".

Ketika tombol diklik, munculkan modal berisi pesan rahasia yang bisa dikustomisasi.

## 4. Interactive Effects

Tambahkan interaksi berikut:
- Smooth scrolling.
- Scroll reveal animation.
- Floating hearts.
- Floating stars.
- Confetti animation.
- Button hover effects.
- Typing animation.
- Parallax effect ringan.
- Transisi antarbagian yang smooth.
- Cursor effects khusus desktop jika tidak mengganggu.
- Loading animation saat website dibuka.

Pastikan animasi tidak membuat website berat atau lambat.

## 5. Responsive Design

Website harus mendukung:
- Desktop.
- Laptop.
- Tablet.
- Smartphone.

Pastikan:
- Tidak ada horizontal scrolling.
- Ukuran teks menyesuaikan layar.
- Galeri foto tetap rapi.
- Tombol mudah diklik di smartphone.
- Animasi tidak mengganggu performa mobile.

## 6. File Structure

Buat struktur project yang rapi seperti berikut:

birthday-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── config.js
├── assets/
│   ├── images/
│   ├── music/
│   └── icons/
└── README.md

## 7. Easy Customization

Buat file `config.js` sebagai pusat konfigurasi agar pengguna mudah mengganti:

- Nama orang yang berulang tahun.
- Tanggal ulang tahun.
- Pesan ucapan.
- Isi surat.
- Foto dan caption.
- Musik.
- Timeline kenangan.
- Pesan rahasia.

Jangan membuat pengguna harus mengedit banyak file untuk mengganti konten.

## 8. Performance & Code Quality

- Gunakan kode yang bersih dan terstruktur.
- Hindari penggunaan library yang tidak diperlukan.
- Optimalkan ukuran gambar.
- Pastikan tidak ada error JavaScript di browser console.
- Gunakan semantic HTML.
- Pastikan semua tombol benar-benar berfungsi.
- Berikan fallback jika musik atau gambar gagal dimuat.
- Hormati pengaturan `prefers-reduced-motion`.

## 9. GitHub Pages Deployment

Website harus siap di-deploy ke GitHub Pages.

Ketentuan:
- Tidak menggunakan backend.
- Tidak menggunakan environment variable rahasia.
- Gunakan relative paths untuk file lokal.
- Pastikan seluruh asset bekerja setelah deployment.
- Sediakan README.md berisi panduan menjalankan project dan deploy ke GitHub Pages.

## 10. Final Expected Result

Hasil akhir harus berupa website Happy Birthday yang:
1. Memiliki opening screen yang menarik.
2. Memiliki animasi dan interaksi yang hidup.
3. Memiliki surat ucapan digital.
4. Memiliki galeri foto kenangan.
5. Memiliki musik ulang tahun.
6. Memiliki timeline kenangan.
7. Memiliki kejutan rahasia di bagian akhir.
8. Responsive di semua perangkat.
9. Mudah dikustomisasi.
10. Siap di-deploy secara gratis melalui GitHub Pages.

**IMPORTANT:** Jangan hanya membuat tampilan visual. Semua tombol, animasi, navigasi, musik, modal, dan interaksi harus benar-benar berfungsi. Buat website secara lengkap dan berikan seluruh source code setiap file yang diperlukan.