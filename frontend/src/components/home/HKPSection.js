// src/components/home/HKPSection.js

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// Import your images here
import hkp1 from "../../assets/home/mfdp.png";
import hkp2 from "../../assets/home/SHIAS.jpeg";
import hkp3 from "../../assets/home/mtallp.png";

const HKPSection = () => {
  const hkpData = [
    {
      code: "HKPL-MFDP",
      title:
        "Hak dan Kewajiban Pengguna Layanan Model Fisik Dinamika Pantai",
      image: hkp1,
      // 1. Tambahkan '/hkp' ke link
      link: "/hkp/HKPL-MFDP", 
    },
    {
      code: "HKPL-SHIAS",
      title:
        "Hak dan Kewajiban Pengguna Layanan Simulasi Hidro-Oseanografi & Interaksi Air - Struktur",
      image: hkp2,
      // 2. Tambahkan '/hkp' ke link
      link: "/hkp/HKPL-SHIAS", 
    },
    {
      code: "HKPL-MTADLP",
      title:
        "Hak dan Kewajiban Pengguna Layanan Mekanika Tanah dan Akuisisi Data Lapangan Pesisir",
      image: hkp3,
      // 3. Tambahkan '/hkp' ke link
      link: "/hkp/HKPL-MTADLP", 
    },
  ];

  return (
    <section id="hkp-section" className="py-5 bg-light">
      <div className="container">
        {/* Judul Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2 text-black animate-title">
            Hak dan Kewajiban Pengguna (HKP)
          </h2>
          <p className="lead text-muted animate-subtitle">
            Layanan Laboratorium Dinamika Pesisir dan Rekayasa Pantai yang bisa
            kamu akses untuk mendukung riset dan inovasi.
          </p>
        </div>

        {/* Card Section */}
        <div className="row g-4 justify-content-center">
          {hkpData.map((item, index) => (
            <div
              key={index}
              className="col-sm-10 col-md-6 col-lg-4 d-flex animate-card"
            >
              <div className="card h-100 shadow-lg rounded-4 overflow-hidden border-0 position-relative card-hover">
                {/* Gambar dengan overlay */}
                <div className="position-relative">
                  <img
                    src={item.image}
                    className="card-img-top img-fluid"
                    alt={item.title}
                  />
                  <div className="card-overlay d-flex align-items-center justify-content-center">
                    <span className="overlay-text">Klik details</span>
                  </div>
                </div>

                <div className="card-body d-flex flex-column text-center p-4">
                  <h5 className="card-title fw-bold mb-2">{item.code}</h5>
                  <p className="card-text text-muted small flex-grow-1">
                    {item.title}
                  </p>
                 <Link to={item.link} className="btn mt-auto details-btn">
                            Details
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        /* Animasi Section */
        .animate-title {
          animation: fadeInDown 1s ease;
        }
        .animate-subtitle {
          animation: fadeIn 1.2s ease;
        }
        .animate-card {
          animation: fadeUp 1.2s ease;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Card Hover Effect */
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
        }

        /* Overlay di gambar */
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card-hover:hover .card-overlay {
          opacity: 1;
        }
        .overlay-text {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }

        /* Judul Card */
        .card-title {
          color: #8e1616;
        }

        /* Tombol */
        .details-btn {
          background-color: #a8a196;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
        }
        .details-btn:hover {
          background-color: #8c847a;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default HKPSection;
