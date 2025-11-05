import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../home/Footer";
import axios from "axios";

const FasilitasDetail2 = () => {
  const { slug } = useParams(); // ambil slug dari URL
  const [facility, setFacility] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacility = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8000/api/facilities/${slug}`
        );
        setFacility(response.data);
      } catch (err) {
        setError("Gagal memuat data fasilitas.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFacility();
  }, [slug]);

  if (loading)
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error || !facility)
    return (
      <div className="container py-5 text-center text-danger">
        <p>{error || "Fasilitas tidak ditemukan"}</p>
        <Link to="/#fasilitas-section" className="btn btn-outline-danger">
          Kembali
        </Link>
      </div>
    );

  const { title, description, image, services } = facility;
  const baseUrl = "http://localhost:8000/storage/"; // sesuaikan dengan Laravel storage

  return (
    <>
      <section className="py-5 bg-white fasilitas-detail">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">
              {title.split("&")[0]}{" "}
              <span className="text-danger">{title.split("&")[1]}</span>
            </h2>
            <p className="lead text-muted">{description}</p>
          </div>

          {/* Gambar utama & software */}
          <div className="row g-4 align-items-center mb-5">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={`${baseUrl}${image}`}
                alt={title}
                className="img-fluid rounded shadow hover-zoom"
                onError={(e) => {
                  e.target.src = "/fallback-image.jpg"; // fallback jika gambar error
                }}
              />
            </div>
            <div className="col-md-6">
              <ul className="list-group shadow-sm rounded-4">
                <li className="list-group-item">DHI Mike 21 – Hidro-oseanografi</li>
                <li className="list-group-item">Flow 3D – Water-structure interaction</li>
                <li className="list-group-item">
                  Plaxis – Geo Studio – SAP 2000 (analisis elemen hingga, struktur & geoteknik)
                </li>
                <li className="list-group-item">
                  Open Source Software: OpenFOAM, Delft3D, Tsunami, dll
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-5" />

          {/* Layanan */}
          <div className="mb-5 text-center">
            <h3 className="fw-bold text-dark mb-4">
              Layanan <span className="text-danger">Pengujian & Pemodelan</span>
            </h3>
            <div className="row g-4">
              {services.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card border-0 shadow h-100 hover-lift">
                    <img
                      src={`${baseUrl}${item.image}`}
                      alt={item.title}
                      className="card-img-top rounded-top"
                      style={{ height: "250px", objectFit: "cover" }}
                      onError={(e) => {
                        e.target.src = "/placeholder.jpg";
                      }}
                    />
                    <div className="card-body text-start">
                      <h5 className="fw-bold text-danger mb-2">{item.title}</h5>
                      <p className="text-muted small">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/#fasilitas-section" className="btn btn-danger px-4 py-2 fw-bold shadow">
              Kembali
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
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
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