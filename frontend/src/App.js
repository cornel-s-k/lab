// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Halaman Utama
import Header from "./components/home/Header";
import Herosection from "./components/home/Herosection";
import HistoryTimeline from "./components/home/HistoryTimeline";
import Tugas from "./components/home/Tugas";
import ProductCatalog from "./components/home/Katalog";
import FasilitasSection from "./components/home/FasilitasSection";
import VideoSection from "./components/home/VideoSection";
import LayananSection from "./components/home/LayananSection";
import TestimoniSection from "./components/home/TestimoniSection";
import DashboardElsa from "./components/home/DashboardElsa";
import SDMLaboratorium from "./components/home/SDMLaboratorium";
import HKPSection from "./components/home/HKPSection";
import MitraKerjasama from "./components/home/MitraKerjasama";
import Footer from "./components/home/Footer";
import TimelineLayanan from "./components/home/TimelineLayanan";
// Halaman About
import About from "./components/about/about";

// Halaman Fasilitas Detail
import FasilitasDetail1 from "./components/fasilitas/FasilitasDetail1";
import FasilitasDetail2 from "./components/fasilitas/FasilitasDetail2";
import FasilitasDetail3 from "./components/fasilitas/FasilitasDetail3";
import HKPLMFDP from "./components/hkp/HKPLMFDP";
import HKPLSHIAS from "./components/hkp/HKPLSHIAS";
import HKPLMTADLP from "./components/hkp/HKPLMTADLP";
import FAQ from "./components/faq/FAQ";
import Timeline from "./components/timeline/timeline";
import SDM from "./components/SDM/sdm";

import BeritaList from './components/berita/BeritaList';    // Sesuaikan path jika berbeda
import BeritaDetail from './components/berita/BeritaDetail'; // Sesuaikan path jika berbeda
import ProductDetail from "./components/katalog/ProductDetail";

// 🔹 Halaman utama (HomePage)
function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <Header />
      <main>
        <Herosection />
        <HistoryTimeline />
        <Tugas />
        <ProductCatalog />
        <FasilitasSection />
        <VideoSection />
        <LayananSection />
        <TimelineLayanan />
        <DashboardElsa />
        <SDMLaboratorium />
        <HKPSection />
        <TestimoniSection />
        <MitraKerjasama />
      </main>
      <Footer />
    </div>
  );
}

// 🔹 Router utama (App)
function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman About */}
        <Route path="/about" element={<About />} />

        {/* halaman faq */}
        <Route path="/faq" element={<FAQ />} />

        <Route path="/timeline" element={<Timeline />} />

        <Route path="/sdm" element={<SDM />} />

        {/* Halaman Detail Fasilitas */}
        <Route path="/fasilitas/1" element={<FasilitasDetail1 />} />
        <Route path="/fasilitas/:slug" element={<FasilitasDetail2 />} />
        <Route path="/fasilitas/3" element={<FasilitasDetail3 />} />

        {/* Halaman Detail HKP */}
        <Route path="/hkp/HKPL-MFDP" element={<HKPLMFDP />} />
        <Route path="/hkp/HKPL-SHIAS" element={<HKPLSHIAS/>} />
        <Route path="/hkp/HKPL-MTADLP" element={< HKPLMTADLP />} />

        <Route path="/timeline" element={<Timeline />} />
         {/* 🎯 RUTE BARU UNTUK BERITA: */}
    <Route path="/berita" element={<BeritaList />} />          {/* Tampilan Daftar Berita */}
    <Route path="/berita/:id" element={<BeritaDetail />} /> 
    <Route path="/katalog/:slug" element={<ProductDetail />} />
   
      </Routes>
    </Router>
  );
}

export default App;