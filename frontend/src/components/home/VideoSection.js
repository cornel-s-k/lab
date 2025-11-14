import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FaPlayCircle } from "react-icons/fa"; // Tidak digunakan dalam desain akhir
import videoBg from "../../assets/home/profil.mp4"; // Import video lokal sebagai fallback

const VideoSection = () => {
    // State untuk menyimpan URL video (bisa dari API atau fallback)
    const [videoUrl, setVideoUrl] = useState(videoBg); // <-- DEFAULT KE VIDEO LOKAL
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL + "/api/page-links/video"; 

        const fetchVideoLink = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error("Failed to fetch video link from API.");
                }

                const data = await response.json();
                
                if (data.video_url) {
                    // Jika API mengembalikan URL video yang valid, gunakan itu
                    setVideoUrl(data.video_url);
                    setError(null);
                } else {
                    throw new Error("API returned no video URL.");
                }

            } catch (error) {
                // Jika fetch gagal (koneksi terputus/404) atau data tidak valid,
                // set videoUrl kembali ke nilai default (videoBg lokal)
                console.warn("Error fetching video data. Using local fallback.", error);
                setError("Gagal memuat video terbaru dari server. Menampilkan video profil standar.");
                setVideoUrl(videoBg); // Pastikan menggunakan video lokal
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideoLink();
    }, []);

    // Tampilkan loading saat fetch pertama kali
    if (isLoading) {
        return (
            <section className="video-section py-5 d-flex justify-content-center align-items-center">
                <div className="loading-box text-center">
                    <div className="spinner-border text-danger mb-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="text-secondary">Memuat video...</p>
                </div>
                <style jsx>{`
                    .loading-box { 
                        height: 420px; 
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        background: #f0f0f0;
                        border-radius: 20px;
                        max-width: 1000px;
                        margin: 0 auto;
                    }
                `}</style>
            </section>
        );
    }
    
    // Tentukan poster (thumbnail) untuk video
    const videoPoster = "https://via.placeholder.com/800x400/1e293b/fff?text=ELSA+Video+Profile"; 

    return (
        <section className="video-section py-5 d-flex justify-content-center align-items-center">
            <div className="container text-center">
                <h2 className="fw-bold mb-4 section-title">
                    {videoUrl === videoBg ? '🎥 Video Profil Standar' : '🎬 Video Terbaru'}
                </h2>
                
                {/* Tampilkan pesan error jika fallback digunakan */}
                {error && (
                    <div className="alert alert-warning text-center small mx-auto mb-4" 
                         style={{maxWidth: '800px'}} role="alert">
                        {error}
                    </div>
                )}
                
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div 
                            className="video-wrapper shadow-lg rounded-4 overflow-hidden"
                            style={{ maxWidth: "1500px", margin: "0 auto" }}
                        >
                            <div
                                className="text-center py-2 fw-bold text-light"
                                style={{
                                    background: "#222",
                                    borderBottom: "3px solid #444",
                                }}
                            >
                                {videoUrl === videoBg ? 'Profil Laboratorium' : 'Video dari Server'}
                            </div>

                            <video
                                width="100%"
                                height="auto"
                                // Hanya tampilkan controls jika video dari API
                                controls={videoUrl !== videoBg} 
                                // Opsi loop/autoplay hanya untuk video fallback lokal
                                autoPlay={videoUrl === videoBg} 
                                loop={videoUrl === videoBg}
                                muted={videoUrl === videoBg}
                                playsInline
                                poster={videoPoster}
                                className="video-player"
                            >
                                {/* Menggunakan videoUrl yang sudah disetel (baik lokal atau dari API) */}
                                <source src={videoUrl} type="video/mp4" />
                                Browser Anda tidak mendukung tag video.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .video-section {
                    background: linear-gradient(180deg, #fafafa 0%, #f0f0f0 100%);
                    padding: 80px 0;
                }
                .section-title {
                    color: #1a1a1a;
                    font-size: 2rem;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    position: relative;
                    display: inline-block;
                }
                .section-title::after {
                    content: "";
                    display: block;
                    width: 80px;
                    height: 4px;
                    background: #dc3545; /* merah bootstrap */
                    margin: 10px auto 0;
                    border-radius: 10px;
                }
                .video-wrapper {
                    background-color: #000;
                    border-radius: 20px;
                    overflow: hidden;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                }
                .video-wrapper:hover {
                    transform: scale(1.01);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
                }
                .video-player {
                    border: none;
                    outline: none;
                    display: block;
                }
                @media (max-width: 768px) {
                    .section-title {
                        font-size: 1.6rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default VideoSection;