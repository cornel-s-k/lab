import React from "react";
import { Link } from "react-router-dom"; 
import tugasBg from "../../assets/home/tugas.jpeg";
import "../../Custom.css"; // Import file CSS kustom

const Tugas = () => {
  return (
    <section className="bg-white py-5 custom-margin-top tugas-section">
      <div className="container">
        <div className="row align-items-center flex-lg-row flex-column-reverse">
          {/* Right Section: Text Content */}
          <div className="col-lg-6 text-center text-lg-start fade-in">
            <h2 className="display-5 fw-bold mb-3 text-dark">
              Mendukung Inovasi Melalui{" "}
              <span className="text-danger">Tugas dan Fungsi</span>{" "}
              Laboratorium
            </h2>
            <p className="lead text-muted mb-4">
              Laboratorium Dinamika Pesisir dan Rekayasa Pantai hadir sebagai
              pusat layanan riset, pengujian, dan inovasi. Kami mendukung solusi
              pesisir berkelanjutan, infrastruktur maritim, serta kolaborasi
              dengan akademisi, industri, dan pemerintah.
            </p>
            <Link
              to="/about"
              className="btn btn-primary btn-lg rounded-3 shadow custom-btn"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>

          {/* Left Section: Image */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center fade-in">
            <img
              src={tugasBg}
              alt="Tugas Laboratorium"
              className="img-fluid rounded shadow tugas-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tugas;

