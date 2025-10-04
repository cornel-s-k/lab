import React from "react";
import ITK from "../../assets/home/itk.jpg";

const partners = [
  { logo: "https://integrasi.djpt.kkp.go.id/pud/assets/portal/img/material-logo-2021.png", name: "Mitra 1" },
  { logo: "https://www.sig.id/storage/downloads/logo-sig/sig-latar-putih.png", name: "Mitra 2" },
  { logo: "https://portal.dephub.go.id/themes/new2020/assets/images/logo-large.png", name: "Mitra 3" },
  { logo: "https://mm.feb.undip.ac.id/wp-content/uploads/2021/11/universitas-diponegoro-logo.png", name: "Mitra 4" },
  { logo: ITK, name: "Mitra 5" },
  { logo: "https://lpkm.psikologi.ugm.ac.id/wp-content/uploads/2016/05/cropped-logo-ugm.png", name: "Mitra 6" },
];

const MitraKerjasama = () => {
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
          width: calc(200%);
          animation: scroll 25s linear infinite;
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
          /* Set a fixed height and width to standardize the size */
          height: 80px; 
          width: auto; 
          object-fit: contain; /* Ensures the image fits within the bounds without stretching */
          transition: transform 0.3s;
        }
        .slide img:hover {
          transform: scale(1.1);
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="container">
        <h2 className="fw-bold mb-4 text-dark">Mitra Kerjasama</h2>
        <div className="slider">
          <div className="slider-track">
            {partners.concat(partners).map((partner, idx) => (
              <div className="slide" key={idx}>
                <img
                  src={partner.logo}
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