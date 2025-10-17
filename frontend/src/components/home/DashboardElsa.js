import React, { useState, useEffect } from "react"; // Tambahkan useState dan useEffect
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardElsa = () => {
    // State untuk menyimpan URL dashboard
    const [dashboardUrl, setDashboardUrl] = useState(
        "https://lookerstudio.google.com/embed/reporting/b4f563be-41ec-46d0-81f4-890066a31f37/page/KbWTF" // URL default
    );
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Ganti URL_API_BACKEND dengan URL backend/API Laravel Anda yang sebenarnya
        // Endpoint ini harus Anda buat untuk mengambil link 'Capaian ELSA'
        const API_URL = "http://localhost:8000/api/page-links/capaian-elsa"; 

        const fetchDashboardLink = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch dashboard link");
                }
                const data = await response.json();

                // Asumsi: Data yang dikembalikan memiliki properti 'link'
                if (data.link) {
                    setDashboardUrl(data.link);
                }
            } catch (error) {
                console.error("Error fetching data from API:", error);
                // Biarkan dashboardUrl tetap pada nilai default jika gagal
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardLink();
    }, []);

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
                        {isLoading ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-danger" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3 text-muted">Memuat Dashboard...</p>
                            </div>
                        ) : (
                            <iframe
                                width="100%"
                                height="600"
                                src={dashboardUrl} // <--- Menggunakan URL dari state
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                                title="Elsa Dashboard"
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>

            {/* Custom Style (Tidak diubah) */}
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