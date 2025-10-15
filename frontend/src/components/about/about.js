// src/components/about/OrgChart.js
import React from "react";
import "../../Custom.css";
import Header from "../home/Header";
import Footer from "../home/Footer";
import { Link } from "react-router-dom";
import OrgChart from "../about/OrgChart";
// Gambar sudah diimport dan siap digunakan
import Koordinator from "../../assets/about/sandy.jpeg"; 
import Kepala from "../../assets/about/adnan.jpeg";
import Peta from "../../assets/about/peta.png";

// Data untuk fungsi laboratorium
const functionsData = [
    {
        icon: "bi-lightbulb-fill",
        title: "Fasilitasi Riset & Inovasi",
        description: "Memfasilitasi kegiatan penelitian dan pengembangan inovasi terkait Dinamika Pesisir dan Rekayasa Pantai.",
        color: "text-danger"
    },
    {
        icon: "bi-graph-up-arrow",
        title: "Pengembangan Metodologi",
        description: "Pengembangan riset, metode pengujian, dan metodologi baru di bidang kelautan dan pesisir.",
        color: "text-primary"
    },
    {
        icon: "bi-people-fill",
        title: "Edukasi & Pengabdian",
        description: "Mendukung kegiatan pendidikan, pelatihan, dan pengabdian masyarakat terkait pemanfaatan fasilitas lab.",
        color: "text-success"
    },
    {
        icon: "bi-hand-thumbs-up-fill",
        title: "Kemitraan Strategis",
        description: "Membentuk kolaborasi strategis dengan industri, perguruan tinggi, dan lembaga pemerintah.",
        color: "text-warning"
    },
];

