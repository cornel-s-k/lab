import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroBg from "../../assets/home/dashboard.jpeg";
import "../../Custom.css"; // CSS tambahan

const Herosection = () => {
  return (
    <section
      className="d-flex align-items-end position-relative text-white hero-section"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
      }}
    >
      {/* Overlay dengan gradient */}
      <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>

      {/* Content */}
      <div className="container position-relative hero-content">
        <h1 className="fw-bold display-4 mb-2 fade-in-up text-accent">
          Dashboard Layanan
        </h1>
        <h2 className="fw-bold display-5 fade-in-up delay-1">
          <span className="text-white">Laboratorium </span>
          <span className="text-accent">Dinamika Pesisir</span>
          <br />
          <span className="text-white">dan</span>{" "}
          <span className="text-accent">Rekayasa Pantai</span>
        </h2>
        <p className="lead col-md-8 fade-in-up delay-2">
          Selamat datang di Dashboard Layanan Laboratorium Dinamika Pesisir dan
          Rekayasa Pantai. Di sini, kami menyediakan akses mudah bagi pengguna
          internal dan eksternal, sekaligus memperkenalkan kompetensi, fasilitas,
          dan inovasi laboratorium kami.
        </p>
      </div>
    </section>
  );
};

export default Herosection;
