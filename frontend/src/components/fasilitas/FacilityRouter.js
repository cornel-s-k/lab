import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Import semua komponen detail yang mungkin
import FasilitasDetail2 from "./FasilitasDetail2";
import FasilitasDetail3 from "./FasilitasDetail3"; 
import Footer from "../home/Footer"; // Pastikan Anda juga mengimpor Footer

// Komponen Loading dan Error
const LoadingIndicator = () => (
    <div className="container py-5 text-center" style={{ minHeight: '80vh' }}>
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-2 text-muted">Memuat data fasilitas...</p>
    </div>
);

const ErrorDisplay = ({ error }) => (
    <div className="container py-5 text-center text-danger" style={{ minHeight: '80vh' }}>
      <h3 className="mb-3">Gagal Memuat Fasilitas</h3>
      <p>{error || "Data fasilitas tidak dapat ditemukan atau diakses."}</p>
      <a href="/#fasilitas-section" className="btn btn-outline-danger">
        Kembali ke Daftar Fasilitas
      </a>
    </div>
);


const FacilityRouter = () => {
    const { slug } = useParams();
    const [facility, setFacility] = useState(null);
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiEndpoint = `http://localhost:8000/api/facilities/${slug}`; 

    useEffect(() => {
        const fetchFacilityData = async () => {
            setError(null);
            setLoading(true);
            try {
                const response = await axios.get(apiEndpoint);
                
                // Cek jika respons sukses tapi detail null (kode 404 dari controller)
                if (response.data.message && response.data.message.includes("detail data is missing")) {
                    throw new Error("Data detail fasilitas tidak ditemukan atau link salah.");
                }

                setFacility(response.data.facility);
                setDetail(response.data.detail);
            } catch (err) {
                console.error("Facility Router API Error:", err);
                setError(err.message || "Gagal mengambil data dari server.");
            } finally {
                setLoading(false);
            }
        };

        fetchFacilityData();
    }, [slug, apiEndpoint]);

    if (loading) {
        return <LoadingIndicator />;
    }

    if (error || !facility || !detail) {
        return <ErrorDisplay error={error} />;
    }
    
    // ⬇️ LOGIKA PENTING: Memilih komponen berdasarkan detail_type dari Backend ⬇️
    const { detail_type } = facility;
    
    let ComponentToRender;

    switch (detail_type) {
        case 'FacilityDetail2':
            ComponentToRender = FasilitasDetail2;
            break;
        case 'FacilityDetail3':
            ComponentToRender = FasilitasDetail3;
            break;
        case 'FacilityDetail1':
            // Jika Anda ingin menangani Fasil 1 di sini juga (bukan di App.js)
            // ComponentToRender = FasilitasDetail1;
            // break;
        default:
            // Jika detail_type tidak dikenal, tampilkan error
            return <ErrorDisplay error={`Detail Type (${detail_type}) tidak dikenali atau komponen belum diimplementasikan.`} />;
    }

    // Menggunakan key agar komponen di-render ulang sepenuhnya saat slug berubah
    // Mengirim data 'facility' dan 'detail' sebagai props
    return (
        <>
            <ComponentToRender 
                key={slug} 
                initialFacility={facility} 
                initialDetail={detail} 
            />
            {/* Footer di handle di dalam masing-masing komponen detail */}
        </>
    );
};

export default FacilityRouter;