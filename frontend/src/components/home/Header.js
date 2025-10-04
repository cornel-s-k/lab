// Header.js
import React from "react";
// Don't use 'Link' for the Fasilitas link
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../../assets/home/logo.png";
import "../../Custom.css";

const Header = () => {
  return (
    <header>
    {/* //  <header className="fixed-top">  */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} style={{ height: "80px" }} alt="Logo" />
          </Link>

          {/* Hamburger Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Tentang
                </Link>
              </li>
              <li className="nav-item">
                {/* Change this to an anchor tag for internal scrolling */}
                <a className="nav-link" href="/#fasilitas-section">
                  Fasilitas
                </a>
              </li>
              <li>
                <a className="nav-link" href="/#layanan-section">
                   Layanan
                 </a>
              </li>
                <a className="nav-link" href="/#hkp-section">
                  HKP
                </a>
              <li className="nav-item">
  <a
    className="nav-link"
    href="https://forms.gle/DEn7BPxiEmgkgnY29"
    target="_blank"
    rel="noopener noreferrer"
  >
    Survey
  </a>
</li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
              </li>
             <li className="nav-item ms-lg-3">
  <a
    href="tel:08119811589"
    className="btn rounded-pill text-white btn-custom-hover"
    style={{ backgroundColor: "#A8A196" }}
  >
    Hubungi Kami
  </a>
</li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;