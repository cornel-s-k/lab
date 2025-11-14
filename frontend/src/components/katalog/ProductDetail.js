// src/components/katalog/ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../home/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// 💡 IMPORT GAMBAR PLACEHOLDER LOKAL UNTUK DETAIL
import detailPlaceholderImageUrl from '../../assets/katalog/owc.JPG'; 
// Sesuaikan path import ini jika letak folder assets berbeda

const ProductDetail = () => {
  // Menggunakan 'slug' dari URL untuk mengambil detail produk
  const { slug } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) { 
      setError("Slug produk tidak ditemukan di URL.");
      setIsLoading(false);
      return;
    }

const fetchDetail = async () => {
  try {
    const API_URL = `${process.env.REACT_APP_API_URL}/api/products/${slug}`;
    const response = await fetch(API_URL);

    if (response.status === 404) {
      throw new Error("Produk tidak ditemukan.");
    }
    if (!response.ok) {
      throw new Error(`Gagal mengambil data. Status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    setProduct(jsonResponse.data);
  } catch (e) {
    setError(e.message);
    console.error("Gagal mengambil detail produk:", e);
  } finally {
    setIsLoading(false);
  }
};


    fetchDetail();
  }, [slug]); // Dependency array menggunakan 'slug'

  if (isLoading) {
    return (
      <div className="bg-white" style={{ paddingTop: "100px" }}>
        <div className="container py-5 text-center">
          <p className="fw-bold">Memuat Detail Produk...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="bg-white" style={{ paddingTop: "100px" }}>
        <div className="container py-5 text-center">
          <p className="text-danger fw-bold">{error || "Produk tidak ditemukan."}</p>
          <Link
            to="/katalog" // Link kembali ke halaman katalog
            className="btn btn-sm mt-3"
            style={{ backgroundColor: "#A8A196", color: "white" }}
          >
            Kembali ke Daftar Produk
          </Link>
        </div>
      </div>
    );
  }
  
  // 💡 HARDCODE IMAGE URL: Placeholder yang lebih besar untuk detail
  const detailPlaceholderImageUrl = 'https://via.placeholder.com/800x400?text=DETAIL+LAYANAN+ELSA';

  return (
    <div className="bg-white" style={{ paddingTop: "100px" }}>
      <div className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Link
              to="/katalog" 
              className="btn btn-sm mb-4"
              style={{ backgroundColor: "#A8A196", color: "white" }}
            >
              <i className="bi bi-arrow-left me-2"></i> Kembali ke Daftar Produk
            </Link>
<img
  // Menggunakan gambar hardcode, mengabaikan data dari product.image
  src={detailPlaceholderImageUrl} 
  alt={product.title}
  className="img-fluid rounded-top"
  style={{ objectFit: "cover", maxHeight: "400px", width: "100%" }}
/>

            <h1 className="fw-bold mb-4 text-dark">{product.title}</h1>

            <div className="card shadow-sm p-4 border-0 rounded-4 mb-5">
              <div className="card-body">
                {/* Asumsi konten utama produk adalah product.full_description (HTML dari Rich Editor) */}
                <div
                  className="product-content"
                  dangerouslySetInnerHTML={{ __html: product.full_description || '' }}
                />

                {/* --- BAGIAN BARU: TAUTAN BACA LEBIH LANJUT --- */}
                {product.read_more_link && (
                    <div className="mt-5 pt-3 border-top text-center">
                        <p className="lead fw-normal mb-3 text-secondary">
                            Tertarik untuk membaca detail lebih lanjut?
                        </p>
                        <a
                            href={product.read_more_link}
                            target="_blank" // Membuka di tab baru
                            rel="noopener noreferrer" // Praktik keamanan terbaik
                            className="btn btn-lg btn-primary shadow-lg"
                            style={{ backgroundColor: "#007BFF", borderColor: "#007BFF", color: "white" }}
                        >
                            <i className="bi bi-book me-2"></i> Baca Lebih Lanjut
                        </a>
                    </div>
                )}
               </div>
               </div>
             <div className="text-center">
               <Link
                to="/" 
               className="btn btn-lg"
                style={{ backgroundColor: "#A8A196", color: "white" }}
              >
                <i className="bi bi-arrow-left me-2"></i> Kembali ke Daftar Produk
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;