import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const HKPLSHIAS = () => {
  return (
    <div className="bg-white">
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3 text-secondary animate__animated animate__fadeInDown">
            Hak dan Kewajiban Pengguna Layanan
          </h1>
          <h2 className="fw-bold display-5 text-dark animate__animated animate__fadeIn">
            Simulasi Hidro-oseanografi & Interaksi Air - Struktur
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
                  <li className="list-group-item bg-transparent border-0 px-0">
                    <b>Memperoleh Layanan Sesuai Standar</b><br/>
                    Setiap pengguna berhak untuk menerima layanan yang kualitasnya sesuai dengan spesifikasi teknis dan standar mutu yang telah disepakati bersama.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0">
                    <b>Akses terhadap Informasi dan Fasilitas</b><br/>
                    Pengguna memiliki hak untuk:<br/>
                    - Mengakses data dari hasil simulasi melalui platform yang disediakan (RIN).<br/>
                    - Mendapatkan informasi terkini mengenai kemajuan (progres) proses simulasi.<br/>
                    - Menggunakan fasilitas simulasi untuk periode maksimal tiga minggu.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0">
                    <b>Jaminan Kerahasiaan Data</b><br/>
                    Penyedia layanan menjamin kerahasiaan seluruh data dan informasi milik pengguna yang diserahkan atau diperoleh selama proses layanan berlangsung.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0">
                    <b>Penyampaian Keluhan dan Umpan Balik</b><br/>
                    Pengguna berhak untuk menyampaikan keluhan, saran, ataupun masukan terkait kualitas layanan yang diterima guna perbaikan di masa mendatang.
                  </li>
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
                  <li className="list-group-item bg-transparent border-0 px-0">
                    <b>Menyediakan Data yang Akurat</b><br/>
                    Pengguna diwajibkan untuk menyerahkan data masukan (input) yang lengkap dan akurat untuk menunjang kelancaran dan validitas proses simulasi.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0">
                    <b>Mematuhi Prosedur dan Aturan Penggunaan</b><br/>
                    Pengguna wajib memahami dan mematuhi seluruh prosedur standar yang berlaku, dengan ketentuan sebagai berikut:<br/>
                    - Untuk menjaga pemerataan akses, satu kelompok riset tidak diizinkan memesan fasilitas yang sama secara berturut-turut.<br/>
                    - Namun, jika dua minggu sebelum jadwal tidak ada pemesan lain (fasilitas tidak digunakan), kelompok riset sebelumnya diperkenankan untuk kembali menggunakannya demi memaksimalkan pemanfaatan fasilitas.<br/>
                    - Perlu diketahui bahwa layanan berstatus Penerimaan Negara Bukan Pajak (PNBP) akan mendapatkan prioritas utama.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0">
                    <b>Melunasi Biaya Layanan Tepat Waktu</b><br/>
                    Pengguna berkewajiban untuk menyelesaikan seluruh pembayaran biaya layanan sesuai dengan jadwal dan nominal yang telah ditetapkan.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0">
                    <b>Pemanfaatan Hasil Layanan Secara Bertanggung Jawab</b><br/>
                    Pengguna bertanggung jawab penuh untuk menggunakan data dan hasil layanan hanya untuk tujuan yang telah disepakati dan dilarang menyalahgunakannya.
                  </li>
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

export default HKPLSHIAS;
