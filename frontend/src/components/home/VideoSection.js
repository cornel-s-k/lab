import React from "react";
import { FaPlayCircle } from "react-icons/fa"; // install dulu: npm install react-icons
import videoBg from "../../assets/home/profil.mp4";

const VideoSection = () => {
  return (
    <section className="video-section d-flex justify-content-center align-items-center py-5">
      <div
        className="video-frame shadow-lg rounded-4 bg-dark position-relative"
        style={{
          maxWidth: "1500px",
          border: "6px solid #222", // frame gelap biar kaya layar
        }}
      >
        {/* Label di atas video */}
        <div
          className="text-center py-2 fw-bold text-light"
          style={{
            background: "#222",
            borderBottom: "3px solid #444",
          }}
        >
          🎥 Video Profil
        </div>

        {/* Video */}
        <video
          className="video-background w-100 d-block"
          src={videoBg}
          poster="https://via.placeholder.com/800x400"
          autoPlay
          loop
          muted
          playsInline
        ></video>

      </div>
    </section>
  );
};

export default VideoSection;
