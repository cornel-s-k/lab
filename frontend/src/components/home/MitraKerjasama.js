import React, { useState, useEffect } from "react";
// Import ITK tidak lagi diperlukan jika semua data dari API
// import ITK from "../../assets/home/itk.jpg"; 

const MitraKerjasama = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL + "/api/partners"; 

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(API_URL); // Melakukan fetch ke API Laravel
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json(); // Mengubah response menjadi JSON
        
        if (result.success && result.data) {
          setPartners(result.data); // Menyimpan data mitra ke state
        }
        
      } catch (error) {
        console.error("Gagal mengambil data mitra kerjasama:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []); // useEffect hanya dijalankan sekali setelah render pertama

 //pesan memuat
  if (loading) {
      return (
          <section className="py-5 text-center bg-light">
              <div className="container">
                  <h2 className="fw-bold mb-4 text-dark">Mitra Kerjasama</h2>
                  <p>Memuat data...</p>
              </div>
          </section>
      );
  }

  if (partners.length === 0) {
      return (
          <section className="py-5 text-center bg-light">
              <div className="container">
                  <h2 className="fw-bold mb-4 text-dark">Mitra Kerjasama</h2>
                  <p>Tidak ada mitra kerjasama yang tersedia.</p>
              </div>
          </section>
      );
  }

  // Menggunakan data dari API untuk tampilan slider
  return (
    <section className="py-5 text-center bg-light">
      <style>{`
        .slider {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .slider-track {
          display: flex;
          /* Lebar slider track dihitung dua kali lipat dari jumlah mitra untuk efek loop */
          width: calc(200% * ${partners.length}); 
          
          /* >>> PERUBAHAN UTAMA DI SINI <<< */
          /* Durasi diubah menjadi 60s (lebih lambat) */
          /* 'linear' untuk kecepatan konstan */
          /* 'infinite' untuk pengulangan terus menerus (sudah ada) */
          animation: scroll 150s linear infinite; 
        }
        .slide {
          flex: 0 0 auto;
          width: 150px;
          margin: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .slide img {
          max-width: 100%;
          height: 80px; 
          width: auto; 
          object-fit: contain; 
          /* Transisi hover diperlambat */
          transition: transform 0.5s; 
        }
        .slide img:hover {
          transform: scale(1.2); /* Efek zoom diperbesar sedikit */
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Nilai -50% ini penting untuk looping mulus */
            transform: translateX(-50%); 
          }
        }
      `}</style>

      <div className="container">
        <h2 className="fw-bold mb-4 text-dark">Mitra Kerjasama</h2>
        <div className="slider">
          <div className="slider-track">
            {/* Gandakan array partners untuk efek slider tak terbatas */}
            {partners.concat(partners).map((partner, idx) => (
              <div className="slide" key={idx}>
                <img
                  src={partner.logo} // Menggunakan data 'logo' dari API
                  alt={partner.name}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MitraKerjasama;