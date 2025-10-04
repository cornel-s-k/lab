import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// Import your images here
import image1 from "../../assets/home/3d.jpeg";
import image2 from "../../assets/home/2d.png";
import image3 from "../../assets/home/mike21.png";
import image4 from "../../assets/home/flow.jpeg";
import image5 from "../../assets/home/lapangan.png";

const LayananSection = () => {
  const services = [
    {
      title: "Sub Lab Model Fisik Dinamika Pantai",
      description: "Paket Pengujian Model Fisik di Kolam Gelombang 3D",
      image: image1,
      link: "https://elsa.brin.go.id/layanan/index/Paket%20Pengujian%20Model%20Fisik%20di%20Kolam%20Gelombang%203D/4649"
    },
    {
      title: "Sub Lab Model Fisik Dinamika Pantai",
      description: "Paket Pengujian Model Fisik di Saluran Gelombang 2D",
      image: image2,
      link: "https://elsa.brin.go.id/layanan/index/Paket%20Pengujian%20Model%20Fisik%20di%20Saluran%20Gelombang%202D/4650"
    },
    {
      title: "Sub Lab Simulasi Hidro-Oseanografi",
      description: "Pemodelan Hidrodinamika menggunakan MIKE 21",
      image: image3,
      link: "https://elsa.brin.go.id/layanan/index/Pemodelan%20Hidrodinamika%20menggunakan%20MIKE%2021%20/4434"
    },
    {
      title: "Sub Lab Simulasi Interaksi Air-Struktur",
      description: "Pemodelan Hidrodinamika menggunakan Flow 3D",
      image: image4,
      link: "https://elsa.brin.go.id/layanan/index/Pemodelan%20Numerik%20Hidrodinamika%20menggunakan%20Software%20Computational%20Fluid%20DynamicsCFD-FLOW3D/4429"
    },
    {
      title: "Sub Lab Mekanika Tanah & Data Lapangan",
      description: "Pengujian Ukuran Butiran",
      image: image5,
      link: "https://elsa.brin.go.id/layanan/index/Pengujian%20Ukuran%20Butiran/4471"
    },
  ];

  return (
    <section id="layanan-section" className="bg-light py-5">
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
          {services.map((service, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card layanan-card h-100 shadow-sm border-0">
                <div className="image-wrapper">
                  <img
                    src={service.image}
                    className="card-img-top img-fluid"
                    alt={service.title}
                  />
                </div>
                <div className="card-body text-center d-flex flex-column">
                  <h6 className="text-muted small">{service.title}</h6>
                  <h5 className="fw-semibold">{service.description}</h5>
                  <a href={service.link} className="btn mt-auto selengkapnya-btn">
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
