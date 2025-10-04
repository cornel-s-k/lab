import React from "react";
import "../../Custom.css";
import Header from "../home/Header";
import Footer from "../home/Footer";
import pimpinan from "../../assets/about/pimpinan.jpg";
import { Link } from "react-router-dom";
import OrgChart from "../about/OrgChart";

const About = () => {
  return (
    <>
      <Header />
      <section className="about-section py-5 bg-light">
        <div className="container">
          {/* Section: Tugas dan Fungsi */}
          <div className="mb-5 text-center">
            <h2 className="fw-bold mb-3 text-dark">
              Tugas dan <span className="text-danger">Fungsi</span>
            </h2>
            <p className="lead text-muted">
              Laboratorium Dinamika Pesisir dan Rekayasa Pantai memiliki peran
              penting dalam mendukung penelitian, pendidikan, dan pengabdian
              masyarakat. Fungsi utama laboratorium adalah:
            </p>
            <ul className="list-unstyled text-muted text-start d-inline-block">
              <li>✔ Memfasilitasi kegiatan terkait Dinamika Pesisir dan Rekayasa Pantai</li>
              <li>✔ Pengembangan riset & metodologi di bidang pesisir</li>
            </ul>
          </div>

          {/* Section: Kata Pengantar */}
          <div className="mb-5">
            <h2 className="fw-bold mb-4 text-center text-dark">
              Kata <span className="text-danger">Pengantar</span>
            </h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 shadow border-0 p-4 bg-white hover-lift">
                  <h5 className="fw-bold text-danger mb-3">Koordinator</h5>
                  <p className="text-muted">
                    “Kami berkomitmen untuk menjadikan Laboratorium Dinamika Pesisir
                    dan Rekayasa Pantai sebagai pusat unggulan dalam penelitian
                    dan inovasi yang dapat memberikan kontribusi nyata
                    bagi masyarakat dan bangsa.”
                  </p>
                  <p className="fw-bold mb-0">— Nama Kepala (Dummy)</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card h-100 shadow border-0 p-4 bg-white hover-lift">
                  <h5 className="fw-bold text-danger mb-3">Kepala Laboratorium</h5>
                  <p className="text-muted">
                    “Sebagai koordinator, kami mendorong kolaborasi aktif antar
                    peneliti, mahasiswa, dan mitra eksternal untuk menciptakan
                    solusi inovatif yang berkelanjutan di bidang kelautan
                    dan pesisir.”
                  </p>
                  <p className="fw-bold mb-0">— Nama Koordinator (Dummy)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Struktur Organisasi */}
          <div className="mb-5 text-center">
            <h2 className="fw-bold mb-3 text-dark">
              Struktur <span className="text-danger">Organisasi</span>
            </h2>
            <p className="lead text-muted">
              Struktur organisasi laboratorium dirancang untuk mendukung
              kolaborasi yang efektif antara pimpinan, staf peneliti, teknisi, dan
              mahasiswa.
            </p>
            <OrgChart />
          </div>

          {/* Section: Pimpinan */}
          <div className="text-center">
            <h2 className="fw-bold mb-3 text-dark">
              Pimpinan <span className="text-danger">Laboratorium</span>
            </h2>
            <p className="lead text-muted mb-4">
              Data pimpinan masih dalam perbaikan. Berikut adalah placeholder sementara.
            </p>
            <div className="row justify-content-center">
              {[
                { nama: "Sandi Sufiandi", jabatan: "Ketua Tim" },
                { nama: "Adnan Sandy Dwi M", jabatan: "Manager Dinamika Pesisir dan Rekayasa Pantai" },
              ].map((item, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card h-100 shadow border-0 hover-lift">
                    <img
                      src={pimpinan}
                      className="card-img-top"
                      alt={item.jabatan}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{item.nama}</h5>
                      <p className="card-text text-muted">{item.jabatan}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol ke Home */}
          <div className="text-center mt-5">
            <Link to="/" className="btn btn-danger px-4 py-2 fw-bold shadow">
              ⬅ Kembali ke Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
