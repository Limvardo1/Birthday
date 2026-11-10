/* =========================================================================
   config.js — PUSAT KONFIGURASI
   -------------------------------------------------------------------------
   Semua teks, foto, musik, dan pesan rahasia diatur di file ini.
   Kamu tidak perlu menyentuh file lain untuk mengganti konten.
   ========================================================================= */

const CONFIG = {
  /* ---------------------------- DATA UTAMA ---------------------------- */
  name: "Angela",
  fullName: "Angela Stefanie",
  birthDate: { day: 6, month: 11 }, // 6 November

  /* --------------------------- OPENING SCREEN ------------------------- */
  opening: {
    eyebrow: "For Someone Special",
    title: "A Special Surprise For You",
    subtitle: "Ada sesuatu kecil yang disiapkan khusus untukmu.",
    button: "Open Your Surprise",
  },

  /* ------------------------------- HERO ------------------------------- */
  hero: {
    eyebrow: "The 6th of November",
    // {name} akan otomatis diganti dengan CONFIG.name
    title: "Happy Birthday, {name}!",
    subtitle: "Semoga hari ini jadi awal dari tahun yang penuh hal baik untukmu.",
    wishButton: "Make a Wish",
    wishMessage: "Lilinnya sudah padam. Semoga semua doamu terkabul ✨",
    letterButton: "Baca Surat",
  },

  /* ------------------------------ LETTER ------------------------------ */
  letter: {
    eyebrow: "A Little Letter",
    title: "A Letter For You",
    subtitle: "Ditulis pelan-pelan, khusus untuk hari ini.",
    hint: "Klik untuk membuka surat",
    greeting: "Happy Birthday, {name}! 🎂",
    paragraphs: [
      "Selamat bertambah usia! Semoga selalu sehat, bahagia, panjang umur, dan segala urusannya dipermudah.",
      "Semoga apa yang kamu harapkan bisa segera terwujud. Jangan lupa bahagia dan tetap jadi diri sendiri!",
      "Have a wonderful day! 🎉✨",
    ],
    signature: "With love", // ganti dengan namamu
  },

  /* ----------------------------- GALLERY ------------------------------ */
  gallery: {
    eyebrow: "Sweet Memories",
    title: "Memory Lane",
    subtitle: "Beberapa potret yang layak dikenang. Klik untuk memperbesar.",
    /* Ganti "src" dengan foto kamu, contoh: "assets/images/foto-1.jpg"
       Jumlah foto bebas — galeri mengikuti jumlah di array ini. */
    photos: [
      { src: "assets/images/foto-1.jpg", caption: "The sweetest smile" },
      { src: "assets/images/foto-2.jpg", caption: "Little moments, big memories" },
      { src: "assets/images/foto-3.jpg", caption: "Golden hour glow" },
      { src: "assets/images/foto-4.jpg", caption: "Just being us" },
      { src: "assets/images/foto-5.jpg", caption: "One of my favorites" },
      { src: "assets/images/foto-6.jpg", caption: "Always worth remembering" },
    ],
  },

  /* ----------------------------- TIMELINE ----------------------------- */
  timeline: {
    eyebrow: "Our Story",
    title: "Little Moments",
    subtitle: "Potongan waktu yang selalu terasa hangat kalau diingat.",
    items: [
      {
        date: "The beginning",
        title: "The First Memory",
        text: "Semua dimulai dari percakapan sederhana yang ternyata jadi awal dari banyak hal baik.",
      },
      {
        date: "Somewhere in between",
        title: "Beautiful Moments",
        text: "Tawa kecil, cerita panjang, dan hari-hari biasa yang jadi terasa spesial.",
      },
      {
        date: "Still remembered",
        title: "Unforgettable Days",
        text: "Ada hari-hari yang tidak perlu dijelaskan panjang — cukup diingat, lalu disyukuri.",
      },
      {
        date: "To be continued",
        title: "More Memories to Come",
        text: "Ceritanya belum selesai. Masih banyak halaman kosong yang menunggu diisi.",
      },
    ],
  },

  /* ------------------------------ MUSIC ------------------------------- */
  music: {
    // File lagu ada di assets/music/. Format .m4a / .mp3 sama-sama didukung browser modern.
    src: "assets/music/lagu.m4a",
    title: "A Thousand Years (Piano)",
    volume: 0.55,
  },

  /* ------------------------------ FINALE ------------------------------ */
  finale: {
    eyebrow: "One Last Thing",
    title: "You Deserve All The Happiness in The World",
    text: "Kamu sudah sampai di akhir kejutan ini. Satu hal terakhir: jangan pernah ragu kalau kamu butuh teman cerita. Pintunya selalu terbuka.",
    button: "One More Surprise",
    sign: "— Selamat ulang tahun, {name}.",
  },

  /* -------------------------- SECRET MESSAGE -------------------------- */
  secret: {
    eyebrow: "Just For You",
    title: "One More Thing…",
    // Setiap string menjadi satu paragraf di dalam modal.
    body: [
      "Kartu ini bisa ditukar kapan saja, tanpa tanggal kedaluwarsa:",
      "satu kali traktiran, satu kali jalan-jalan, atau satu kali didengarkan sampai ceritamu selesai.",
    ],
    sign: "🎁 Simpan kartunya, ya.",
    closeButton: "Simpan baik-baik",
  },

  /* ------------------------------ FOOTER ------------------------------ */
  footer: {
    text: "Made with ♥ for {fullName}",
    replay: "Putar ulang kejutan",
  },
};

// Ekspos ke window agar bisa dibaca js/script.js (tanpa module, supaya aman dibuka via file://)
window.CONFIG = CONFIG;
