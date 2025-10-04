import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const HKPLMTADLP = () => {
  return (
    <div className="bg-white">
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3 text-secondary animate__animated animate__fadeInDown">
            Hak dan Kewajiban Pengguna Layanan
          </h1>
          <h2 className="fw-bold display-5 text-dark animate__animated animate__fadeIn">
            Mekanika Tanah dan Akuisisi Data Lapangan Pesisir
          </h2>
          <hr className="w-25 mx-auto border-2 my-4" />
        </div>

        <div className="row g-5">
          {/* Hak Pengguna */}
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <div className="card shadow-lg border-0 h-100 p-4 rounded-4">
              <div className="card-body">
                <h3 className="card-title fw-bold text-success mb-4">
                  Hak Pengguna Layanan
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent border-0 px-0"><b>Mendapatkan Layanan Sesuai Standar</b><br/>Pengguna berhak mendapatkan layanan sesuai dengan spesifikasi dan standar teknis yang telah disepakati, termasuk dalam hal analisis ukuran butiran, pengambilan sampel, dan pengukuran data.</li>
                  <li className="list-group-item bg-transparent border-0 px-0"><b>Akses Data dan Informasi</b><br/>Pengguna berhak menerima hasil data, laporan, dan dokumentasi dari setiap layanan yang digunakan, seperti hasil pengukuran batimetri, data GPS geodetik, atau pemetaan udara.</li>
                  <li className="list-group-item bg-transparent border-0 px-0"><b>Jaminan Kerahasiaan Data</b><br/>Pengguna berhak atas kerahasiaan semua data dan informasi yang diberikan atau diperoleh selama proses layanan.</li>
                  <li className="list-group-item bg-transparent border-0 px-0"><b>Pelayanan yang Profesional</b><br/>Pengguna berhak mendapatkan pelayanan yang profesional, transparan, dan tepat waktu dari penyedia layanan.</li>
                  <li className="list-group-item bg-transparent border-0 px-0"><b>Pengajuan Keluhan dan Umpan Balik</b><br/>Pengguna berhak menyampaikan keluhan, saran, atau umpan balik terkait kualitas layanan yang diterima.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kewajiban Pengguna */}
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <div className="card shadow-lg border-0 h-100 p-4 rounded-4">
              <div className="card-body">
                <h3 className="card-title fw-bold text-danger mb-4">
                  Kewajiban Pengguna Layanan
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent border-0 px-0"><b>Memberikan Informasi Akurat</b><br/>Pengguna wajib memberikan informasi yang lengkap dan akurat mengenai lokasi survei, tujuan proyek, dan kebutuhan spesifik lainnya agar layanan dapat dilaksanakan dengan tepat.</li>
                  <li className="list-group-item bg-transparent border-0 px-0"><b>Menyediakan Akses Lokasi</b><br/>Pengguna wajib memfasilitasi dan memastikan akses ke lokasi survei atau pengambilan sampel, baik untuk layanan survei topografi, hidrografi, maupun pengambilan sampel beton atau sedimen.</li>
                  <li className="list-group-item bg-transparent border-0 px-0"><b>Mematuhi Prosedur dan Aturan</b><br/>Pengguna wajib mematuhi semua prosedur, standar keselamatan, dan aturan yang ditetapkan oleh penyedia layanan, terutama saat berada di lapangan.</li>
                  <li className="list-group-item bg-transparent border-0 px-0"><b>Melakukan Pembayaran Tepat Waktu</b><br/>Pengguna wajib menyelesaikan pembayaran sesuai dengan kesepakatan dan jadwal yang telah ditetapkan.</li>
                  <li className="list-group-item bg-transparent border-0 px-0"><b>Menggunakan Hasil Layanan Sesuai Peruntukan</b><br/>Pengguna bertanggung jawab untuk menggunakan data dan hasil layanan sesuai dengan tujuan yang disepakati dan tidak menyalahgunakannya.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tombol Kembali ke Home */}
        <div className="text-center mt-5 animate__animated animate__fadeInUp">
          <Link to="/" className="btn btn-secondary btn-lg rounded-pill shadow-sm">
            <i className="bi bi-arrow-left me-2"></i> Kembali ke Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HKPLMTADLP;
