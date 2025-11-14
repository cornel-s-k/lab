import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";

// Terima data sebagai props dari FacilityRouter
// Kita TIDAK perlu lagi melakukan fetching di sini
const FasilitasDetail3 = ({ initialFacility, initialDetail }) => {
    // Gunakan data yang sudah di-fetch oleh FacilityRouter
    const facility = initialFacility;
    const detail = initialDetail;
    const API_BASE_URL = process.env.REACT_APP_API_URL;
    const baseUrl = `${API_BASE_URL}/storage/`;

    // Data dari Facility
    const { title: facilityTitle } = facility;

    // Data dari FacilityDetail3
    const {
      title: detailTitle = facilityTitle, // Fallback ke title Fasilitas utama
      short_description: description = "",
      main_image_path: image = "",
      core_services: coreServices = [], // Array of objects/strings
      sub_lab_services: subLabServices = [], // Array of objects
    } = detail;

    // Logic untuk membagi title (misal: 'Mekanika Tanah & Akuisisi Data Lapangan Pesisir')
    const titleToSplit = detailTitle || facilityTitle;
    const titleParts = titleToSplit.split("&");
    const headerTitle = titleParts[0].trim();
    const headerSpan = titleParts[1] ? titleParts[1].trim() : "";

    // Periksa apakah data utama yang diperlukan benar-benar ada (pengamanan ekstra)
    if (!detail) {
        return (
            <div className="container py-5 text-center text-danger">
                <p>Gagal memproses data detail FacilityDetail3.</p>
                <Link to="/#fasilitas-section" className="btn btn-outline-danger">
                    Kembali
                </Link>
            </div>
        );
    }
    
    return (
        <>
            <section className="py-5 bg-light fasilitas-detail">
                <div className="container">
                    {/* Header Section */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-dark">
                            {headerTitle}{" "}
                            <span className="text-danger">{headerSpan}</span>
                        </h2>
                        <p className="lead text-muted">
                            {description}
                        </p>
                    </div>

                    {/* Core Services and Image */}
                    <div className="row g-4 justify-content-center mb-5">
                        
                        {/* 1. Gambar Utama */}
                        <div className="col-lg-8 col-md-10 d-flex justify-content-center mb-4">
                            <img
                                src={image ? `${baseUrl}${image}` : "/fallback-image.jpg"}
                                alt={facilityTitle}
                                className="img-fluid rounded shadow hover-zoom"
                                onError={(e) => {
                                    e.target.src = "/fallback-image.jpg"; 
                                }}
                            />
                        </div>
                        
                        {/* 2. Daftar Layanan Utama (Core Services) */}
                       <div className="col-lg-8 col-md-10">
    <ul className="list-group shadow-sm rounded-4">
        <li className="list-group-item list-group-item-danger fw-bold">🔬 Layanan Utama</li>
        {Array.isArray(coreServices) && coreServices.map((serviceItem, index) => (
            // ✅ Perbaiki di sini: Akses serviceItem.item
            <li className="list-group-item" key={index}>📌 {serviceItem.item}</li> 
            // Jika Anda ingin pengamanan ganda (untuk array of strings biasa atau array of objects):
            // <li className="list-group-item" key={index}>📌 {serviceItem.item || serviceItem}</li>
        ))}
    </ul>
</div>
                    </div>
                    
                    {/* --- Detailed Sub-Lab Services --- */}
                    {Array.isArray(subLabServices) && subLabServices.length > 0 && (
                        <>
                            <hr className="my-5" />
                            <div className="row justify-content-center">
                                <div className="col-12 text-center mb-4">
                                    <h3 className="fw-bold text-dark">
                                        Layanan Sub-Laboratorium Mekanika Tanah
                                    </h3>
                                    <p className="lead text-secondary">
                                        Pengujian akurat sesuai standar nasional dan internasional.
                                    </p>
                                </div>
                                
                                {/* Mapping Sub-Lab Services (Array of Objects) */}
                                {subLabServices.map((service, index) => (
                                    <div className="col-md-6 col-lg-6 mb-4" key={index}>
                                        <div className="card h-100 shadow-sm border-0">
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold text-danger">
                                                    {service.title}
                                                </h5>
                                                <p className="card-text text-muted">
                                                    {service.description}
                                                </p>
                                                <p className="text-sm-start mt-3 mb-3">
                                                    <small className="text-primary fw-semibold">Metode:</small> 
                                                    <br /> 
                                                    <code className="bg-light p-1 rounded d-inline-block mt-1">{service.method}</code>
                                                </p>

                                                {/* --- BAGIAN BARU: 6 FRAME GAMBAR (Nested Repeater) --- */}
                                                <hr />
                                                <h6 className="fw-bold text-dark mb-2">Dokumentasi Uji (6 Frames)</h6>
                                                <div className="d-flex flex-wrap justify-content-start align-items-center gap-2">
                                                    {/* Mapping Nested Images: Perhatikan image_path */}
                                                    {Array.isArray(service.images) && service.images.map((imageItem, imgIndex) => (
                                                        <img 
                                                            key={imgIndex}
                                                            // Ambil path gambar dari objek imageItem (imageItem.image_path)
                                                            src={imageItem.image_path ? `${baseUrl}${imageItem.image_path}` : "/placeholder.jpg"}
                                                            alt={`Dokumentasi ${service.title} ${imgIndex + 1}`}
                                                            className="img-thumbnail custom-frame-size"
                                                            style={{
                                                                objectFit: 'cover',
                                                                borderRadius: '5px',
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                {/* ------------------------------------- */}
                                                
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Back Button */}
                    <div className="text-center mt-5">
                        <Link to="/#fasilitas-section" className="btn btn-danger px-4 py-2 fw-bold shadow">
                            ⬅ Kembali
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Existing and New Styles */}
            <style jsx>{`
                .hover-zoom {
                    transition: transform 0.4s ease;
                }
                .hover-zoom:hover {
                    transform: scale(1.05);
                }
                .fasilitas-detail {
                    animation: fadeInUp 0.8s ease;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .custom-frame-size {
                    width: 80px; 
                    height: 50px; 
                }
            `}</style>
        </>
    );
};

export default FasilitasDetail3;