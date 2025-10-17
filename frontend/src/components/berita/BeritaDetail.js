// BeritaDetail.js

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../home/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const BeritaDetail = () => {
  const { id } = useParams();
  const [berita, setBerita] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("ID berita tidak ditemukan di URL.");
      setIsLoading(false);
      return;
    }

    const fetchDetail = async () => {
      try {
        const API_URL = `http://localhost:8000/api/berita/${id}`;
        const response = await fetch(API_URL);

        if (response.status === 404) {
          throw new Error("Berita tidak ditemukan.");
        }
        if (!response.ok) {
          throw new Error(`Gagal mengambil data. Status: ${response.status}`);
        }

        const data = await response.json();
        setBerita(data);
      } catch (e) {
        setError(e.message);
        console.error("Gagal mengambil detail berita:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (isLoading) {
    return (
      <div className="bg-white" style={{ paddingTop: "100px" }}>
        <div className="container py-5 text-center">
          <p className="fw-bold">Memuat Detail Berita...</p>
        </div>
      </div>
    );
  }

  if (error || !berita) {
    return (
      <div className="bg-white" style={{ paddingTop: "100px" }}>
        <div className="container py-5 text-center">
          <p className="text-danger fw-bold">{error || "Berita tidak ditemukan."}</p>
          <Link
            to="/berita"
            className="btn btn-sm mt-3"
            style={{ backgroundColor: "#A8A196", color: "white" }}
          >
            Kembali ke Daftar Berita
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white" style={{ paddingTop: "100px" }}>
      <div className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Tombol Back ke Daftar Berita */}
            <Link
              to="/berita"
              className="btn btn-sm mb-4"
              style={{ backgroundColor: "#A8A196", color: "white" }}
            >
              <i className="bi bi-arrow-left me-2"></i> Kembali ke Daftar Berita
            </Link>

            {/* Gambar Utama */}
            <img
  src={`http://localhost:8000${berita.image}`}
  alt={berita.title}
  className="img-fluid rounded-top"
  style={{ objectFit: "cover", maxHeight: "400px", width: "100%" }}
/>

            {/* Metadata */}
            <div className="text-muted small mb-3">
              Dipublikasikan pada: {berita.published_at || "Tanggal Tidak Diketahui"}
              {berita.author && ` oleh ${berita.author}`}
            </div>

            {/* Judul dan Konten */}
            <h1 className="fw-bold mb-4 text-dark">{berita.title}</h1>

            <div className="card shadow-sm p-4 border-0 rounded-4 mb-5">
              <div className="card-body">
                <div
                  className="berita-content"
                  dangerouslySetInnerHTML={{ __html: berita.content }}
                />
              </div>
            </div>

            {/* Tombol Back di bawah konten */}
            <div className="text-center">
              <Link
                to="/berita"
                className="btn btn-lg"
                style={{ backgroundColor: "#A8A196", color: "white" }}
              >
                <i className="bi bi-arrow-left me-2"></i> Kembali ke Daftar Berita
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BeritaDetail;
