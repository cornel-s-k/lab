// SDM.js
import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, Sector
} from "recharts";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import "../../Custom.css";

// CSS file for custom styles
// Add this to your Custom.css file
/*
.section-title {
  color: #0d6efd;
  border-left: 5px solid #ffc107;
  padding-left: 10px;
  font-weight: 700;
}

.card-custom {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card-custom:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;
}

.animate__fadeIn {
  animation-duration: 1.5s;
}

.table-photo {
  border: 2px solid #ddd;
  padding: 2px;
}
*/

// Custom active shape for pie chart hover effect
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <text x={mx} y={my} textAnchor="middle" fill="#333" fontWeight="bold">
        {payload.name} ({value}) - {(percent * 100).toFixed(0)}%
      </text>
    </g>
  );
};

const SDM = () => {
  const [activeIndexLab, setActiveIndexLab] = useState(0);
  const [activeIndexSekolah, setActiveIndexSekolah] = useState(0);

  // Data for the charts
  const layananData = [
    { name: "Model Fisik Dinamika Pantai", value: 16 },
    { name: "Simulasi Hidro-oseanografi", value: 11 },
    { name: "Mekanika Tanah & Akuisisi Data Lapangan", value: 12 },
  ];

  const sdmLabData = [
    { name: "S3", value: 4 },
    { name: "S2", value: 11 },
    { name: "S1", value: 12 },
    { name: "D3", value: 7 },
    { name: "SLTA", value: 6 },
  ];

  const sekolahData = [
    { name: "S3", value: 2 },
    { name: "S2", value: 4 },
    { name: "S1", value: 3 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8A2BE2"];

  return (
    <>
      <div className="container py-5 animate__animated animate__fadeIn">
        <h2 className="fw-bold text-center mb-2 text-danger">
          Inovasi Dimulai dari Sini: Memperkenalkan Tim Unggul Kami
        </h2>
        <p className="text-center text-muted mb-5 lead">
          Tim Sumber Daya Manusia kami adalah aset terbesar. Dengan beragam keahlian dan dedikasi, mereka adalah kekuatan di balik setiap inovasi dan layanan yang kami berikan.
        </p>

      {/* Layanan Utama Section */}
<div className="mb-5 animate__animated animate__fadeInUp">
  <h4 className="fw-bold mb-3 section-title">
    Layanan Inti Kami: Menggerakkan Masa Depan
  </h4>
  <p className="text-muted">
    Dengan dukungan para ahli berpengalaman dan fasilitas berstandar tinggi, 
    kami berkomitmen memberikan layanan terbaik untuk mendukung riset, inovasi, 
    serta solusi praktis di bidang kelautan dan pesisir. 
    Setiap layanan dirancang untuk menjawab tantangan nyata sekaligus membuka 
    peluang baru dalam pengembangan ilmu pengetahuan maupun penerapannya.
  </p>
  <ol className="text-muted">
    <li>
      <strong>Uji Model Fisik Dinamika Pantai (UF)</strong> → <b>16 Ahli</b>  
      <br />
      Layanan ini berfokus pada pengujian perilaku gelombang, arus, dan proses 
      pantai melalui pendekatan model fisik. Hasil pengujian menjadi dasar 
      penting dalam perencanaan pembangunan pesisir yang aman, efisien, dan berkelanjutan.
    </li>
    <li className="mt-2">
      <strong>Simulasi Hidro-Oseanografi & Interaksi Air – Struktur (SHI)</strong> → <b>11 Ahli</b>  
      <br />
      Tim kami melakukan pemodelan numerik untuk memahami interaksi kompleks 
      antara air laut, struktur, serta ekosistem. Simulasi ini membantu meminimalkan risiko 
      serta mendukung desain infrastruktur maritim yang tangguh dan ramah lingkungan.
    </li>
    <li className="mt-2">
      <strong>Mekanika Tanah & Akuisisi Data Lapangan Pesisir (MAD)</strong> → <b>12 Ahli</b>  
      <br />
      Layanan ini mencakup pengujian tanah, investigasi geoteknik, hingga pengumpulan 
      data lapangan yang akurat. Informasi yang diperoleh menjadi landasan kuat 
      dalam pembangunan pesisir yang stabil, aman, dan berdaya guna.
    </li>
  </ol>
</div>

        {/* Chart Grid */}
        <div className="row g-4 mb-5 animate__animated animate__fadeInUp">
          {/* Bar Chart */}
          <div className="col-lg-6 col-12">
            <div className="card card-custom shadow border-0 p-3">
              <h5 className="fw-bold text-center mb-3">Jumlah Pengelola Laboratorium</h5>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={layananData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-20} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    animationDuration={1200}
                    animationBegin={300}
                  >
                    {layananData.map((entry, index) => (
                      <Cell
                        key={`bar-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart SDM */}
          <div className="col-lg-6 col-12">
            <div className="card card-custom shadow border-0 p-4">
              <h5 className="fw-bold text-center mb-3">Kualifikasi Pendidikan</h5>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    activeIndex={activeIndexLab}
                    activeShape={renderActiveShape}
                    data={sdmLabData}
                    cx="50%"
                    cy="50%"
                    outerRadius={140}
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveIndexLab(index)}
                    animationDuration={1200}
                  >
                    {sdmLabData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Donut Chart Sekolah */}
        <div className="row justify-content-center mb-5 animate__animated animate__fadeInUp">
          <div className="col-lg-6 col-12">
            <div className="card card-custom shadow border-0 p-4">
              <h5 className="fw-bold text-center mb-3">Peningkatan Kapasitas SDM(Tugas Belajar)</h5>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    activeIndex={activeIndexSekolah}
                    activeShape={renderActiveShape}
                    data={sekolahData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveIndexSekolah(index)}
                    animationDuration={1200}
                  >
                    {sekolahData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        

        {/* Back to Home Button */}
        <div className="text-center mt-5 animate__animated animate__fadeInUp">
          <Link to="/" className="btn btn-secondary btn-lg rounded-pill shadow-sm">
            <i className="bi bi-arrow-left me-2"></i> Kembali ke Beranda
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SDM;