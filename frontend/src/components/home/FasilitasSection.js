// file: FasilitasSection.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios
import "bootstrap/dist/css/bootstrap.min.css";

// Pastikan URL ini sesuai dengan lokasi server Laravel Anda
const API_URL = "http://localhost:8000/api/fasilitas"; 

const FasilitasSection = () => {
  const [fasilitasList, setFasilitasList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data dari Laravel API
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        // Kita akses response.data.data karena menggunakan FasilitasResource::collection di Laravel
        setFasilitasList(response.data.data); 
        setIsLoading(false);
      } catch (err) {
        // Handle error seperti CORS, server down, dll.
        console.error("Gagal memuat data Fasilitas:", err);
        setError("Gagal memuat data Fasilitas dari server.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // [] agar hanya dijalankan sekali saat komponen di-mount

  if (isLoading) return <p className="text-center py-5">Memuat Fasilitas...</p>;
  if (error) return <p className="text-center py-5 text-danger">Terjadi kesalahan: {error}</p>;

  return (
    <section id="fasilitas-section" className="bg-white py-5">
      <div className="container">
        {/* Judul */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2 text-black">Fasilitas</h2>
          <p className="lead text-muted">
            Fasilitas modern dengan standar tinggi untuk mendukung riset dan
            layanan terbaik.
          </p>
        </div>

        {/* Card grid menggunakan data dari API */}
        <div className="row g-4 justify-content-center">
          {fasilitasList.map((item) => (
            <div key={item.id} className="col-sm-10 col-md-6 col-lg-4 d-flex">
              <div className="card fasilitas-card shadow-sm rounded-4 w-100">
                <img
                  // Menggunakan key dari FasilitasResource: 'url_gambar'
                  src={item.url_gambar} 
                  className="card-img-top"
                  // Menggunakan key dari FasilitasResource: 'nama_fasilitas'
                  alt={item.nama_fasilitas} 
                />
                <div className="card-body d-flex flex-column">
                  <span className="status-label">Available</span>
                  <h5 className="card-title">{item.nama_fasilitas}</h5>
                  {/* Link ke halaman detail dinamis */}
                  <Link to={`/fasilitas/${item.id}`} className="btn mt-auto details-btn">
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