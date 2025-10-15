import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import fasilitas3 from "../../assets/home/fasil3.jpeg";

// Tempatkan gambar dummy di sini (Ganti dengan path gambar nyata Anda)
// Karena kita tidak punya 6 gambar nyata, kita pakai placeholder.
const dummyImage = "https://via.placeholder.com/80x50?text=LAB+IMG";

// Define the detailed services data
const subLabServices = [
  {
    title: "Uji Kadar Air Tanah (Soil Water Content Test)",
    method: "SNI 03-1965-1990 dan/atau ASTM D2216-98",
    description:
      "Untuk mengetahui kadar air dari suatu sampel tanah. Kadar air tanah adalah perbandingan antara massa (berat) air yang terkandung dalam tanah dan massa (berat) kering tanah, dinyatakan dalam persen (%).",
    // Tambahkan array untuk 6 gambar/frame
    images: [dummyImage + " 1", dummyImage + " 2", dummyImage + " 3", dummyImage + " 4", dummyImage + " 5", dummyImage + " 6"],
  },
  {
    title: "Uji Berat Jenis (Specific Gravity Test)",
    method: "RSNI 03-1964-2008",
    description:
      "Untuk menentukan berat jenis tanah yang mempunyai butiran lewat saringan 4.75 mm (No.4) dengan piknometer.",
    images: [dummyImage + " 1", dummyImage + " 2", dummyImage + " 3", dummyImage + " 4", dummyImage + " 5", dummyImage + " 6"],
  },
  {
    title: "Uji Ukuran Butir Tanah (Soil Particle Size Analysis)",
    method: "Pemeriksaan ukuran butir-butir yang tertahan saringan No. 200", // Simplified for display
    description:
      "Untuk menentukan distribusi ukuran butir-butir tanah, khususnya untuk tanah yang tidak mengandung butir tertahan saringan No. 10 (butir > 2 mm).",
    images: [dummyImage + " 1", dummyImage + " 2", dummyImage + " 3", dummyImage + " 4", dummyImage + " 5", dummyImage + " 6"],
  },
  {
    title: "Uji Sedimen Layang (Suspended Sediment Test)",
    method: "ESS Method 340.2:Total Suspended Solids",
    description:
      "Untuk mengetahui berat dan konsentrasi sedimen dari suatu sampel air. Sedimen layang adalah perbandingan antara massa (berat) sedimen yang terkandung di dalam air dengan massa (berat) air tersebut, dinyatakan dalam berat dan persen.",
    images: [dummyImage + " 1", dummyImage + " 2", dummyImage + " 3", dummyImage + " 4", dummyImage + " 5", dummyImage + " 6"],
  },
];

const FasilitasDetail3 = () => {
  return (
    <>
      <section className="py-5 bg-light fasilitas-detail">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">
              Mekanika Tanah &{" "}
              <span className="text-danger">Akuisisi Data Lapangan Pesisir</span>
            </h2>
            <p className="lead text-muted">
              Mendukung survei, pemetaan, dan pengambilan data untuk pengembangan
              wilayah pesisir.
            </p>
          </div>

          {/* Core Services and Image (Tata Letak Atas-Bawah) */}
          <div className="row g-4 justify-content-center mb-5"> 
            
            {/* 1. Gambar Utama */}
            <div className="col-lg-8 col-md-10 d-flex justify-content-center mb-4">
              <img
                src={fasilitas3}
                alt="Mekanika Tanah & Data Lapangan"
                className="img-fluid rounded shadow hover-zoom"
              />
            </div>
            
            {/* 2. Daftar Layanan Utama */}
            <div className="col-lg-8 col-md-10">
              <ul className="list-group shadow-sm rounded-4">
                <li className="list-group-item list-group-item-danger fw-bold">🔬 Layanan Utama</li>
                <li className="list-group-item">📌 Mekanika Tanah (Soil Mechanics)</li>
                <li className="list-group-item">
                  📌 Data Lapangan: Struktur Dermaga – Bangunan Pantai
                </li>
                <li className="list-group-item">📌 Data Lapangan: Topografi</li>
                <li className="list-group-item">📌 Data Lapangan: Hidro-oseanografi</li>
              </ul>
            </div>
          </div>
          
          {/* --- New Section for Detailed Sub-Lab Services --- */}
          <hr className="my-5" />
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-4">
              <h3 className="fw-bold text-dark">
                Layanan Sub-Laboratorium Mekanika Tanah
              </h3>
              <p className="lead text-secondary">
                Pengujian akurat sesuai standar nasional dan internasional.
              </p>
            </div>
            
            {/* Map through the services data to display cards/list items */}
            {subLabServices.map((service, index) => (
              <div className="col-md-6 col-lg-6 mb-4" key={index}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-danger">
                      {service.title}
                    </h5>
                    <p className="card-text text-muted">
                      {service.description}
                    </p>
                    <p className="text-sm-start mt-3 mb-3">
                        <small className="text-primary fw-semibold">Metode:</small> 
                        <br /> 
                        <code className="bg-light p-1 rounded d-inline-block mt-1">{service.method}</code>
                    </p>

                    {/* --- BAGIAN BARU: 6 FRAME GAMBAR --- */}
                    <hr />
                    <h6 className="fw-bold text-dark mb-2">Dokumentasi Uji (6 Frames)</h6>
                    <div className="d-flex flex-wrap justify-content-start align-items-center gap-2">
                        {service.images.map((imgSrc, imgIndex) => (
                            <img 
                                key={imgIndex}
                                src={imgSrc}
                                alt={`Dokumentasi ${service.title} ${imgIndex + 1}`}
                                className="img-thumbnail custom-frame-size"
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '5px',
                                }}
                            />
                        ))}
                    </div>
                    {/* ------------------------------------- */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center mt-5">
            <Link to="/#fasilitas-section" className="btn btn-danger px-4 py-2 fw-bold shadow">
              ⬅ Kembali
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Existing and New Styles */}
      <style jsx>{`
        .hover-zoom {
          transition: transform 0.4s ease;
        }
        .hover-zoom:hover {
          transform: scale(1.05);
        }
        .fasilitas-detail {
          animation: fadeInUp 0.8s ease;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Style baru untuk menyesuaikan ukuran frame gambar di dalam kartu */
        .custom-frame-size {
            width: 80px; /* Ukuran lebar yang konsisten */
            height: 50px; /* Ukuran tinggi yang konsisten */
        }
      `}</style>
    </>
  );
};

export default FasilitasDetail3;