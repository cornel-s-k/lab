import React from "react";
import brinLogo from "../../assets/home/logo.png";
import { FaFacebookF, FaInstagram, FaXing, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5 border-top border-secondary">
      <div className="container">
        {/* Konten Footer Utama */}
        <div className="row mb-5">
          {/* Logo & Kontak */}
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src={brinLogo}
                alt="BRIN Logo"
                className="footer-logo me-2"
                style={{ height: "50px" }}
              />
            </div>
            <p className="mb-1">labpantai@brin.go.id</p>
            <p className="mb-3">08119811589</p>
            <div>
              <a
                href="#"
                className="btn btn-outline-light btn-sm me-2 rounded-circle"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="btn btn-outline-light btn-sm me-2 rounded-circle"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="btn btn-outline-light btn-sm me-2 rounded-circle"
              >
                <FaXing />
              </a>
              <a
                href="#"
                className="btn btn-outline-light btn-sm rounded-circle"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Tautan Referensi */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase">Tautan Referensi</h6>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link footer-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link footer-link" to="/about">
                  Tentang
                </Link>
              </li>
              <li>
                <a className="nav-link footer-link" href="/#fasilitas-section">
                  Fasilitas
                </a>
              </li>
              <li>
                <Link className="nav-link footer-link" to="/#layanan-section">
                  Layanan
                </Link>
              </li>
              <li>
                <a
                 href="tel:08119811589"
                className="nav-link footer-link"
                 >
                   Kontak
                 </a>
              </li>
            </ul>
          </div>

          {/* Layanan Untuk */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold text-uppercase">Layanan Untuk</h6>
            <ul className="list-unstyled">
              <li>Pelajar</li>
              <li>Mahasiswa</li>
              <li>Sekolah</li>
              <li>Universitas</li>
            </ul>
          </div>

          {/* Informasi */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-uppercase">Informasi</h6>
            <ul className="list-unstyled">
              <li>
                <Link className="nav-link footer-link" to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <a className="nav-link footer-link" href="/#hkp-section">
                  HKP
                </a>
              </li>
              <li>
                <a
                  href="https://elsa.brin.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link footer-link"
                >
                  Info Detail
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis pemisah */}
        <hr className="bg-secondary" />

        {/* Copyright */}
        <div className="text-center small">
          © {new Date().getFullYear()} BRIN — All Rights Reserved
        </div>
      </div>

      {/* Extra CSS */}
      <style jsx>{`
        .footer-link {
          transition: all 0.3s ease;
          color: white; /* Ensure base color is white */
          text-decoration: none; /* Remove default underline */
        }
        .footer-link:hover {
          color: #f44336 !important; /* merah saat hover */
          padding-left: 4px;
        }
      `}</style>
    </footer>
  );
}

export default Footer;