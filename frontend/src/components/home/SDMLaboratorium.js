import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage1 from "../../assets/home/sdm.jpeg";
import { Link } from "react-router-dom";

const SDMLaboratorium = () => {
  return (
    <section
      className="position-relative overflow-hidden sdm-section d-flex align-items-center"
      style={{
        backgroundImage: `url(${bgImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
    >
      {/* Overlay gelap biar teks lebih kebaca */}
      <div className="overlay"></div>

      {/* Foreground Card */}
      <div className="container position-relative z-index-1 d-flex justify-content-center justify-content-lg-end align-items-center h-100">
        <div className="card floating-card rounded-4 shadow-lg p-4 animate-fade-in">
          <div className="card-body">
            <h3 className="card-title fw-bold mb-3 text-uppercase">
              SDM Laboratorium
            </h3>
            <p className="card-text text-muted mb-4">
              Laboratorium Dinamika Pesisir dan Rekayasa Pantai didukung oleh 40
              tenaga profesional dengan latar belakang pendidikan beragam,
              mulai dari jenjang SLTA hingga Doktor (S3). Keberagaman ini
              menjadikan laboratorium mampu menggabungkan keahlian teknis
              lapangan dengan pemikiran akademik tingkat lanjut. Selain itu,
              sejumlah staf juga sedang menempuh pendidikan lanjutan sehingga
              kapasitas keilmuan laboratorium terus berkembang.
            </p>
            <Link to="/sdm"
              className="btn btn-primary btn-lg rounded-3 shadow custom-btn">
                Lihat Detail
              </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.55);
          z-index: 0;
        }

        .floating-card {
          max-width: 520px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: none;
          z-index: 2;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .floating-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
        }

        .card-title {
          color: #8e1616;
          letter-spacing: 1px;
        }

        .btn-custom {
          background-color: #8e1616;
          color: #fff;
          border: none;
          transition: all 0.3s ease;
        }

        .btn-custom:hover {
          background-color: #a82323;
          transform: scale(1.05);
        }

        /* Animasi */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        /* Responsif */
        @media (max-width: 991.98px) {
          .floating-card {
            max-width: 95%;
            margin-top: 2rem;
            text-align: center;
          }
          .btn-custom {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default SDMLaboratorium;