const About = () => {
    return (
        <>
            <Header />
            <section
                className="about-section pb-5 bg-light"
                style={{ paddingTop: "110px" }}
            >
                <div className="container">
                    
                    {/* Section: Tugas dan Fungsi */}
                    {/* ... (Konten Tugas dan Fungsi tetap sama) ... */}
                    <div className="mb-5 text-center">
                        <h2 className="fw-bold mb-3 text-dark">
                            Tugas dan <span className="text-danger">Fungsi</span>
                        </h2>
                        <p className="lead text-muted mb-4">
                            Laboratorium Dinamika Pesisir dan Rekayasa Pantai memiliki peran
                            penting dalam mendukung penelitian, pendidikan, dan pengabdian
                            masyarakat. Fungsi utama laboratorium adalah:
                        </p>
                        
                        {/* Fungsi Cards Grid */}
                        <div className="row g-4 justify-content-center">
                            {functionsData.map((item, index) => (
                                <div className="col-sm-6 col-lg-3" key={index}>
                                    <div className="card h-100 shadow-sm border-0 p-3 text-center hover-scale">
                                        <div className="d-flex justify-content-center mb-3">
                                            <i className={`bi ${item.icon} ${item.color}`} style={{ fontSize: "2.5rem" }}></i>
                                        </div>
                                        <h5 className="fw-bold">{item.title}</h5>
                                        <p className="text-muted small">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Tambahkan garis horizontal untuk memisahkan section */}
                    <hr className="my-5" />

                    {/* Section: Kata Pengantar */}
                    {/* ... (Konten Kata Pengantar tetap sama) ... */}
                    <div className="mb-5">
                        <h2 className="fw-bold mb-4 text-center text-dark">
                            Kata <span className="text-danger">Pengantar</span>
                        </h2>
                        <div className="row g-4">
                            
                            {/* Card Koordinator Laboratorium */}
                            <div className="col-md-6">
                                <div className="card h-100 shadow border-0 p-4 bg-white hover-lift text-center">
                                    <img
                                        src={Koordinator}
                                        alt="Foto Koordinator Laboratorium"
                                        className="rounded-circle mx-auto mb-3 border border-4 border-danger"
                                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                                    />
                                    
                                    <h5 className="fw-bold text-danger mb-3">Koordinator Laboratorium</h5>
                                    <p className="text-muted flex-grow-1">
                                        “Kami berkomitmen untuk menjadikan Laboratorium Dinamika Pesisir
                                        dan Rekayasa Pantai sebagai pusat unggulan dalam penelitian
                                        dan inovasi yang dapat memberikan kontribusi nyata
                                        bagi masyarakat dan bangsa. Kolaborasi aktif antar peneliti,
                                        mahasiswa, dan mitra eksternal terus kami dorong.”
                                    </p>
                                    <p className="fw-bold mb-0">— Sandi Sufiandi (Koordinator)</p>
                                </div>
                            </div>

                            {/* Card Kepala Laboratorium */}
                            <div className="col-md-6">
                                <div className="card h-100 shadow border-0 p-4 bg-white hover-lift text-center">
                                    <img
                                        src={Kepala}
                                        alt="Foto Kepala Laboratorium"
                                        className="rounded-circle mx-auto mb-3 border border-4 border-danger"
                                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                                    />
                                    
                                    <h5 className="fw-bold text-danger mb-3">Kepala Laboratorium</h5>
                                    <p className="text-muted flex-grow-1">
                                        “Dengan fasilitas yang mutakhir, terutama kolam dan saluran gelombang,
                                        kami siap mendukung riset-riset mendalam terkait rekayasa pantai dan
                                        mitigasi bencana pesisir. Kami berusaha menciptakan lingkungan
                                        akademik yang kondusif untuk eksplorasi dan inovasi berkelanjutan.”
                                    </p>
                                    <p className="fw-bold mb-0">— Adnan Sandy Dwi M. (Kepala Lab)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-5" />
                    
                    {/* Section: Struktur Organisasi */}
                    <div className="mb-5 text-center">
                        <h2 className="fw-bold mb-3 text-dark">
                            Struktur <span className="text-danger">Organisasi</span>
                        </h2>
                        <p className="lead text-muted">
                            Struktur organisasi laboratorium dirancang untuk mendukung
                            kolaborasi yang efektif antara pimpinan, staf peneliti, teknisi, dan
                            mahasiswa.
                        </p>
                        <OrgChart /> 
                    </div>

                    <hr className="my-5" />

                    {/* SECTION BARU: LOKASI KAMI */}
                    <div className="mb-5 text-center">
                        <h2 className="fw-bold mb-3 text-dark">
                            Lokasi <span className="text-danger">Kami</span> 📍
                        </h2>
                        <p className="lead text-muted mb-4">
                            Kunjungi fasilitas laboratorium kami untuk memulai kolaborasi riset dan pengembangan Anda.
                        </p>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                {/* Peta atau iFrame Google Maps Placeholder */}
                                <div 
    className="rounded shadow overflow-hidden"
    style={{
        height: "auto",
        width: "100%",
        backgroundColor: "#f8f9fa",
    }}
>
    <img
        src={Peta}
        alt="Peta lokasi Laboratorium Dinamika Pesisir dan Rekayasa Pantai"
        className="img-fluid w-100"
        style={{
            borderRadius: "10px",
            objectFit: "cover",
            maxHeight: "500px",
        }}
    />
</div>

                                {/* Informasi Kontak Singkat */}
                                <div className="card shadow-sm border-0 mt-4 p-3">
                                    <p className="mb-1 fw-bold">Alamat:</p>
                                    <p className="text-muted small">Jl. Raya Laboratorium No. 1, Kota Inovasi, Kode Pos 55181</p>
                                    <p className="mb-1 fw-bold">Email:</p>
                                    <p className="text-muted small">contact@labdinamika.ac.id</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* AKHIR SECTION BARU */}

                    <hr className="my-5" />

                    {/* Tombol ke Home */}
                    <div className="text-center mt-5">
                        <Link to="/" className="btn btn-danger px-4 py-2 fw-bold shadow">
                            ⬅ Kembali ke Home
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
            {/* Custom CSS for hover effect, assuming it's not in Custom.css */}
            <style jsx>{`
                .hover-scale {
                    transition: transform 0.3s ease;
                }
                .hover-scale:hover {
                    transform: scale(1.03);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }
                .hover-lift {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hover-lift:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15) !important;
                }
            `}</style>
        </>
    );
};

export default About;