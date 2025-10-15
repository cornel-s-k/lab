// src/components/home/HKPSection.js
// src/components/home/HKPSection.js
import React, { useState, useEffect } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// Hapus import gambar yang hardcoded:
// import hkp1 from "../../assets/home/mfdp.png";
// import hkp2 from "../../assets/home/shiass.jpeg";
// import hkp3 from "../../assets/home/mtalpp.png";

const HKPSection = () => {
  const [hkpData, setHkpData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHkps = async () => {
      try {
        // Ganti dengan URL API yang benar
        const API_URL = "http://localhost:8000/api/hkp"; 
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Data dari API sudah memiliki format {code, title, image: url, link}
        setHkpData(data); 

      } catch (e) {
        console.error("Failed to fetch HKP data:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHkps();
  }, []);

  if (isLoading) {
    return <section id="hkp-section" className="py-5 bg-light"><div className="container text-center">Loading...</div></section>;
  }

  return (
    <section 
      id="hkp-section" 
      className="py-5 bg-light about-section pb-5 bg-light" // Removed duplicate `className` and `style` for clarity
      style={{ paddingTop: "110px" }} // Keeping inline style for specific padding
    >
      <div className="container">
        {/* Judul Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2 text-black animate-title">
            Hak dan Kewajiban Pengguna (HKP)
          </h2>
          <p className="lead text-muted animate-subtitle">
            Layanan Laboratorium Dinamika Pesisir dan Rekayasa Pantai yang bisa
            kamu akses untuk mendukung riset dan inovasi.
          </p>
        </div>

        {/* Card Section */}
        <div className="row g-4 justify-content-center">
          {hkpData.map((item, index) => (
            <div
              key={index}
              className="col-sm-10 col-md-6 col-lg-4 d-flex animate-card"
            >
              <div className="card h-100 shadow-lg rounded-4 overflow-hidden border-0 position-relative card-hover">
                {/* Gambar dengan overlay */}
                <div className="position-relative card-img-container"> {/* Added new class for image container */}
                  <img
                    src={item.image}
                    className="card-img-top img-fluid"
                    alt={item.title}
                  />
                  <div className="card-overlay d-flex align-items-center justify-content-center">
                    <span className="overlay-text">Klik details</span>
                  </div>
                </div>

                <div className="card-body d-flex flex-column text-center p-4">
                  <h5 className="card-title fw-bold mb-2">{item.code}</h5>
                  <p className="card-text text-muted small flex-grow-1">
                    {item.title}
                  </p>
                 <Link to={item.link} className="btn mt-auto details-btn">
                      Details
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        /* Animasi Section */
        .animate-title {
          animation: fadeInDown 1s ease;
        }
        .animate-subtitle {
          animation: fadeIn 1.2s ease;
        }
        .animate-card {
          animation: fadeUp 1.2s ease;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Card Hover Effect */
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
        }

        /* NEW CSS FOR IMAGE SHAPE */
        .card-img-container {
          height: 250px; /* Set a fixed height for the image container */
          overflow: hidden; /* Hide overflowing parts of the image */
        }

        .card-img-top {
          width: 100%;
          height: 100%; /* Make the image fill the container's height */
          object-fit: cover; /* Crop if necessary to cover the area */
          object-position: center; /* Center the image within its container */
        }
        
        /* Overlay di gambar */
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card-hover:hover .card-overlay {
          opacity: 1;
        }
        .overlay-text {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }

        /* Judul Card */
        .card-title {
          color: #8e1616;
        }

        /* Tombol */
        .details-btn {
          background-color: #a8a196;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
        }
        .details-btn:hover {
          background-color: #8c847a;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default HKPSection;