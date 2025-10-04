import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import "../../Custom.css"; // Import CSS custom

const timelineData = [
  {
    year: "1982",
    description:
      "Laboratorium Teknik Pantai (LTP) didirikan oleh Dirjen Perhubungan Laut",
    type: "highlight",
  },
  {
    year: "1987",
    description:
      "Di Era BJ Habibie LTP dialihkan ke BPPT menjadi Laboratorium Pengkajian Teknik Pantai (LPTP)",
    type: "normal",
  },
  {
    year: "2001",
    description:
      "SK Ka BPPT 170/Kp/KA/BPT/IV/2006, LTP berubah menjadi Balai Pengkajian Dinamika Pantai (BPDP)",
    type: "highlight",
  },
  {
    year: "2015",
    description:
      "Perka BPPT no 25 Tahun 2015 berubah menjadi Balai Teknologi Infrastruktur Pelabuhan dan Dinamika Pantai (BTIPDP)",
    type: "normal",
  },
  {
    year: "2022",
    description:
      "Transformasi reorganisasi ke BRIN berganti menjadi Laboratorium Pantai dan Dinamika Pantai (LPDP)",
    type: "highlight",
  },
];

const HistoryTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? timelineData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === timelineData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = timelineData[currentIndex];

  return (
    <section className="timeline-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 sejarah-title">Sejarah</h2>

        <div className="card-timeline-container position-relative d-flex align-items-center justify-content-center">
          <button
            className="card-nav-btn prev-btn"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div
            key={currentItem.year}
            className={`timeline-card p-4 rounded shadow ${
              currentItem.type === "highlight" ? "highlight-box" : "normal-box"
            }`}
          >
            <h5 className="fw-bold year-text mb-3">
            <FontAwesomeIcon icon={faFlag} className="me-2" style={{ color: "#8e1616" }} />
              {currentItem.year}
            </h5>
            <p className="mb-0">{currentItem.description}</p>
          </div>

          <button
            className="card-nav-btn next-btn"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Indicator dots */}
        <div className="timeline-indicators mt-4 d-flex justify-content-center">
          {timelineData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
