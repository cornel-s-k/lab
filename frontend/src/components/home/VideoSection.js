import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoSection = () => {
    const [videoUrl, setVideoUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       const API_URL = process.env.REACT_APP_API_URL + "/api/page-links/video"; 

        const fetchVideoLink = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error("Failed to fetch video link");

                const data = await response.json();
                if (data.video_url) {
                    setVideoUrl(data.video_url);
                }
            } catch (error) {
                console.error("Error fetching video data from API:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideoLink();
    }, []);

    return (
        <section className="video-section py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-4 section-title">🎬 Video Terbaru</h2>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="video-wrapper shadow-lg rounded-4 overflow-hidden">
                            {isLoading ? (
                                <div className="loading-box">
                                    <div className="spinner-border text-danger mb-3" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="text-secondary">Memuat video...</p>
                                </div>
                            ) : videoUrl ? (
                                <video
                                    width="100%"
                                    height="auto"
                                    controls
                                    className="video-player"
                                >
                                    <source src={videoUrl} type="video/mp4" />
                                    Browser Anda tidak mendukung tag video.
                                </video>
                            ) : (
                                <div className="loading-box">
                                    <p className="text-danger fw-bold">
                                        Video tidak ditemukan di backend.
                                    </p>
                                </div>
                            )}
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

                .loading-box {
                    height: 420px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background: #111;
                    color: white;
                }

                .loading-box p {
                    font-size: 1rem;
                    margin-top: 10px;
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
