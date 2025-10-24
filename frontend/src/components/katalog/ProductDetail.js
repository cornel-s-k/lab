// src/components/katalog/ProductDetail.jsx
import React from 'react';

const ProductDetail = ({ product, onBack }) => {
  if (!product) return null; // Tidak menampilkan apa-apa jika tidak ada produk

  return (
    <div className="container my-5">
      <button onClick={onBack} className="btn btn-outline-secondary mb-4">
        &larr; Kembali ke Katalog
      </button>

      <div className="row">
        <div className="col-lg-12">
          <h2 className="fw-bold display-5 mb-4 text-red">{product.title}</h2>
          
          <div className="card shadow p-4">
            <img 
              src={product.image} 
              className="img-fluid rounded mb-4" 
              alt={product.title}
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
            
            <p className="lead">{product.fullDescription}</p>

            <hr />
            
            <h3 className="h4 mt-4">Detail Layanan:</h3>
            <ul className="list-group list-group-flush">
              {product.details.map((detail, index) => (
                <li key={index} className="list-group-item">
                  🔬 {detail}
                </li>
              ))}
            </ul>
            
            <a 
              href="tel:08119811589" 
              className="btn btn-lg custom-btn mt-5 w-100"
            >
              Konsultasi Layanan Ini
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;