// src/components/ProductCatalog.jsx
import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from '../katalog/ProductCard';
import ProductDetail from '../katalog/ProductDetail';

// URL API Laravel Anda
const API_URL = 'http://localhost:8000/api'; 

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil data katalog
  const fetchCatalogData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error('Gagal mengambil data katalog');
      }
      const data = await response.json();
      setProducts(data.data);
    } catch (err) {
      console.error(err);
      setError('Terjadi kesalahan saat memuat data layanan.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatalogData();
  }, []); // Hanya dijalankan saat komponen pertama kali di-mount

  // Fungsi untuk menampilkan detail
  const handleSelectProduct = useCallback(async (product) => {
    // Ambil detail lengkap dari API show/{id}
    try {
      const response = await fetch(`${API_URL}/products/${product.id}`);
      if (!response.ok) {
        throw new Error('Gagal mengambil detail produk');
      }
      const detailData = await response.json();
      setSelectedProduct(detailData.data);
    } catch (err) {
      console.error(err);
      alert('Gagal memuat detail layanan. Coba lagi.');
    }
  }, []);

  // Fungsi untuk kembali ke katalog
  const handleBackToCatalog = () => {
    setSelectedProduct(null);
  };

  const isDetailView = selectedProduct !== null;

  // --- Style CSS (tetap sama seperti jawaban sebelumnya, tambahkan kembali di sini atau App.css) ---
  const customStyles = `
    .text-red { color: #8e1616; }
    .custom-btn { background-color: #8e1616; color: #ead196; border: none; padding: 0.5rem 1.5rem; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); }
    .custom-btn:hover { background-color: #730303; transform: translateY(-1px); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); }
  `;
  // -------------------------------------------------------------------------------------------------

  if (isLoading && !isDetailView) {
    return <div className="container py-5 text-center">Memuat data layanan...</div>;
  }

  if (error && !isDetailView) {
    return <div className="container py-5 text-center text-danger">{error}</div>;
  }

  return (
    <section className="product-catalog py-5">
      <style>{customStyles}</style>
      
      <div className="container">
        {isDetailView ? (
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackToCatalog} 
          />
        ) : (
          <>
            <h2 className="text-center fw-bold mb-5 display-5 text-red">
              Layanan Unggulan Kami 🌊
            </h2>
            <div className="row">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={handleSelectProduct}
                />
              ))}
            </div>
             {products.length === 0 && !isLoading && (
                <p className="text-center lead">Belum ada layanan yang ditambahkan.</p>
             )}
          </>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;