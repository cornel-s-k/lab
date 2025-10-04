import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import fasilitas3 from "../../assets/home/fasil3.jpeg";

const FasilitasDetail3 = () => {
  return (
    <>
      <section className="py-5 bg-light fasilitas-detail">
        <div className="container">
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

          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <ul className="list-group shadow-sm rounded-4">
                <li className="list-group-item">📌 Mekanika Tanah</li>
                <li className="list-group-item">
                  📌 Pemetikan Data Lapangan Struktur Dermaga – Bangunan Pantai
                </li>
                <li className="list-group-item">📌 Pemetikan Data Topografi</li>
                <li className="list-group-item">📌 Data Lapangan Hidro-oseanografi</li>
              </ul>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={fasilitas3}
                alt="Mekanika Tanah & Data Lapangan"
                className="img-fluid rounded shadow hover-zoom"
              />
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/#fasilitas-section" className="btn btn-danger px-4 py-2 fw-bold shadow">
              ⬅ Kembali 
            </Link>
          </div>
        </div>
      </section>

      <Footer />

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

export default FasilitasDetail3;
