import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import fasilitas1 from "../../assets/home/fasil1.jpeg";
import wavemakerPoolImageLocal from "../../assets/fasilt/kolamgelombang.jpeg";
import wavemakerGlassImageLocal from "../../assets/fasilt/gelombangkaca.jpeg";
import wavemakerConcreteImageLocal from "../../assets/fasilt/gelombangbeton.jpeg";
import waveTypeImageLocal from "../../assets/fasilt/tipegelombang.jpeg";
import tsunamiImageLocal from "../../assets/fasilt/tsunami.JPG"; // ⬅️ tambahkan gambar tsunami simulator di folder ini

// --- Custom Color Definitions (Non-Vibrant / Muted Palette) ---
const CustomColors = {
  // Primary (used for accents, titles, links - replaced 'primary')
  gold: "#A6863C", // Muted Gold/Ochre
  // Secondary (used for warnings/alerts - replaced 'danger' for a deeper red)
  deepRed: "#8B0000", // Dark Red
  // Tertiary (used for highlights - keeping a dark tone)
  dark: "#343a40", // Very Dark Gray
  // Muted accent for icons/status
  slate: "#6c757d", // Muted Gray/Slate
};

const FasilitasDetail1 = () => {
  const wavemakerPoolImage = wavemakerPoolImageLocal;
  const wavemakerGlassImage = wavemakerGlassImageLocal;
  const wavemakerConcreteImage = wavemakerConcreteImageLocal;
  const waveTypeImage = waveTypeImageLocal;
  const tsunamiImage = tsunamiImageLocal;

  // Style for hover zoom effect
  const hoverZoomStyle = {
    transition: "transform 0.4s ease",
  };

  const hoverZoomOnHover = {
    transform: "scale(1.05)",
  };

  return (
    <>
      <section
        className="py-5 bg-light fasilitas-detail"
        style={{
          animation: "fadeInUp 0.8s ease",
        }}
      >
        <div className="container">
          {/* Judul */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bolder" style={{ color: CustomColors.dark }}>
              Laboratorium <span style={{ color: CustomColors.gold }}>Model Fisik</span>
            </h1>
            <p className="lead text-muted">
              Fasilitas Kolam & Saluran Gelombang beserta Spesifikasi *Wavemaker*
            </p>
            <div
              style={{
                height: "3px",
                width: "80px",
                backgroundColor: CustomColors.deepRed,
                margin: "0 auto",
                marginTop: "10px",
              }}
            ></div>
          </div>

          {/* Gambar Utama */}
          <div className="text-center mb-5">
            <img
              src={fasilitas1}
              alt="Laboratorium Model Fisik"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "400px", objectFit: "cover", width: "100%", ...hoverZoomStyle }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = hoverZoomOnHover.transform)
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
            />
          </div>

          <div className="row">
            {/* Daftar Fasilitas */}
            <div className="col-lg-12 mb-5">
              <h3 className="fw-bold mb-4" style={{ color: CustomColors.gold }}>
                <i className="bi bi-water me-2"></i>Fasilitas Utama
              </h3>
              <ul className="list-group list-group-flush shadow-sm rounded-4 border">
                {/* Changed text-success, text-info, text-warning icons to CustomColors.deepRed, CustomColors.gold, CustomColors.dark */}
                <li className="list-group-item d-flex align-items-center py-3 bg-white">
                  <i className="bi bi-bounding-box-circles me-3 fs-5" style={{ color: CustomColors.deepRed }}></i>
                  <span className="fw-medium">Kolam Gelombang</span> – 30 m × 55 m × 1.2 m
                </li>
                <li className="list-group-item d-flex align-items-center py-3 bg-white">
                  <i className="bi bi-border-width me-3 fs-5" style={{ color: CustomColors.gold }}></i>
                  <span className="fw-medium">Saluran Gelombang Kaca</span> – 1 m × 35 m × 1.5 m
                </li>
                <li className="list-group-item d-flex align-items-center py-3 bg-white">
                  <i className="bi bi-bricks me-3 fs-5" style={{ color: CustomColors.dark }}></i>
                  <span className="fw-medium">Saluran Gelombang Beton</span> – 2 m × 50 m × 1.6 m
                </li>
                 <li className="list-group-item d-flex align-items-center py-3 bg-white">
                  <i className="bi bi-bounding-box-circles me-3 fs-5" style={{ color: CustomColors.deepRed }}></i>
                  <span className="fw-medium">Saluran Tsunami dan Arus</span> – 2.5 m × 90 m × 2 m
                </li>
              </ul>
            </div>
          </div>

          {/* Spesifikasi Wavemaker - Kolam Gelombang */}
          <div className="row mb-5 align-items-center">
            {/* Order change for small screens: Image first, then text content for better flow if needed, but keeping current layout for large screens */}
            <div className="col-lg-7 col-12 order-lg-1 order-2">
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body">
                  <h3 className="card-title fw-bold mb-3" style={{ color: CustomColors.deepRed }}>
                    <i className="bi bi-columns-gap me-2"></i>Spesifikasi Wavemaker – Kolam Gelombang
                  </h3>
                  <ul className="list-unstyled">
                    {/* Icon colors adjusted */}
                    <li className="mb-2">
                      <i className="bi bi-gear-fill me-2" style={{ color: CustomColors.deepRed }}></i>
                      Tipe: Multi-element piston paddles with electric actuators
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-shield-check me-2" style={{ color: CustomColors.gold }}></i>
                      Fitur: Active wave absorption – mengurangi gelombang pantulan
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-stop-circle me-2" style={{ color: CustomColors.slate }}></i>
                      Peredam: Integral wave absorbing beach – mencegah *splashing*
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-arrows-fullscreen me-2" style={{ color: CustomColors.dark }}></i>
                      Dimensi: 30 m (W) × 55 m (L) × 1.2 m (H)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-droplet-fill me-2" style={{ color: CustomColors.gold }}></i>
                      Kedalaman Air Maks.: 0.6 m
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-clock-history me-2 text-muted"></i>
                      Periode Gelombang: 0.3 s – 5 s (0.2 – 2.5 Hz)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-rulers me-2" style={{ color: CustomColors.deepRed }}></i>
                      Ketinggian Gelombang: Hs: 0.19 m | Hmax: 0.36 m
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-compass-fill me-2" style={{ color: CustomColors.dark }}></i>
                      Arah Gelombang: Oblique wave ±45°
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 text-center mt-4 mt-lg-0 order-lg-2 order-1">
              <img
                src={wavemakerPoolImage}
                alt="Wavemaker Kolam Gelombang"
                className="img-fluid rounded-4 shadow-lg border border-4"
                style={{ maxHeight: "300px", objectFit: "cover", width: "100%", borderColor: CustomColors.deepRed }}
              />
              <p className="text-muted small mt-2">
                Visualisasi Wavemaker Kolam Gelombang
              </p>
            </div>
          </div>

          {/* Spesifikasi Wavemaker - Saluran Gelombang Kaca */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-5 col-12 text-center mb-4 mb-lg-0 order-lg-1 order-1">
              <img
                src={wavemakerGlassImage}
                alt="Wavemaker Saluran Kaca"
                className="img-fluid rounded-4 shadow-lg border border-4"
                style={{ maxHeight: "300px", objectFit: "cover", width: "100%", borderColor: CustomColors.gold }}
              />
              <p className="text-muted small mt-2">
                Visualisasi Wavemaker Saluran Gelombang Kaca
              </p>
            </div>
            <div className="col-lg-7 col-12 order-lg-2 order-2">
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body">
                  <h3 className="card-title fw-bold mb-3" style={{ color: CustomColors.gold }}>
                    <i className="bi bi-columns-gap me-2"></i>Spesifikasi Wavemaker – Saluran Gelombang Kaca
                  </h3>
                  <ul className="list-unstyled">
                    {/* Icon colors adjusted */}
                    <li className="mb-2">
                      <i className="bi bi-gear-fill me-2" style={{ color: CustomColors.gold }}></i>
                      Tipe: Piston paddles with single electric actuators
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-shield-check me-2" style={{ color: CustomColors.deepRed }}></i>
                      Fitur: Active wave absorption – mengurangi gelombang pantulan
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-stop-circle me-2" style={{ color: CustomColors.slate }}></i>
                      Peredam: Integral wave absorbing beach – mencegah *splashing*
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-arrows-fullscreen me-2" style={{ color: CustomColors.dark }}></i>
                      Dimensi: 1 m (W) × 36 m (L) × 1.5 m (H)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-droplet-fill me-2" style={{ color: CustomColors.deepRed }}></i>
                      Kedalaman Air Maks.: 0.8 m
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-clock-history me-2 text-muted"></i>
                      Periode Gelombang: 0.4 s – 5 s (0.2 – 2.5 Hz)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-rulers me-2" style={{ color: CustomColors.dark }}></i>
                      Ketinggian Gelombang: Hs: 0.24 m | Hmax: 0.48 m
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Spesifikasi Wavemaker - Saluran Gelombang Beton */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-12 order-lg-1 order-2">
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body">
                  <h3 className="card-title fw-bold mb-3" style={{ color: CustomColors.dark }}>
                    <i className="bi bi-columns-gap me-2"></i>Spesifikasi Wavemaker – Saluran Gelombang Beton
                  </h3>
                  <ul className="list-unstyled">
                    {/* Icon colors adjusted */}
                    <li className="mb-2">
                      <i className="bi bi-gear-fill me-2" style={{ color: CustomColors.dark }}></i>
                      Tipe: Piston paddles with dual electric actuators
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-shield-check me-2" style={{ color: CustomColors.deepRed }}></i>
                      Fitur: Active wave absorption – mengurangi gelombang pantulan
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-stop-circle me-2" style={{ color: CustomColors.slate }}></i>
                      Peredam: Integral wave absorbing beach – mencegah *splashing*
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-arrows-fullscreen me-2" style={{ color: CustomColors.gold }}></i>
                      Dimensi: 1.9 m (W) × 40 m (L) × 1.6 m (H)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-droplet-fill me-2" style={{ color: CustomColors.deepRed }}></i>
                      Kedalaman Air Maks.: 1.0 m
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-clock-history me-2 text-muted"></i>
                      Periode Gelombang: 0.4 s – 5 s (0.2 – 2.5 Hz)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-rulers me-2" style={{ color: CustomColors.dark }}></i>
                      Ketinggian Gelombang: Hs: 0.25 m | Hmax: 0.52 m
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 text-center mt-4 mt-lg-0 order-lg-2 order-1">
              <img
                src={wavemakerConcreteImage}
                alt="Wavemaker Saluran Beton"
                className="img-fluid rounded-4 shadow-lg border border-4"
                style={{ maxHeight: "300px", objectFit: "cover", width: "100%", borderColor: CustomColors.dark }}
              />
              <p className="text-muted small mt-2">
                Visualisasi Wavemaker Saluran Gelombang Beton
              </p>
            </div>
          </div>
          {/* === BAGIAN BARU: Fasilitas Tsunami Simulator === */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 col-12 order-lg-1 order-2">
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body">
                  <h3
                    className="card-title fw-bold mb-3"
                    style={{ color: CustomColors.deepRed }}
                  >
                    <i className="bi bi-tsunami me-2"></i>Fasilitas Tsunami Simulator
                  </h3>

                  <p className="text-muted mb-3">
                    Fasilitas ini dikembangkan oleh <b>HR Wallingford (UK)</b> untuk
                    mensimulasikan fenomena tsunami dalam skala laboratorium. Sistem ini
                    mampu mereplikasi peristiwa tsunami besar seperti <i>Tsunami Aceh 2004
                    (Boxing Day Tsunami)</i> dengan tingkat presisi tinggi.
                  </p>

                  <h5 className="fw-bold" style={{ color: CustomColors.gold }}>
                    Komponen Utama:
                  </h5>
                  <ul className="list-unstyled mb-3">
                    <li>
                      <i className="bi bi-box-seam me-2" style={{ color: CustomColors.gold }}></i>
                      Flume Tsunami
                    </li>
                    <li>
                      <i className="bi bi-cpu me-2" style={{ color: CustomColors.deepRed }}></i>
                      Sistem kontrol gelombang
                    </li>
                    <li>
                      <i className="bi bi-speedometer2 me-2" style={{ color: CustomColors.dark }}></i>
                      Instrumen pengukuran
                    </li>
                  </ul>

                  <h5 className="fw-bold" style={{ color: CustomColors.gold }}>
                    Spesifikasi Teknis:
                  </h5>
                  <ul className="list-unstyled">
                    <li>
                      <i className="bi bi-gear-fill me-2" style={{ color: CustomColors.deepRed }}></i>
                      Panjang saluran: ±96 m | Lebar: 2.5 m
                    </li>
                    <li>
                      <i className="bi bi-droplet-half me-2" style={{ color: CustomColors.gold }}></i>
                      Sistem tekanan air: <b>Pressure Tank</b>
                    </li>
                    <li>
                      <i className="bi bi-water me-2" style={{ color: CustomColors.dark }}></i>
                      Pompa vakum dengan katup kontrol otomatis
                    </li>
                    <li>
                      <i className="bi bi-rulers me-2" style={{ color: CustomColors.deepRed }}></i>
                      Skala model: 1 : 50
                    </li>
                    <li>
                      <i className="bi bi-activity me-2" style={{ color: CustomColors.gold }}></i>
                      Ketinggian gelombang hingga 20 cm
                    </li>
                    <li>
                      <i className="bi bi-speedometer me-2" style={{ color: CustomColors.dark }}></i>
                      Kecepatan aliran hingga 0.15 m/s
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-12 text-center mt-4 mt-lg-0 order-lg-2 order-1">
              <img
                src={tsunamiImage}
                alt="Tsunami Simulator"
                className="img-fluid rounded-4 shadow-lg border border-4"
                style={{
                  maxHeight: "320px",
                  objectFit: "cover",
                  width: "100%",
                  borderColor: CustomColors.deepRed,
                }}
              />
              <p className="text-muted small mt-2">Visualisasi Fasilitas Tsunami Simulator</p>
            </div>
          </div>

          {/* Tipe Gelombang */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-5 col-12 text-center mb-4 mb-lg-0 order-lg-1 order-1">
              <img
                src={waveTypeImage}
                alt="Tipe-Tipe Gelombang"
                className="img-fluid rounded-4 shadow-lg border border-4"
                style={{
                  maxHeight: "350px",
                  objectFit: "cover",
                  width: "100%",
                  borderColor: CustomColors.gold,
                }}
              />
              <p className="text-muted small mt-2">
                Ilustrasi Spektrum Tipe Gelombang
              </p>
            </div>
            <div className="col-lg-7 col-12 order-lg-2 order-2">
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body">
                  <h3
                    className="card-title fw-bold mb-3"
                    style={{ color: CustomColors.deepRed }}
                  >
                    <i className="bi bi-activity me-2"></i>Tipe Gelombang yang Dapat Dibangkitkan
                  </h3>
                  <p className="text-muted">
                    Kolam & Saluran Gelombang mampu membangkitkan berbagai tipe gelombang, termasuk:
                  </p>
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item fw-bold"
                      style={{ color: CustomColors.deepRed }}
                    >
                      1. Regular Waves
                    </li>
                    <li className="list-group-item">
                      <span
                        className="fw-bold"
                        style={{ color: CustomColors.deepRed }}
                      >
                        2. Irregular Waves (Spektrum Gelombang Populer):
                      </span>
                      <div className="row mt-2 px-3">
                        <div className="col-6">
                          <ul className="list-unstyled small">
                            <li>- Pierson–Moskowitz</li>
                            <li>- JONSWAP</li>
                            <li>- Derbyshire coastal</li>
                            <li>- Derbyshire ocean</li>
                            <li>- ITTC</li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className="list-unstyled small">
                            <li>- BTTP</li>
                            <li>- Neumann</li>
                            <li>- Top Hat (Pink Noise)</li>
                            <li>- Bretschneider</li>
                            <li>- TMA, & User Defined</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li
                      className="list-group-item fw-bold"
                      style={{ color: CustomColors.deepRed }}
                    >
                      3. Second Order Wave Generation
                    </li>
                    <li
                      className="list-group-item fw-bold"
                      style={{ color: CustomColors.deepRed }}
                    >
                      4. Solitary Waves
                    </li>
                    <li
                      className="list-group-item fw-bold"
                      style={{ color: CustomColors.deepRed }}
                    >
                      5. Oblique Regular Waves (Hanya Kolam Gelombang)
                    </li>
                    <li
                      className="list-group-item fw-bold"
                      style={{ color: CustomColors.deepRed }}
                    >
                      6. Oblique Irregular Waves (Hanya Kolam Gelombang)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol Balik */}
          <div className="text-center mt-5 pt-3">
            <Link
              to="/#fasilitas-section"
              className="btn px-5 py-3 fw-bold shadow-lg rounded-pill"
              style={{
                backgroundColor: CustomColors.gold,
                borderColor: CustomColors.gold,
                color: "white",
              }}
            >
              <i className="bi bi-arrow-left me-2"></i> Kembali ke Daftar Fasilitas
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default FasilitasDetail1;
