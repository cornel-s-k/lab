import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardElsa = () => {
  return (
    <section className="dashboard-section py-5">
      <div className="container">
        {/* Judul */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2 text-black">
            Pencapaian <span style={{ color: "#e34d4dff" }}>ELSA</span>
          </h2>
          <p className="lead text-muted col-lg-8 mx-auto">
            Keberhasilan platform e-Layanan Sains (ELSA) dalam mengintegrasikan
            seluruh layanan riset BRIN, yang bertujuan mempermudah akses,
            meningkatkan transparansi, efisiensi, dan akurasi proses layanan
            riset bagi peneliti, akademisi, serta industri.
          </p>
        </div>

        {/* Embed Looker Studio */}
        <div className="card shadow-sm rounded-3">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              CAPAIAN ELSA - LABORATORIUM DINAMIKA PESISIR DAN REKAYASA PANTAI
            </h5>
          </div>
          <div className="card-body">
            <iframe
              width="100%"
              height="600"
              src="https://lookerstudio.google.com/embed/reporting/b4f563be-41ec-46d0-81f4-890066a31f37/page/KbWTF"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              title="Elsa Dashboard"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Custom Style */}
      <style jsx>{`
        .dashboard-section {
          background-color: #f8f9fa;
        }
        .card-header {
          background-color: #7a0a0a !important;
        }
        .metric-card {
          background-color: #8e1616;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default DashboardElsa;
