import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import fasilitas2 from "../../assets/home/fasil2.jpeg";
import layanan1 from "../../assets/fasilt/layanan1.jpeg";
import layanan2 from "../../assets/fasilt/layanan2.jpeg";
import layanan3 from "../../assets/fasilt/layanan3.jpeg";
import layanan4 from "../../assets/fasilt/layanan4.jpeg";
import layanan5 from "../../assets/fasilt/layanan5.jpeg";
import layanan6 from "../../assets/fasilt/layanan6.jpeg";
import layanan7 from "../../assets/fasilt/layanan7.jpeg";
// import layanan8 from "../../assets/fasilt/layanan8.jpeg";

const layananData = [
 {
    title: "Pemodelan Hidrodinamika dan Transpor Sedimen ",
    desc: "Kegiatan ini bertujuan untuk mengetahui perubahan pola arus laut (hidrodinamika) dan gerakan pasir (transport sedimen) akibat pembangunan Giant Seawall. Metode yang digunakan meliputi kompilasi data sekunder (TMD, Navy Chart, dll.) dan survei lapangan (batimetri, arus). Pemodelan dilakukan dengan paket **MIKE 21/Zero** (Spectral Wave dan Flow Model FM – Mud Transport) dengan skenario kondisi eksisting dan kondisi ultimate (termasuk **17 pulau reklamasi**). Kendala utama adalah kurangnya data detail desain Giant Seawall dan data **time series** debit sungai/kualitas air.",
    img: layanan1,
},
  {
    title: "Pemilihan Lokasi Floating Power Plant & Energi Laut",
    desc: "Simulasi kondisi oseanografi untuk menentukan lokasi optimal pembangkit listrik tenaga gelombang dan arus laut.",
    img: layanan2,
  },
  {
    title: "Pemodelan Dispersi Panas Dari PLTU",
    desc: "Pemodelan penyebaran panas dan polutan di laut akibat kegiatan industri atau tumpahan minyak untuk mitigasi dampak lingkungan.",
    img: layanan3,
  },
  {
    title: "Optimasi Pengendali Sedimen di Alur Pelabuhan",
    desc: "on progress, belum nyari",
    img: layanan4,
  },
  {
    title: "Pemodelan Banjir Rob ",
    desc: "Analisis risiko genangan pesisir akibat pasang tinggi  untuk perencanaan mitigasi bencana dan tata ruang wilayah pesisir.",
    img: layanan5,
  },
  {
    title: "Pemodelan Optimasi Pembuatan Terumbu Karang",
    desc: "Simulasi hidrodinamika untuk menentukan posisi ideal struktur buatan sebagai media restorasi terumbu karang alami.",
    img: layanan6,
  },
  {
    title: "Pemodelan Tumpahan Minyak",
    desc: "Analisis dan simulasi pola gerusan di sekitar bangunan air seperti jembatan, pelabuhan, atau tanggul untuk menjaga kestabilan struktur.",
    img: layanan7,
  },
  // {
  //   title: "Layanan Pengujian Laboratorium",
  //   desc: "Pelayanan pengujian eksperimental menggunakan kolam gelombang dan kanal hidrodinamika untuk validasi hasil pemodelan numerik.",
  //   img: layanan8,
  // },
];

const FasilitasDetail2 = () => {
  return (
    <>
      <section className="py-5 bg-white fasilitas-detail">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">
              Simulasi Hidro-Oseanografi &{" "}
              <span className="text-danger">Interaksi Air - Struktur</span>
            </h2>
            <p className="lead text-muted">
              Menggunakan software internasional dan open source untuk analisis
              interaksi air-struktur dan layanan pemodelan oseanografi terapan.
            </p>
          </div>

          {/* Bagian software yang digunakan */}
          <div className="row g-4 align-items-center mb-5">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={fasilitas2}
                alt="Simulasi Hidro-Oseanografi"
                className="img-fluid rounded shadow hover-zoom"
              />
            </div>
            <div className="col-md-6">
              <ul className="list-group shadow-sm rounded-4">
                <li className="list-group-item">💻 DHI Mike 21 – Hidro-oseanografi</li>
                <li className="list-group-item">💻 Flow 3D – Water-structure interaction</li>
                <li className="list-group-item">
                  💻 Plaxis – Geo Studio – SAP 2000 (analisis elemen hingga, struktur & geoteknik)
                </li>
                <li className="list-group-item">
                  💻 Open Source Software: OpenFOAM, Delft3D, Tsunami, dll
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-5" />

          {/* Daftar layanan pengujian */}
          <div className="mb-5 text-center">
            <h3 className="fw-bold text-dark mb-4">
              Layanan <span className="text-danger">Pengujian & Pemodelan</span>
            </h3>
            <div className="row g-4">
              {layananData.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card border-0 shadow h-100 hover-lift">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="card-img-top rounded-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <div className="card-body text-start">
                      <h5 className="fw-bold text-danger mb-2">{item.title}</h5>
                      <p className="text-muted small">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/#fasilitas-section" className="btn btn-danger px-4 py-2 fw-bold shadow">
              ⬅ Kembali
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .hover-zoom {
          transition: transform 0.4s ease;
        }
        .hover-zoom:hover {
          transform: scale(1.05);
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
        }
        .fasilitas-detail {
          animation: fadeInUp 0.8s ease;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default FasilitasDetail2;
