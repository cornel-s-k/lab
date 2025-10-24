// src/components/katalog/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onSelect }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-red">{product.title}</h5>
          <p className="card-text flex-grow-1">{product.shortDescription}</p>
          <button 
            onClick={() => onSelect(product)} 
            className="btn btn-sm custom-btn mt-auto"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;