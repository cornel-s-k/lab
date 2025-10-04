import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const HKPLMFDP = () => {
  return (
    <div className="bg-white">
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3 text-secondary animate__animated animate__fadeInDown">
            Hak dan Kewajiban Pengguna Layanan
          </h1>
          <h2 className="fw-bold display-5 text-dark animate__animated animate__fadeIn">
            Model Fisik Dinamika Pantai
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
                  <li className="list-group-item bg-transparent border-0 px-0">- Akses data hasil pengujian melalui RIN.</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Mengetahui informasi atau update terkait progress pengujian.</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Hak akses ruangan untuk diskusi.<br/>*Saluran gelombang beton dan tsunami (Ruang diskusi Utara), saluran gelombang kaca dan kolam gelombang (Ruang diskusi Selatan Lt. 2).</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Melihat daftar penggunaan fasilitas (kapan terpakai dan kapan iddle).</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Apabila diperlukan dapat mendapatkan data tambahan dari data visual CCTV (dikomunikasikan lebih lanjut dengan pelaksana layanan sesuai dengan ketersediaan sumber daya).</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Dapat menggunakan fasilitas pengujian dengan durasi paling lama sebagai berikut :<br/>*Saluran gelombang dan tsunami : 3 bulan; Kolam gelombang : 4 bulan.</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Apabila dalam waktu H-2 pekan sebelum fasilitas pengujian selesai dipergunakan oleh pengguna layanan belum terdapat pengguna layanan lain yang memesan (fasilitas layanan iddle), maka pengguna layanan sebelumnya dapat menggunakan fasilitas pengujian yang sama kembali.</li>
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
                  <li className="list-group-item bg-transparent border-0 px-0">- Pengguna memahami standar pelayanan laboratorium sesuai dengan fasilitas/layanan pengujian yang akan digunakan.</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Model uji menjadi tanggung jawab pengguna layanan, baik itu terkait pembuatan model, modifikasi model, maupun instalasi dan pembongkaran model maupun perbaikan model apabila terjadi kerusakan.</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Pengguna layanan melakukan pembuatan model uji yang sesuai dengan kaidah pemodelan dengan berkoordinasi dengan pelaksana layanan.</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Pengguna layanan melakukan instalasi model uji pada fasilitas pengujian termasuk penggantian model apabila terdapat lebih dari satu model. *Untuk pemasangan sensor atau perlengkapan pengujian (CCTV, kamera) akan dilaksanakan oleh pelaksana laboratorium.</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Pengguna layanan menyediakan detail skenario pengujian pada saat mengajukan layanan untuk perhitungan nominal layanan dan menjadi kesepakatan pelaksanaan pengujian.</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Apabila terdapat dua atau lebih layanan yang direncanakan masuk dalam waktu yang sama, maka calon pengguna layanan melakukan antrian penggunaan fasilitas dengan urutan prioritas sebagai berikut : <br/>a. Model uji sudah jadi dan sudah sesuai dengan persyaratan laboratorium.<br/>b. Durasi pengujian (durasi tercepat akan lebih diprioritaskan).<br/>c. Apabila model uji belum siap, bersedia untuk ttd surat pernyataan bahwa model akan siap H-2 pekan sebelum jadwal pengujian.</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Pengguna layanan menyiapkan media penyimpanan untuk backup data hasil pengujian (hardisk).</li>
                  <li className="list-group-item bg-transparent border-0 px-0">- Pengguna layanan mengambil kembali model uji setelah selesai dilakukan pengujian. Laboratorium tidak bertanggung jawab atas penyimpanan model yang telah selesai diuji.</li>
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

export default HKPLMFDP;
