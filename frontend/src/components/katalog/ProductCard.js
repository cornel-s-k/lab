// src/components/katalog/ProductCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// 💡 IMPORT GAMBAR PLACEHOLDER LOKAL
import placeholderImageUrl from '../../assets/katalog/owc.JPG'; 
// Sesuaikan path import ini jika letak folder assets berbeda

const ProductCard = ({ product }) => { 
  
  if (!product) {
      return null; 
  }

  // Hapus hardcode URL eksternal, kita gunakan yang diimpor
  // const placeholderImageUrl = 'https://via.placeholder.com/400x250?text=ELSA+Layanan';

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex">
      <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden w-100">
        <img
          // Menggunakan gambar yang diimpor dari folder assets
          src={placeholderImageUrl} 
          className="card-img-top"
          alt={product.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column p-4">
          <h5 className="card-title fw-bold text-dark mb-2">{product.title}</h5> 
          
          <p className="card-text text-muted small flex-grow-1 mb-3">
             {product.shortDescription}
          </p>
          
          <Link 
            to={`/katalog/${product.slug}`} 
            className="btn btn-sm mt-auto shadow-sm"
            style={{ backgroundColor: "#dc3545", color: "white" }} 
          >
            Lihat Detail <i className="bi bi-arrow-right-short"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;