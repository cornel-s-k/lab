import React, { useState, useEffect } from "react"; // Tambahkan useEffect
import Header from "../home/Header";
import Footer from "../home/Footer";
import { Link } from "react-router-dom";

// Data faqData hardcoded dihapus

const FAQ = () => {
  const [faqData, setFaqData] = useState([]); // State untuk menyimpan data FAQ dari API
  const [loading, setLoading] = useState(true);
  const API_URL = "http://localhost:8000/api/faq"; // Ganti dengan URL API Anda!

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success && result.data) {
          setFaqData(result.data);
        }
      } catch (error) {
        console.error("Gagal mengambil data FAQ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaq();
  }, []);

  // Tampilan Loading
  if (loading) {
    return (
        <div className="bg-white">
          <Header />
          <div className="container py-5 text-center mt-5 mb-5">
              <h1 className="fw-bold mb-3 text-secondary">FAQ</h1>
              <p className="lead text-muted">Memuat pertanyaan dan jawaban...</p>
          </div>
          <Footer />
        </div>
    );
  }

  // Tampilan ketika tidak ada data
  if (faqData.length === 0) {
    return (
        <div className="bg-white">
          <Header />
          <div className="container py-5 text-center mt-5 mb-5">
              <h1 className="fw-bold mb-3 text-secondary">FAQ</h1>
              <p className="lead text-danger">Tidak ada FAQ yang tersedia saat ini.</p>
          </div>
          <Footer />
        </div>
    );
  }


  return (
    <div className="bg-white">
      <Header />
      <div className="container py-5">
        <div className="text-center mb-5 mt-5">
          <h1 className="fw-bold mb-3 text-secondary animate__animated animate__fadeInDown">
            FAQ (Frequently Asked Questions)
          </h1>
          <p className="lead text-muted animate__animated animate__fadeIn">
            Jawaban atas pertanyaan yang sering diajukan mengenai layanan kami.
          </p>
          <hr className="w-25 mx-auto border-2 my-4" />
        </div>

        <div className="accordion" id="faqAccordion">
          {faqData.map((item, index) => (
            <div
              // Menggunakan item.id dari database sebagai key (Wajib ada)
              key={item.id} 
              className="accordion-item shadow-sm mb-3 faq-item animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="accordion-header" id={`heading${item.id}`}>
                <button
                  className="accordion-button collapsed fw-bold faq-button"
                  type="button"
                  data-bs-toggle="collapse"
                  // Menggunakan item.id dari database
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${item.id}`}
                >
                  {/* Menggunakan nama kolom dari database: pertanyaan */}
                  {item.pertanyaan} 
                </button>
              </h2>
              <div
                // Menggunakan item.id dari database
                id={`collapse${item.id}`} 
                className="accordion-collapse collapse"
                aria-labelledby={`heading${item.id}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted faq-answer">
                  {/* Menggunakan nama kolom dari database: jawaban */}
                  {item.jawaban}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      {/* Custom CSS untuk tampilan lebih menarik (tetap dipertahankan) */}
      <style jsx>{`
        .faq-item {
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .faq-button {
          background-color: #f8f9fa;
          color: #333;
          font-weight: 600;
          border-bottom: 1px solid #e0e0e0;
          transition: background-color 0.3s ease;
          padding: 1.25rem 1.5rem;
          border-radius: 12px;
          border-top: none;
          border-left: none;
          border-right: none;
        }

        .faq-button:not(.collapsed) {
          background-color: #8e1616;
          color: white;
        }

        .faq-button:focus {
          box-shadow: none;
        }

        .faq-answer {
          background-color: #fff;
          color: #555;
          font-size: 1rem;
          line-height: 1.6;
          padding: 1.5rem;
        }

        /* Ikon panah yang lebih stylish */
        .accordion-button::after {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236c757d'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0L8 4.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
          transition: transform 0.2s ease-in-out;
        }

        .accordion-button:not(.collapsed)::after {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0L8 4.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default FAQ;
