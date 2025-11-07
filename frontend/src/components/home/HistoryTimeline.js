import React, { useState, useEffect } from "react"; // Tambahkan useEffect di sini
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import "../../Custom.css"; // Import CSS custom

const HistoryTimeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const API_URL = 'http://localhost:8000/api/history'; 

  // HOOK useEffect UNTUK FETCH DATA
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          // Mapping data dari backend agar sesuai dengan format yang diharapkan frontend
          const formattedData = result.data.map(item => ({
            year: item.year,
            description: item.description,
            // Mengubah is_highlight (boolean dari DB) menjadi type ('highlight'/'normal')
            type: item.is_highlight ? 'highlight' : 'normal', 
          }));
          
          setTimelineData(formattedData); // Update state dengan data API
        }
        
      } catch (error) {
        console.error("Gagal mengambil data sejarah:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []); // Array kosong memastikan ini hanya berjalan saat komponen mounting

  // Reset index saat data timeline berubah (penting agar currentIndex tidak out of bounds)
  useEffect(() => {
      if (timelineData.length > 0) {
          setCurrentIndex(0);
      }
  }, [timelineData]);

  // Fungsi navigasi diubah agar bekerja dengan data dinamis (ditambahkan safety check)
  const handlePrev = () => {
    if (timelineData.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? timelineData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (timelineData.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === timelineData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = timelineData[currentIndex];

  //TAMPILAN LOADING
  if (loading) {
    return (
        <section className="timeline-section py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-5 sejarah-title">Sejarah</h2>
                <p className="text-center">Memuat data sejarah...</p>
            </div>
        </section>
    );
  }

  if (timelineData.length === 0) {
      return (
          <section className="timeline-section py-5">
              <div className="container">
                  <h2 className="text-center fw-bold mb-5 sejarah-title">Sejarah</h2>
                  <p className="text-center">Tidak ada data sejarah yang tersedia. Mohon masukkan data melalui panel Admin.</p>
              </div>
          </section>
      );
  }

  //TAMPILAN NORMAL
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