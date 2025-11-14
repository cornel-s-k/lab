import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FasilitasSection = () => {
  const [fasilitasList, setFasilitasList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Ambil dari .env
  const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
  const API_URL = `${API_BASE_URL}/api/facilities`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const apiData = await response.json();

        const processedData = apiData.map((item) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          status: item.status,
          image: item.image,
        }));

        setFasilitasList(processedData);
        setError(null);
      } catch (e) {
        console.error("Failed to fetch facilities:", e);
        setError("Gagal memuat data fasilitas dari server.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  let content;
  if (isLoading) {
    content = <p className="text-center text-muted">Memuat fasilitas...</p>;
  } else if (error) {
    content = (
      <div className="alert alert-warning text-center" role="alert">
        {error}
      </div>
    );
  } else if (fasilitasList.length === 0) {
    content = (
      <p className="text-center text-muted">
        Belum ada data fasilitas yang tersedia.
      </p>
    );
  } else {
    content = (
      <FasilitasGrid fasilitasList={fasilitasList} API_BASE_URL={API_BASE_URL} />
    );
  }

  return (
    <section
      id="fasilitas-section"
      className="bg-white py-5 about-section pb-5 bg-light"
      style={{ paddingTop: "110px" }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2 text-black">Fasilitas</h2>
          <p className="lead text-muted">
            Fasilitas modern dengan standar tinggi untuk mendukung riset dan layanan terbaik.
          </p>
        </div>
        {content}
      </div>

      <style jsx>{`
        .fasilitas-card {
          background-color: #f7f7f7;
          border: none;
          min-height: 200px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .fasilitas-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
        }
        .card-title {
          color: #8e1616;
          font-weight: bold;
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
        }
        .status-label {
          color: #4c9f4e;
          font-weight: bold;
          font-size: 0.85rem;
          margin-bottom: 8px;
        }
        .details-btn {
          background-color: #a8a196;
          color: white;
          font-weight: 500;
          border: none;
          padding: 0.45rem 1.2rem;
          border-radius: 10px;
          transition: background-color 0.3s ease;
        }
        .details-btn:hover {
          background-color: #8c847a;
          color: white;
        }
        @media (max-width: 576px) {
          .fasilitas-card {
            min-height: 180px;
          }
        }
      `}</style>
    </section>
  );
};

// ✅ Terima base URL juga biar gambar gak hardcoded ke localhost
const FasilitasGrid = ({ fasilitasList, API_BASE_URL }) => {
  const STORAGE_URL = `${API_BASE_URL}/storage/`;

  return (
    <div className="row g-4 justify-content-center">
      {fasilitasList.map((item) => (
        <div key={item.id} className="col-sm-10 col-md-6 col-lg-4 d-flex">
          <div className="card fasilitas-card shadow-sm rounded-4 w-100 d-flex flex-column">
            <img
              src={`${STORAGE_URL}${item.image}`}
              alt={item.title}
              className="card-img-top rounded-4"
              style={{ height: "200px", objectFit: "cover" }}
              onError={(e) => (e.target.src = "/placeholder.jpg")}
            />

            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <span className="status-label">{item.status}</span>
                <h5 className="card-title">{item.title}</h5>
              </div>
              <Link
                to={`/fasilitas/${item.slug}`}
                className="btn mt-auto details-btn align-self-start"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FasilitasSection;
