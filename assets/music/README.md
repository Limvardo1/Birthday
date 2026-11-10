# Folder musik

File lagu yang dipakai website ada di folder ini: **`lagu.m4a`** (AAC di dalam kontainer MP4).

`js/config.js` sudah menunjuk ke file tersebut:

```js
music: {
  src: "assets/music/lagu.m4a",
  title: "A Thousand Years (Piano)",
  volume: 0.55,
},
```

## Mengganti lagu

1. Simpan lagu baru di folder ini (mis. `lagu-baru.mp3`).
2. Ubah `music.src` di `js/config.js` sesuai nama filenya.

Catatan:

- Format aman: **MP3** (128–192 kbps) atau **M4A/AAC**. Ukuran sebaiknya di bawah ±5 MB.
- Jangan hanya mengganti ekstensi file (mis. MP4 video di-rename jadi `.mp3`) — beberapa browser menolak memutarnya. Kalau sumbernya MP4, pakai `.m4a`.
- Lagu **tidak** diputar otomatis sebelum pengunjung berinteraksi.
- Kalau file tidak ditemukan, tombol musik tetap tampil dan menampilkan pesan lembut — halaman tidak error.
- Lagu diputar berulang (`loop`), jadi pilih yang akhirnya halus.
