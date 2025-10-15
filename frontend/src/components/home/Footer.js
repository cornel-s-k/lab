import React from "react";
import brinLogo from "../../assets/home/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaXing,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  // ✅ URL embed resmi dari Google Maps (BRIN Kawasan Yogyakarta Mlati)
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.235528652623!2d110.37140617591778!3d-7.7648288922543705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59ca5f6bfbed%3A0x18158c7c8b83feb9!2sBRIN%20Kawasan%20Yogyakarta%20Mlati!5e0!3m2!1sid!2sid!4v1759804357145!5m2!1sid!2sid";

  const address =
    "Jl. Grafika No.2, Sendowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284";

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5 border-top border-secondary">
      <div className="container">
        {/* Konten Footer Utama */}
        <div className="row mb-5">
          {/* 1. Logo, Kontak & Layanan Untuk */}
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

            <div className="mt-4">
              <h6 className="fw-bold text-uppercase mb-2">Layanan Untuk</h6>
              <ul className="list-unstyled small">
                <li>Pemerintah</li>
                <li>Industri</li>
                <li>Perguruan Tinggi</li>
                <li>Konsultan</li>
                <li>Masyarakat</li>
              </ul>
            </div>
          </div>

          {/* 2. Tautan Referensi */}
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
                <a href="tel:08119811589" className="nav-link footer-link">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Lokasi Fisik & Peta */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase mb-3">
              <FaMapMarkerAlt className="me-2" /> Lokasi Kami
            </h6>
            <p className="small mb-2">
              BRIN Kawasan Yogyakarta Mlati
              <br />
              {address}
            </p>

            {/* Embedded Map */}
            <div className="ratio ratio-16x9" style={{ maxHeight: "150px" }}>
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi BRIN Kawasan Yogyakarta Mlati"
                className="rounded"
              ></iframe>
            </div>
          </div>

          {/* 4. Informasi & Social Media */}
          <div className="col-md-3 mb-4">
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

            {/* Social Media Links */}
            <div className="mt-4">
              <h6 className="fw-bold text-uppercase mb-2">Ikuti Kami</h6>
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
        </div>

        {/* Garis pemisah */}
        <hr className="bg-secondary" />

        {/* Copyright */}
        <div className="text-center small">
          © {new Date().getFullYear()} BRIN — All Rights Reserved
        </div>
      </div>

      {/* ✅ CSS tambahan (tanpa jsx) */}
      <style>
        {`
          .footer-link {
            transition: all 0.3s ease;
            color: white;
            text-decoration: none;
          }
          .footer-link:hover {
            color: #f44336 !important;
            padding-left: 4px;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
