import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 💡 IMPORT GAMBAR LOKAL DI SINI (Asumsi path dari MitraKerjasama.jsx)
import ITK from "../../assets/home/itk.jpg";
// Sesuaikan dengan nama file gambar Anda yang lain di folder katalog jika diperlukan

// Data Hardcode/Fallback
// Kita menggunakan URL eksternal di sini, tetapi jika gambar ITK adalah file lokal, kita impor di atas.
const FALLBACK_PARTNERS = [
  { logo: "https://integrasi.djpt.kkp.go.id/pud/assets/portal/img/material-logo-2021.png", name: "Kementerian Kelautan" },
  { logo: "https://www.sig.id/storage/downloads/logo-sig/sig-latar-putih.png", name: "SIG" },
  { logo: "https://portal.dephub.go.id/themes/new2020/assets/images/logo-large.png", name: "Kementerian Perhubungan" },
  { logo: "https://mm.feb.undip.ac.id/wp-content/uploads/2021/11/universitas-diponegoro-logo.png", name: "UNDIP" },
  // Menggunakan impor gambar lokal
  { logo: ITK, name: "ITK Balikpapan" }, 
  { logo: "https://lpkm.psikologi.ugm.ac.id/wp-content/uploads/2016/05/cropped-logo-ugm.png", name: "UGM" },
];

const MitraKerjasama = () => {
  // Inisialisasi state partners dengan data hardcode
  const [partners, setPartners] = useState(FALLBACK_PARTNERS); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL + "/api/partners"; 

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(API_URL); // Melakukan fetch ke API Laravel
        
        if (!response.ok) {
          // Jika status HTTP gagal (404, 500, dll.)
          throw new Error(`HTTP error! status: ${response.status}.`);
        }
        
        const result = await response.json(); // Mengubah response menjadi JSON
        
        if (result.success && result.data && Array.isArray(result.data) && result.data.length > 0) {
          // Data berhasil diambil dan valid
          setPartners(result.data); // Ganti data fallback dengan data API
          setError(null);
        } else {
           // Jika API berhasil tapi datanya kosong
           throw new Error('API returned empty or invalid data.');
        }
        
      } catch (e) {
        // Jika fetch gagal (koneksi terputus) atau error di atas terpicu
        console.error("Gagal mengambil data mitra kerjasama dari API. Menggunakan data fallback.", e);
        setError("Gagal memuat data dari API. Menampilkan data standar.");
        // Data hardcode sudah ada di state, jadi tidak perlu disetel ulang
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []); 

  // Tampilkan pesan loading HANYA saat menunggu API untuk pertama kalinya
  if (loading) {
    return (
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4 text-dark">Mitra Kerjasama</h2>
          <p>Memuat data...</p>
        </div>
      </section>
    );
  }

  // Jika partners.length = 0 SETELAH loading, itu berarti data fallback juga kosong.
  // Tapi karena kita inisialisasi dengan FALLBACK_PARTNERS, seharusnya ini tidak terjadi.
  if (partners.length === 0) {
      return (
          <section className="py-5 text-center bg-light">
              <div className="container">
                  <h2 className="fw-bold mb-4 text-dark">Mitra Kerjasama</h2>
                  <p>Tidak ada mitra kerjasama yang tersedia.</p>
              </div>
          </section>
      );
  }

  // Menggunakan data dari state (baik dari API atau Fallback) untuk tampilan slider
  return (
    <section className="py-5 text-center bg-light">
      <style>{`
        .slider {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .slider-track {
          display: flex;
          /* Lebar slider track dihitung dua kali lipat dari jumlah mitra untuk efek loop */
          width: calc(200% * ${partners.length}); 
          animation: scroll 150s linear infinite; 
        }
        .slide {
          flex: 0 0 auto;
          width: 150px;
          margin: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .slide img {
          max-width: 100%;
          height: 80px; 
          width: auto; 
          object-fit: contain; 
          transition: transform 0.5s; 
        }
        .slide img:hover {
          transform: scale(1.2); 
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); 
          }
        }
      `}</style>

      <div className="container">
        <h2 className="fw-bold mb-4 text-dark">Mitra Kerjasama</h2>
        
        {/* Pesan Error di Tampilkan di Sini */}
        {error && (
            <div className="alert alert-warning text-center small" role="alert">
                {error}
            </div>
        )}

        <div className="slider">
          <div className="slider-track">
            {/* Gandakan array partners untuk efek slider tak terbatas */}
            {partners.concat(partners).map((partner, idx) => (
              <div className="slide" key={idx}>
                <img
                  src={partner.logo} // Menggunakan data 'logo' dari state
                  alt={partner.name}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MitraKerjasama;