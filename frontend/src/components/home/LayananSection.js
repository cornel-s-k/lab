// LayananSection.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LayananSection = () => {
  //State untuk menyimpan data layanan dari API
  const [services, setServices] = useState([]);
  //State untuk menangani status loading
  const [isLoading, setIsLoading] = useState(true); 
  //State untuk error
  const [error, setError] = useState(null);

  //Effect untuk fetching data
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const API_URL = "http://localhost:8000/api/layanan"; 
        
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success && Array.isArray(result.data)) {
          // Data yang diterima dari API sudah sesuai format: 
          // { title, description, link, image: url_lengkap }
          setServices(result.data); 
        } else {
          throw new Error('Data format error or success is false');
        }

      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch services:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []); // [] memastikan effect hanya berjalan sekali setelah render pertama

  // Tampilkan pesan loading atau error
  if (isLoading) {
    return (
      <section id="layanan-section" className="py-5 bg-light">
        <div className="container text-center">
          <p>Memuat layanan...</p> 
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="layanan-section" className="py-5 bg-light">
        <div className="container text-center">
          <p className="text-danger">Gagal memuat data layanan: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="layanan-section" className="bg-light py-5"
    style={{ paddingTop: "110px" }} className="about-section pb-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-black mb-3">Layanan Laboratorium</h2>
          <p className="lead text-muted">
            Temukan layanan yang mendukung penelitian & proyek Anda di bidang
            pesisir, oseanografi, dan rekayasa pantai.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4 justify-content-center">
          {/* Mapping data dari state 'services' */}
          {services.map((service, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card layanan-card h-100 shadow-sm border-0">
                <div className="image-wrapper">
                  <img
                    // Gunakan service.image (URL lengkap dari API)
                    src={service.image} 
                    className="card-img-top img-fluid"
                    alt={service.title}
                    // Tambahkan penanganan jika gambar kosong
                    onError={(e) => { e.target.onerror = null; e.target.src = "placeholder_image_url"; }} 
                  />
                </div>
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="text-muted small">{service.title}</h6>
                  <h5 className="fw-semibold">{service.description}</h5>
                  {/* Gunakan service.link */}
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className="btn mt-auto selengkapnya-btn"> 
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Info Button */}
       <div className="text-center mt-5">
          <button className="btn btn-lg more-info-btn rounded-3 shadow-sm"
          onClick={() => window.location.href = "https://elsa.brin.go.id/layanan/perlokasi/KST%20Serpong%20(Bacharuddin%20Jusuf%20Habibie)?lokasi=KS+Mlati+%28Subandono+Diposaptono%29&keywords="}>
            More Information
          </button>
        </div>
        </div>

      {/* Custom CSS */}
      <style jsx>{`
        .layanan-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }
        .layanan-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        .image-wrapper {
          overflow: hidden;
          max-height: 200px;
        }
        .image-wrapper img {
          transition: transform 0.4s ease;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .layanan-card:hover img {
          transform: scale(1.1);
        }
        .selengkapnya-btn {
          background-color: #a8a196;
          color: white;
          font-weight: 500;
          border-radius: 8px;
          transition: background 0.3s ease;
        }
        .selengkapnya-btn:hover {
          background-color: #8c847a;
        }
        .more-info-btn {
          background-color: #8e1616;
          color: white;
          font-weight: bold;
          padding: 12px 32px;
          border: none;
          transition: background 0.3s ease;
        }
        .more-info-btn:hover {
          background-color: #730303;
        }
      `}</style>
    </section>
  );
};

export default LayananSection;
