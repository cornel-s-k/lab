import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Clock } from "lucide-react"; // icon jam
import { Link } from 'react-router-dom';

const TimelineLayanan = () => {
  return (
    <section className="timeline-layanan-section py-5">
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Timeline Layanan</h2>

        <div className="row justify-content-center align-items-center g-4">
          {/* Left Column: Text and Button */}
          <div className="col-lg-6 text-white text-center text-lg-start">
            <div className="p-4 rounded-3 timeline-text-box mx-auto">
              <p className="mb-4">
                Timeline layanan ini berfungsi sebagai daftar antrean digital
                yang menampilkan tahapan dan progres layanan Anda. Dengan begitu,
                pengguna dapat mengetahui posisi antrean serta perkiraan waktu
                penyelesaian. Untuk informasi lebih lengkap, silakan tekan tombol
                Lihat Detail.
              </p>
<Link to="/timeline" className="btn btn-light rounded-3 fw-bold shadow-sm">
  Lihat Timeline
</Link>

            </div>
          </div>

          {/* Right Column: Clock Icon dengan animasi bounce */}
          <div className="col-lg-6 text-center">
            <div className="timeline-image-container d-inline-flex justify-content-center align-items-center">
              <Clock size={150} className="icon-clock bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .timeline-layanan-section {
          background-color: #8e1616;
        }
        h2 {
          color: white;
        }
        .timeline-text-box {
          background-color: rgba(138, 22, 22, 0.8);
        }
        .timeline-image-container {
          background-color: white;
          padding: 2rem;
          border-radius: 50%;
          width: 220px;
          height: 220px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .icon-clock {
          color: #8e1616;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        .btn-light {
          background-color: white;
          color: #8e1616;
        }
      `}</style>
    </section>
  );
};

export default TimelineLayanan;
