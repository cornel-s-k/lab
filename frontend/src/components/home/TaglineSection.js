import React from "react";
import heroBg from "../../assets/home/tagline.jpeg";

const TaglineSection = () => {
  return (
    <section className="hero-section text-white">
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="container hero-content text-center">
        <h1 className="fw-bold display-4 hero-title mb-3 animate-fade-up">
          Memberikan Layanan Terbaik untuk{" "}
          <span className="text-red">Pengkajian dan Pengembangan</span>
        </h1>
        <p className="lead hero-text col-lg-8 mx-auto mb-4 animate-fade-up delay-1">
          Laboratorium Dinamika Pesisir dan Rekayasa Pantai hadir untuk
          menyediakan layanan riset, pengujian, dan pengembangan metodologi
          dengan standar ilmiah tinggi.
        </p>
       <a
    href="tel:08119811589" className="btn btn-lg rounded-pill custom-btn animate-fade-up delay-2">
          Hubungi Kami
        </a>
      </div>

      <style jsx>{`
        .hero-section {
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center;
          height: 70vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.55); /* full hitam transparan */
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 1.8rem;
          font-weight: 700;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
        }

        .hero-text {
          font-size: 1rem;
          line-height: 1.6;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
        }

        .text-red {
          color: #8e1616;
        }

        .custom-btn {
          background-color: #8e1616;
          color: #ead196;
          border: none;
          padding: 0.8rem 2rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .custom-btn:hover {
          background-color: #730303;
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        }

        /* Animations */
        .animate-fade-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 1s ease forwards;
        }
        .delay-1 {
          animation-delay: 0.3s;
        }
        .delay-2 {
          animation-delay: 0.6s;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (min-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-text {
            font-size: 1.2rem;
          }
        }
        @media (min-width: 1200px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-text {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TaglineSection;

