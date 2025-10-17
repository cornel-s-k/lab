// BeritaList.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const BeritaList = () => {
  const [beritas, setBeritas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        // 🎯 Ganti URL ini dengan URL API Laravel Berita Anda
        const API_URL = "http://localhost:8000/api/berita"; 
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // ⚠️ Asumsi data yang diterima adalah array of objects (lihat struktur yang diharapkan di pembahasan sebelumnya)
        setBeritas(data);
      } catch (e) {
        setError(e.message);
        console.error("Gagal mengambil data berita:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBerita();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white" style={{ paddingTop: '100px' }}>
        <div className="container py-5 text-center">
            <p className="fw-bold">Memuat Berita...</p>
        </div>
      </div>
    );
  }

  if (error || beritas.length === 0) {
    return (
      <div className="bg-white" style={{ paddingTop: '100px' }}>
        <div className="container py-5 text-center">
            <p className="text-danger fw-bold">{error ? `Error: ${error}` : "Belum ada berita yang tersedia saat ini."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container py-5 my-5" style={{ paddingTop: '100px' }}>
        <div className="text-center mb-5">
          <h1 className="fw-bold display-4 mb-3 text-dark">
            Berita & Publikasi Terbaru
          </h1>
          <p className="lead text-muted">
            Informasi terkini dari Laboratorium Dinamika Pesisir dan Rekayasa Pantai.
          </p>
          <hr className="w-25 mx-auto border-2 my-4" />
        </div>

        <div className="row g-4 justify-content-center">
          {beritas.map((berita) => (
            <div key={berita.id} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="card shadow-lg h-100 rounded-4 overflow-hidden border-0">
                <img
                  src={`http://localhost:8000${berita.image}`}
                  alt={berita.title}
                  className="img-fluid rounded-top"
                  style={{ objectFit: "cover", height: "250px", width: "100%" }}
                  />
                <div className="card-body d-flex flex-column">
                  {/* ⚠️ Asumsi field 'published_at' ada di data API */}
                  <small className="text-muted mb-2">
                    <i className="bi bi-calendar me-1"></i> {berita.published_at}
                  </small>
                  <h5 className="card-title fw-bold mb-3">{berita.title}</h5>
                  {/* ⚠️ Asumsi field 'excerpt' (deskripsi singkat) ada di data API */}
                  <p className="card-text text-muted small flex-grow-1">{berita.excerpt}</p>
                  
                  {/* Tombol Baca Selengkapnya */}
                  <Link 
                    // 🎯 Tautan ke halaman detail menggunakan ID berita
                    to={`/berita/${berita.id}`} 
                    className="btn btn-sm mt-auto"
                    style={{ backgroundColor: "#A8A196", color: "white" }}
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* Tombol ke Home */}
                          <div className="text-center mt-5">
                              <Link to="/" className="btn btn-danger px-4 py-2 fw-bold shadow">
                                  ⬅ Kembali ke Home
                              </Link>
                          </div>
      <Footer />
    </div>
  );
};

export default BeritaList;