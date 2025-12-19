# UAS Logika Pemrograman Kelompok 32 Teknik Industri UPNVJ 2025
## - Raffa Aqila Prayata (2510312076)
## - Juan Felix Pardamean Sagala (2510312049)
## - Bani Alfalah Dewantoro (2510312105)

# Sales Forecast Application

Aplikasi web untuk memprediksi penjualan menggunakan algoritma machine learning dengan antarmuka yang modern dan responsif.

## 📋 Daftar Isi

- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Instalasi](#instalasi)
- [Cara Menjalankan](#cara-menjalankan)
- [Struktur Folder](#struktur-folder)
- [API Routes](#api-routes)
- [Kontribusi](#kontribusi)

## ✨ Fitur

- 📊 **Prediksi Penjualan**: Memprediksi penjualan berdasarkan data historis
- 📈 **Visualisasi Grafik**: Menampilkan hasil prediksi dalam bentuk grafik interaktif
- 🎨 **UI Modern**: Antarmuka dengan efek glassmorphism dan gradient yang menarik
- 📱 **Responsive Design**: Dapat diakses dari berbagai ukuran layar
- 💾 **Database Integration**: Menyimpan data forecast ke database SQLite

## 🛠️ Teknologi

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Sequelize** - ORM untuk database
- **SQLite3** - Database
- **EJS** - Template engine

### Frontend
- **HTML5** - Markup
- **CSS3** - Styling dengan glassmorphism
- **Chart.js** - Visualisasi grafik
- **Vanilla JavaScript** - Interaktivitas

## 📦 Instalasi

### Prerequisites
- Node.js (v14 atau lebih tinggi)
- npm atau yarn

### Langkah-langkah

1. **Clone repository**
   ```bash
   git clone https://github.com/prahonkdau/Proyek-Besar-UAS-LPP.git
   cd sales-forecast-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Konfigurasi database** (opsional)
   - Edit file `config/database.js` jika diperlukan

4. **Jalankan aplikasi**
   ```bash
   npm start
   ```

5. **Buka browser**
   - Akses di `http://localhost:3000`

## 🚀 Cara Menjalankan

### Development Mode
```bash
npm start
```

### Production Mode
```bash
NODE_ENV=production npm start
```

## 📁 Struktur Folder

```
sales-forecast-app/
├── config/
│   └── database.js           # Konfigurasi database
├── controllers/
│   └── forecastController.js # Controller untuk forecast
├── models/
│   ├── Forecast.js          # Model data forecast
│   ├── ForecastResult.js    # Model hasil forecast
│   └── index.js             # Database initialization
├── routes/
│   └── forecastRoutes.js    # Route endpoint
├── services/
│   └── ForecastService.js   # Business logic forecast
├── views/
│   ├── home.ejs             # Halaman utama
│   ├── form.ejs             # Form input
│   ├── result.ejs           # Halaman hasil
│   └── layout.ejs           # Template layout
├── public/
│   └── css/
│       └── style.css        # Styling aplikasi
├── app.js                    # Entry point aplikasi
├── package.json              # Dependencies
└── README.md                 # File dokumentasi
```

## 🔌 API Routes

### Halaman Utama
- **GET** `/` - Menampilkan halaman home

### Form Forecast
- **GET** `/forecast` - Menampilkan halaman form
- **POST** `/forecast` - Submit data untuk prediksi

### Hasil Forecast
- **GET** `/result` - Menampilkan hasil forecast

## 📊 Database Schema

### Forecast Table
```
- id (Primary Key)
- productName (String)
- currentMonth (Integer)
- currentYear (Integer)
- quantity (Integer)
- createdAt (Timestamp)
- updatedAt (Timestamp)
```

### ForecastResult Table
```
- id (Primary Key)
- forecastId (Foreign Key)
- nextMonth (Integer)
- nextYear (Integer)
- predictedQuantity (Integer)
- confidence (Float)
- createdAt (Timestamp)
- updatedAt (Timestamp)
```

## 🎨 Design Features

- **Glassmorphism Effect**: Background blur dengan transparency
- **Gradient Background**: Gradasi warna biru yang menarik
- **Responsive Grid**: Layout yang menyesuaikan dengan ukuran layar
- **Modern Typography**: Font Segoe UI untuk keselarasan visual
- **Interactive Charts**: Grafik interaktif menggunakan Chart.js

## 📝 Contoh Penggunaan

1. Masuk ke halaman form
2. Isi data produk, bulan, tahun, dan kuantitas
3. Klik tombol "Prediksi"
4. Lihat hasil forecast dalam bentuk tabel dan grafik

## 🐛 Troubleshooting

### Port 3000 sudah digunakan
```bash
# Ubah port di app.js atau set environment variable
PORT=3001 npm start
```

### Database error
- Pastikan folder `/database` memiliki write permission
- Hapus file database lama: `rm -rf database/db.sqlite`
- Jalankan ulang: `npm start`

## 👤 Author


## 📞 Support

Jika ada pertanyaan atau masalah, silakan buat issue di repository ini.

---

**Last Updated**: December 2025
