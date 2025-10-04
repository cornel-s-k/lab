import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import fasilitas1 from "../../assets/home/fasil1.jpeg";

const FasilitasDetail1 = () => {
  return (
    <>
      <section className="py-5 bg-light fasilitas-detail">
        <div className="container">
          {/* Judul */}
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">
              Uji Model <span className="text-danger">Fisik</span>
            </h2>
            <p className="lead text-muted">
              Laboratorium Model Fisik 
            </p>
          </div>

          {/* Konten */}
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <ul className="list-group shadow-sm rounded-4">
                <li className="list-group-item">🌊 Wave Basin (30x55x1.2 m)</li>
                <li className="list-group-item">🌊 Current Basin (20x30x1.2 m)</li>
                <li className="list-group-item">🌊 Wave Flume 1 (2x50x1.6 m)</li>
                <li className="list-group-item">🌊 Wave Flume 2 (1x35x1.5 m)</li>
                <li className="list-group-item">
                  🌊 Tsunami – Current Flume (90x2.5x2 m)
                </li>
              </ul>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={fasilitas1}
                alt="Uji Model Fisik"
                className="img-fluid rounded shadow hover-zoom"
              />
            </div>
          </div>

          {/* Tombol balik */}
          <div className="text-center mt-5">
            <Link to="/#fasilitas-section" className="btn btn-danger px-4 py-2 fw-bold shadow">
              ⬅ Kembali 
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Style inline */}
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
      `}</style>
    </>
  );
};

export default FasilitasDetail1;
