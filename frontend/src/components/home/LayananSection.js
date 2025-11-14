// src/components/LayananSection.js (LayananSection.js)
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Impor gambar lokal untuk hardcode fallback
import image1 from "../../assets/home/3d.jpeg"; 
import image2 from "../../assets/home/2d.png";
import image3 from "../../assets/home/mike21.png";
import image4 from "../../assets/home/flow.jpeg";
import image5 from "../../assets/home/lapangan.png";

// Data Hardcode/Fallback
const FALLBACK_SERVICES = [
  {
    title: "Sub Lab Model Fisik Dinamika Pantai",
    description: "Paket Pengujian Model Fisik di Kolam Gelombang 3D",
    image: image1,
    link: "https://elsa.brin.go.id/layanan/index/Paket%20Pengujian%20Model%20Fisik%20di%20Kolam%20Gelombang%203D/4649"
  },
  {
    title: "Sub Lab Model Fisik Dinamika Pantai",
    description: "Paket Pengujian Model Fisik di Saluran Gelombang 2D",
    image: image2,
    link: "https://elsa.brin.go.id/layanan/index/Paket%20Pengujian%20Model%20Fisik%20di%20Saluran%20Gelombang%202D/4650"
  },
  {
    title: "Sub Lab Simulasi Hidro-Oseanografi",
    description: "Pemodelan Hidrodinamika menggunakan MIKE 21",
    image: image3,
    link: "https://elsa.brin.go.id/layanan/index/Pemodelan%20Hidrodinamika%20menggunakan%20MIKE%2021%20/4434"
  },
  {
    title: "Sub Lab Simulasi Interaksi Air-Struktur",
    description: "Pemodelan Hidrodinamika menggunakan Flow 3D",
    image: image4,
    link: "https://elsa.brin.go.id/layanan/index/Pemodelan%20Numerik%20Hidrodinamika%20menggunakan%20Software%20Computational%20Fluid%20DynamicsCFD-FLOW3D/4429"
  },
  {
    title: "Sub Lab Mekanika Tanah & Data Lapangan",
    description: "Pengambilan Data Lapangan",
    image: image5,
    link: "https://elsa.brin.go.id/layanan/index/Pengujian%20Ukuran%20Butiran/4471"
  },
];

const LayananSection = () => {
  // 💡 Inisialisasi state services dengan data hardcode/fallback
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      let isFallbackUsed = false;
      
      try {
        const API_URL = process.env.REACT_APP_API_URL + "/api/layanan"; 
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}. Menggunakan data fallback.`);
        }

        const result = await response.json();
        
        if (result.success && Array.isArray(result.data) && result.data.length > 0) {
          // Data berhasil diambil dan valid
          setServices(result.data); 
          setError(null); // Bersihkan error jika sukses
        } else {
          // Jika API berhasil tapi datanya kosong atau format salah
          throw new Error('Data format error or empty. Menggunakan data fallback.');
        }

      } catch (e) {
        // Jika fetch gagal (koneksi terputus, 404, atau error di atas)
        console.warn("Failed to fetch services from API. Using hardcoded fallback.", e);
        setError("Gagal memuat data dari API. Menampilkan data standar.");
        // Data hardcode sudah ada di state, jadi tidak perlu disetel ulang
        isFallbackUsed = true;
      } finally {
        // Jika fetch gagal, isLoading tetap disetel false
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []); 

  // 💡 Tampilkan Loading hanya saat menunggu API.
  if (isLoading) {
    return (
      <section id="layanan-section" className="py-5 bg-light" style={{ paddingTop: "110px" }}>
        <div className="container text-center">
          <p>Memuat layanan...</p> 
        </div>
      </section>
    );
  }

  // Catatan: Kita tidak perlu menampilkan error besar karena sudah ada fallback.
  // Error hanya ditampilkan sebagai pesan tambahan di atas layanan.

  return (
    <section id="layanan-section" className="bg-light py-5"
    style={{ paddingTop: "110px" }} className="about-section pb-5 bg-light">
      <div className="container">
        
        {/* Pesan Error di Tampilkan di Sini (jika ada, tanpa mengganggu layout) */}
        {error && (
            <div className="alert alert-warning text-center" role="alert">
                {error}
            </div>
        )}

        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-black mb-3">Layanan Laboratorium</h2>
          <p className="lead text-muted">
            Temukan layanan yang mendukung penelitian & proyek Anda di bidang
            pesisir, oseanografi, dan rekayasa pantai.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card layanan-card h-100 shadow-sm border-0">
                <div className="image-wrapper">
                  <img
                    src={service.image} 
                    className="card-img-top img-fluid"
                    alt={service.description} // Ganti alt dari service.title ke description agar lebih detail
                  />
                </div>
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="text-muted small">{service.title}</h6>
                  <h5 className="fw-semibold">{service.description}</h5>
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className="btn mt-auto selengkapnya-btn"> 
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Info Button */}
        <div className="text-center mt-5">
          <button className="btn btn-lg more-info-btn rounded-3 shadow-sm"
          onClick={() => window.location.href = "https://elsa.brin.go.id/layanan/perlokasi/KST%20Serpong%20(Bacharuddin%20Jusuf%20Habibie)?lokasi=KS+Mlati+%28Subandono+Diposaptono%29&keywords="}>
            More Information
          </button>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .layanan-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }
        .layanan-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .image-wrapper {
          overflow: hidden;
          max-height: 200px;
        }
        .image-wrapper img {
          transition: transform 0.4s ease;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .layanan-card:hover img {
          transform: scale(1.1);
        }
        .selengkapnya-btn {
          background-color: #a8a196;
          color: white;
          font-weight: 500;
          border-radius: 8px;
          transition: background 0.3s ease;
        }
        .selengkapnya-btn:hover {
          background-color: #8c847a;
        }
        .more-info-btn {
          background-color: #8e1616;
          color: white;
          font-weight: bold;
          padding: 12px 32px;
          border: none;
          transition: background 0.3s ease;
        }
        .more-info-btn:hover {
          background-color: #730303;
        }
      `}</style>
    </section>
  );
};

export default LayananSection;