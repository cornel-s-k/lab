// Anda bisa mengganti nama file ini menjadi HkpDetail.js agar lebih generik
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams
import Footer from "../home/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const HKPLMFDP = () => { // Ganti nama fungsi
  const { code } = useParams(); 
  const [hkp, setHkp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHkpDetail = async () => {
  try {
    const API_URL = `${process.env.REACT_APP_API_URL}/api/hkp/HKPL-MFDP`;
    const response = await fetch(API_URL);

    if (response.status === 404) {
      throw new Error("Data HKP tidak ditemukan.");
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setHkp(data);

  } catch (e) {
    console.error("Failed to fetch HKP detail:", e);
  } finally {
    setIsLoading(false);
  }
};


    fetchHkpDetail();
  }, [code]); // Jalankan ulang saat 'code' berubah

  if (isLoading) {
    return (
      <div className="bg-white"><div className="container py-5 my-5 text-center">Loading Detail...</div></div>
    );
  }

  if (!hkp) {
    return (
      <div className="bg-white"><div className="container py-5 my-5 text-center">Detail HKP tidak ditemukan.</div></div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3 text-secondary animate__animated animate__fadeInDown">
            Hak dan Kewajiban Pengguna Layanan
          </h1>
          {/* Ganti judul dengan data dari API */}
          <h2 className="fw-bold display-5 text-dark animate__animated animate__fadeIn">
            {hkp.title}
          </h2>
          <hr className="w-25 mx-auto border-2 my-4" />
        </div>

        <div className="row g-5">
          {/* Hak Pengguna */}
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <div className="card shadow-lg border-0 h-100 p-4 rounded-4">
              <div className="card-body">
                <h3 className="card-title fw-bold text-success mb-4">
                  Hak Pengguna Layanan
                </h3>
                {/* ⚠️ Gunakan dangerouslySetInnerHTML untuk merender RichEditor content */}
                <div dangerouslySetInnerHTML={{ __html: hkp.hak_content }} /> 
              </div>
            </div>
          </div>

          {/* Kewajiban Pengguna */}
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <div className="card shadow-lg border-0 h-100 p-4 rounded-4">
              <div className="card-body">
                <h3 className="card-title fw-bold text-danger mb-4">
                  Kewajiban Pengguna Layanan
                </h3>
                {/* ⚠️ Gunakan dangerouslySetInnerHTML untuk merender RichEditor content */}
                <div dangerouslySetInnerHTML={{ __html: hkp.kewajiban_content }} />
              </div>
            </div>
          </div>
        </div>

        {/* Tombol Kembali ke Home */}
        <div className="text-center mt-5 animate__animated animate__fadeInUp">
          <Link to="/" className="btn btn-secondary btn-lg rounded-pill shadow-sm">
            <i className="bi bi-arrow-left me-2"></i> Kembali ke Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HKPLMFDP;