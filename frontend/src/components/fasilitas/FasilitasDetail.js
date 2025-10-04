// file: FasilitasDetail.js (Buat file ini, hapus FasilitasDetail1/2/3.js)
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../home/Footer";

const API_BASE_URL = "http://localhost:8000/api/fasilitas"; 

const FasilitasDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const [fasilitas, setFasilitas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        // Jika Laravel Resource-nya tunggal (di method show), data ada di response.data.data
        setFasilitas(response.data.data); 
        setIsLoading(false);
      } catch (error) {
        console.error("Gagal memuat detail fasilitas:", error);
        setIsLoading(false);
        // Opsional: set error state
      }
    };
    fetchData();
  }, [id]); // Dependensi [id] agar data diambil ulang jika ID di URL berubah

  if (isLoading) return <p className="text-center py-5">Memuat Detail...</p>;
  if (!fasilitas) return <p className="text-center py-5">Fasilitas tidak ditemukan.</p>;
  
  // Asumsi: Konten deskripsi_lengkap disimpan sebagai teks biasa dengan baris baru (\n) di database.
  const listItems = fasilitas.deskripsi_lengkap.split('\n').map((item, index) => (
      <li key={index} className="list-group-item">
        {item.trim() ? `📌 ${item.trim()}` : null}
      </li>
  ));

  return (
    <>
      <section className="py-5 bg-light fasilitas-detail">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">{fasilitas.nama_fasilitas}</h2>
            <p className="lead text-muted">Deskripsi ini bisa dari field lain di API jika ada.</p>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={fasilitas.url_gambar} // Gambar dari API
                alt={fasilitas.nama_fasilitas}
                className="img-fluid rounded shadow hover-zoom"
              />
            </div>
            <div className="col-md-6">
              <ul className="list-group shadow-sm rounded-4">
                 {/* Menampilkan list dari deskripsi_lengkap API */}
                 {listItems}
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

export default FasilitasDetail;