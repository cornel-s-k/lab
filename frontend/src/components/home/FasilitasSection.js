// FasilitasSection.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import fasilitas1 from "../../assets/home/fasil1.jpeg";
import fasilitas2 from "../../assets/home/fasil2.jpeg";
import fasilitas3 from "../../assets/home/fasil3.jpeg";

const FasilitasSection = () => {
  // Data fasilitas dalam array
  const fasilitasList = [
    {
      id: 1,
      title: "Uji Model Fisik Dinamika Pantai",
      image: fasilitas1,
      status: "Available",
      link: "/fasilitas/1",
    },
    {
      id: 2,
      title: "Simulasi Hidro-Oseanografi & Interaksi Air Struktur",
      image: fasilitas2,
      status: "Available",
      link: "/fasilitas/2",
    },
    {
      id: 3,
      title: "Mekanika Tanah dan Akuisisi Data Lapangan Pesisir",
      image: fasilitas3,
      status: "Available",
      link: "/fasilitas/3",
    },
  ];

  return (
    // Add the id="fasilitas-section" here
    <section id="fasilitas-section" className="bg-white py-5"
    style={{ paddingTop: "110px" }} 
 className="about-section pb-5 bg-light">
      <div className="container">
        {/* Judul */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2 text-black">Fasilitas</h2>
          <p className="lead text-muted">
            Fasilitas modern dengan standar tinggi untuk mendukung riset dan
            layanan terbaik.
          </p>
        </div>

        {/* Card grid */}
        <div className="row g-4 justify-content-center">
          {fasilitasList.map((item) => (
            <div key={item.id} className="col-sm-10 col-md-6 col-lg-4 d-flex">
              <div className="card fasilitas-card shadow-sm rounded-4 w-100">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <span className="status-label">{item.status}</span>
                  <h5 className="card-title">{item.title}</h5>
                  <Link to={item.link} className="btn mt-auto details-btn">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom styling */}
      <style jsx>{`
        .fasilitas-card {
          background-color: #efefef;
          border: none;
          min-height: 400px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .fasilitas-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .card-img-top {
          border-radius: 0.75rem 0.75rem 0 0 !important;
          height: 180px;
          object-fit: cover;
        }
        .card-title {
          color: #8e1616;
          font-weight: bold;
          font-size: 1rem;
        }
        .status-label {
          color: #4c9f4e;
          font-weight: bold;
          font-size: 0.85rem;
          margin-bottom: 6px;
        }
        .details-btn {
          background-color: #a8a196;
          color: white;
          font-weight: 500;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 10px;
          transition: background-color 0.3s ease;
        }
        .details-btn:hover {
          background-color: #8c847a;
          color: white;
        }
        @media (max-width: 576px) {
          .fasilitas-card {
            min-height: 360px;
          }
          .card-img-top {
            height: 150px;
          }
        }
      `}</style>
    </section>
  );
};

export default FasilitasSection;