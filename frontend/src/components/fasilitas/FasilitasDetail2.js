import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import fasilitas2 from "../../assets/home/fasil2.jpeg";

const FasilitasDetail2 = () => {
  return (
    <>
      <section className="py-5 bg-white fasilitas-detail">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">
              Simulasi Hidro-Oseanografi &{" "}
              <span className="text-danger">Interaksi Air - Struktur</span>
            </h2>
            <p className="lead text-muted">
              Menggunakan software internasional dan open source untuk analisis
              interaksi air-struktur.
            </p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={fasilitas2}
                alt="Simulasi Hidro-Oseanografi"
                className="img-fluid rounded shadow hover-zoom"
              />
            </div>
            <div className="col-md-6">
              <ul className="list-group shadow-sm rounded-4">
                <li className="list-group-item">💻 DHI Mike 21 – Hidro-oseanografi</li>
                <li className="list-group-item">💻 Flow 3D – Water-structure interaction</li>
                <li className="list-group-item">
                  💻 Plaxis – Geo Studio – SAP 2000 (analisis elemen hingga, struktur & geoteknik)
                </li>
                <li className="list-group-item">
                  💻 Open Source Software: OpenFOAM, Delft3D, Tsunami, dll
                </li>
              </ul>
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

export default FasilitasDetail2;
