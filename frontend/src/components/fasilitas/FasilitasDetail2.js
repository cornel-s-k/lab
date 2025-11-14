import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../home/Footer";
import axios from "axios";

// Terima data sebagai props dari FacilityRouter
// Kita TIDAK perlu lagi melakukan fetching di sini
const FasilitasDetail2 = ({ initialFacility, initialDetail }) => {
  // Gunakan data yang sudah di-fetch oleh FacilityRouter
  const facility = initialFacility;
  const detail = initialDetail;
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const baseUrl = `${API_BASE_URL}/storage/`;

  // Karena data sudah diverifikasi dan ada (melalui FacilityRouter), 
  // kita bisa langsung mengambil properti.

  // Data dari Facility
  const { title: facilityTitle } = facility;

  // Data dari FacilityDetail2
  // Catatan: Anda perlu memastikan tabel facility_detail2s di backend memiliki kolom 'title' 
  // atau tambahkan 'title' sebagai fallback jika Anda ingin membagi judul.
  const {
    title: detailTitle = facilityTitle, // Fallback ke title Fasilitas utama
    lead_text: description, 
    main_image: image,    
    service_items: services, 
    software_list // Ini data software-nya
  } = detail;
  
  // Logic untuk membagi title (misal: 'Simulasi Hidro-Oseanografi & Pemodelan Lingkungan')
  const titleToSplit = detailTitle || facilityTitle;
  const titleParts = titleToSplit.split("&");
  const headerTitle = titleParts[0].trim();
  const headerSpan = titleParts[1] ? titleParts[1].trim() : "";


  // Periksa apakah data utama yang diperlukan benar-benar ada (pengamanan ekstra)
  if (!detail || !services || !image) {
    return (
      <div className="container py-5 text-center text-danger">
        <p>Gagal memproses data detail FacilityDetail2.</p>
        <Link to="/#fasilitas-section" className="btn btn-outline-danger">
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="py-5 bg-white fasilitas-detail">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">
              {headerTitle}{" "}
              <span className="text-danger">{headerSpan}</span>
            </h2>
            <p className="lead text-muted">{description}</p>
          </div>

          {/* Gambar utama & software */}
          <div className="row g-4 align-items-center mb-5">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={`${baseUrl}${image}`}
                alt={detailTitle}
                className="img-fluid rounded shadow hover-zoom"
                onError={(e) => {
                  e.target.src = "/fallback-image.jpg"; // fallback jika gambar error
                }}
              />
            </div>
            <div className="col-md-6">
    <ul className="list-group shadow-sm rounded-4">
        {/* Mapping Software List */}
        {Array.isArray(software_list) && software_list.map((item, index) => (
            // ✅ Asumsi software_list juga Array of Objects dengan key 'name' (atau 'item', sesuaikan!)
            <li className="list-group-item" key={index}>{item.name || item.item || item}</li>
        ))}
    </ul>
</div>
          </div>

          <hr className="my-5" />

          {/* Layanan */}
          <div className="mb-5 text-center">
            <h3 className="fw-bold text-dark mb-4">
              Layanan <span className="text-danger">Pengujian & Pemodelan</span>
            </h3>
            <div className="row g-4">
              {/* Mapping Service Items */}
              {Array.isArray(services) && services.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card border-0 shadow h-100 hover-lift">
                    <img
                      src={`${baseUrl}${item.image}`}
                      alt={item.title}
                      className="card-img-top rounded-top"
                      style={{ height: "250px", objectFit: "cover" }}
                      onError={(e) => {
                        e.target.src = "/placeholder.jpg";
                      }}
                    />
                    <div className="card-body text-start">
                      <h5 className="fw-bold text-danger mb-2">{item.title}</h5>
                      <p className="text-muted small">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/#fasilitas-section" className="btn btn-danger px-4 py-2 fw-bold shadow">
              Kembali
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