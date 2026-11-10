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
    eyebrow: "A Little Gift For You",
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
    signature: "Salam hangat",
  },

  /* ----------------------------- GALLERY ------------------------------ */
  gallery: {
    eyebrow: "Sweet Memories",
    title: "Memory Lane",
    subtitle: "Beberapa potret yang layak dikenang. Klik untuk memperbesar.",
    /* Ganti "src" dengan foto kamu, contoh: "assets/images/foto-1.jpg"
       Jumlah foto bebas — galeri mengikuti jumlah di array ini. */
    photos: [
      { src: "assets/images/foto-1.jpg", caption: "Senyum terbaik" },
      { src: "assets/images/foto-2.jpg", caption: "Little moments, big memories" },
      { src: "assets/images/foto-3.jpg", caption: "Golden hour glow" },
      { src: "assets/images/foto-4.jpg", caption: "Hari yang santai" },
      { src: "assets/images/foto-5.jpg", caption: "One of my favorites" },
      { src: "assets/images/foto-6.jpg", caption: "Always worth remembering" },
    ],
  },

  /* ----------------------------- TIMELINE ----------------------------- */
  timeline: {
    eyebrow: "Along The Way",
    title: "Little Moments",
    subtitle: "Beberapa momen yang layak dikenang.",
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
        text: "Masih banyak hal baik yang menunggu di depan.",
      },
    ],
  },

  /* ------------------------------ MUSIC ------------------------------- */
  music: {
    // File lagu ada di assets/music/. Format .m4a / .mp3 sama-sama didukung browser modern.
    src: "assets/music/lagu.m4a",
    title: "Happy Birthday (Piano)",
    volume: 0.55,
  },

  /* ------------------------------ FINALE ------------------------------ */
  finale: {
    eyebrow: "One Last Thing",
    title: "You Deserve All The Happiness in The World",
    text: "Terima kasih sudah membaca sampai di sini. Semoga tahun ini penuh hal baik, dan semua yang sedang kamu usahakan pelan-pelan menemukan jalannya.",
    button: "One More Surprise",
    sign: "— Selamat ulang tahun, {name}.",
  },

  /* -------------------------- SECRET MESSAGE -------------------------- */
  secret: {
    eyebrow: "Just For You",
    title: "One More Thing…",
    // Setiap string menjadi satu paragraf di dalam modal.
    body: [
      "Satu pesan terakhir: jangan lupa bahagia dan tetap jadi diri sendiri.",
      "Kalau nanti ada hari yang berat, kamu nggak harus menghadapinya sendirian.",
    ],
    sign: "🎁 Selamat ulang tahun, Angela.",
    closeButton: "Simpan baik-baik",
  },

  /* ------------------------------ FOOTER ------------------------------ */
  footer: {
    text: "Dibuat untuk {fullName} 🎂",
    replay: "Putar ulang kejutan",
  },
};

// Ekspos ke window agar bisa dibaca js/script.js (tanpa module, supaya aman dibuka via file://)
window.CONFIG = CONFIG;
