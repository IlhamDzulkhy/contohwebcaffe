/* ==========================================================
   DATA KAFE: cukup edit file ini untuk tiap klien baru.
   Ganti nama, menu, jam buka, alamat, dan nomor WhatsApp.
   ========================================================== */
const CAFE = {
  name: "Kopi Senja",
  tagline: "Ngopi santai, dari biji lokal pilihan.",
  description:
    "Kafe kecil yang hangat di jantung kota. Kami menyeduh biji kopi dari petani lokal Jawa Barat, ditemani camilan buatan dapur sendiri.",

  // Foto latar bagian atas (hero). Contoh: "images/hero.jpg". Kosongkan untuk pakai warna gradasi.
  heroImage: "kopi2.avif",

  address: "Jl. Prabu Geusan Ulun No. 12, Sumedang, Jawa Barat",
  mapUrl: "https://maps.google.com/?q=Sumedang",
  whatsapp: "6281234567890", // format internasional tanpa +
  instagram: "kopisenja.sumedang",

  // Jam buka per hari. Indeks 0 = Minggu ... 6 = Sabtu. null = tutup.
  hours: {
    0: ["09:00", "23:00"],
    1: ["10:00", "22:00"],
    2: ["10:00", "22:00"],
    3: ["10:00", "22:00"],
    4: ["10:00", "22:00"],
    5: ["10:00", "23:00"],
    6: ["09:00", "23:00"]
  },
  hoursLabel: [
    { days: "Senin – Kamis", time: "10.00 – 22.00" },
    { days: "Jumat", time: "10.00 – 23.00" },
    { days: "Sabtu – Minggu", time: "09.00 – 23.00" }
  ],

  features: [
    { icon: "🌱", title: "Biji Lokal", text: "Kopi dari petani Jawa Barat, disangrai segar setiap minggu." },
    { icon: "🛋️", title: "Tempat Nyaman", text: "Cocok untuk nongkrong, kerja, atau sekadar menikmati sore." },
    { icon: "📶", title: "WiFi Kencang", text: "Colokan di banyak sudut, aman buat kerja berjam-jam." }
  ],

  // Cara pakai foto: taruh gambar di folder "images/", lalu isi image: "images/nama-file.jpg"
  // Kalau image dikosongkan atau file tidak ada, otomatis memakai emoji.
  menu: [
    { cat: "Kopi", name: "Kopi Susu Senja", desc: "Espresso, susu segar, gula aren. Menu andalan kami.", price: 22000, emoji: "☕", image: "kopi.jpg", best: true },
    { cat: "Kopi", name: "Americano", desc: "Espresso double dengan air panas atau es.", price: 18000, emoji: "☕", image: "kopi.jpg" },
    { cat: "Kopi", name: "Cappuccino", desc: "Espresso dengan busa susu tebal yang lembut.", price: 24000, emoji: "☕", image: "kopi.jpg" },
    { cat: "Kopi", name: "V60 Single Origin", desc: "Seduh manual, biji berganti tiap minggu.", price: 28000, emoji: "🫖", image: "kopi.jpg" },
    { cat: "Non-Kopi", name: "Matcha Latte", desc: "Matcha Jepang dengan susu, manis seimbang.", price: 26000, emoji: "🍵", image: "kopi.jpg", best: true },
    { cat: "Non-Kopi", name: "Coklat Panas", desc: "Coklat pekat dengan susu hangat.", price: 22000, emoji: "🍫", image: "kopi.jpg" },
    { cat: "Non-Kopi", name: "Teh Lemon Madu", desc: "Teh segar dengan lemon dan madu.", price: 16000, emoji: "🍋", image: "kopi.jpg"},
    { cat: "Makanan", name: "Nasi Ayam Sambal Matah", desc: "Ayam goreng, sambal matah, nasi hangat.", price: 28000, emoji: "🍛", image: "kopi.jpg" },
    { cat: "Makanan", name: "Mie Goreng Senja", desc: "Mie goreng bumbu rempah dengan telur mata sapi.", price: 24000, emoji: "🍜", image: "kopi.jpg" },
    { cat: "Camilan", name: "Pisang Goreng Keju", desc: "Pisang goreng renyah dengan keju dan coklat.", price: 15000, emoji: "🍌", image: "kopi.jpg" },
    { cat: "Camilan", name: "Kentang Goreng", desc: "Kentang goreng dengan saus sambal dan mayo.", price: 17000, emoji: "🍟", image: "kopi.jpg" },
    { cat: "Camilan", name: "Roti Bakar Coklat", desc: "Roti tebal panggang dengan coklat leleh.", price: 18000, emoji: "🍞", image: "kopi.jpg", best: true }
  ],

  testimonials: [
    { name: "Dina R.", role: "Pelanggan tetap", text: "Kopi susunya enak banget, tempatnya adem. Jadi langganan tiap weekend!" },
    { name: "Bagas P.", role: "Freelancer", text: "WiFi kencang dan colokan banyak. Betah kerja dari sini seharian." },
    { name: "Salsa A.", role: "Mahasiswi", text: "Matcha latte-nya juara, harganya juga ramah di kantong mahasiswa." }
  ]
};