import React, { useState, useEffect, useCallback } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, Sector
} from "recharts";
import Header from "../home/Header";
import Footer from "../home/Footer";

// Konfigurasi API (Ganti dengan URL backend Laravel Anda)
const API_URL = "http://localhost:8000/api/sdm"; // Pastikan port dan domain sesuai

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
  // 1. STATE UNTUK DATA DINAMIS DARI API
  const [layananData, setLayananData] = useState([]);
  const [sdmLabData, setSdmLabData] = useState([]);
  const [sekolahData, setSekolahData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // State untuk Recharts
  const [activeIndexLab, setActiveIndexLab] = useState(0);
  const [activeIndexSekolah, setActiveIndexSekolah] = useState(0);

  // Fungsi untuk mengambil data dari Laravel API
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Gagal mengambil data dari API SDM.");
      }
      const result = await response.json();
      
      // Data yang dikirim oleh SdmController sudah sesuai format Recharts!
      setLayananData(result.layananData);
      setSdmLabData(result.sdmLabData);
      setSekolahData(result.sekolahData);

    } catch (error) {
      console.error("Error fetching SDM data:", error);
      // Opsional: Set data default jika fetch gagal
      setLayananData([]); 
      setSdmLabData([]);
      setSekolahData([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 2. EFEK UNTUK MEMANGGIL FETCH DATA SAAT KOMPONEN DIMUAT
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8A2BE2"];

  // 3. TAMPILKAN LOADING ATAU ERROR
  if (isLoading) {
    return (
      <div className="container py-5 text-center">
        {/* Menggunakan Tailwind/Bootstrap spinner. Asumsi Bootstrap/Tailwind tersedia. */}
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-primary" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0">[Memuat...]</span>
        </div>
        <p className="mt-2">Memuat data statistik SDM...</p>
      </div>
    );
  }

  return (
    // Menggunakan data state di bawah ini
    <>
     <Header />
      <div className="container py-5 animate__animated animate__fadeIn">
        <h2 className="fw-bold text-center mb-2 text-danger">
          Inovasi Dimulai dari Sini: Memperkenalkan Tim Unggul Kami
        </h2>
        <p className="text-center text-muted mb-5 lead fs-5">
          Tim Sumber Daya Manusia kami adalah aset terbesar. Dengan beragam keahlian dan dedikasi, mereka adalah kekuatan di balik setiap inovasi dan layanan yang kami berikan.
        </p>

        {/* Layanan Utama Section */}
        <div className="mb-5 animate__animated animate__fadeInUp">
          <h4 className="fw-bold mb-3 section-title fs-4">
            Layanan Inti Kami: Menggerakkan Masa Depan
          </h4>
          <p className="text-muted fs-5">
            Dengan dukungan para ahli berpengalaman dan fasilitas berstandar tinggi,
            kami berkomitmen memberikan layanan terbaik untuk mendukung riset, inovasi,
            serta solusi praktis di bidang kelautan dan pesisir.
            Setiap layanan dirancang untuk menjawab tantangan nyata sekaligus membuka
            peluang baru dalam pengembangan ilmu pengetahuan maupun penerapannya.
          </p>
          <ol className="text-muted fs-5">
            {/* Menggunakan data dari state layananData */}
            {layananData.map((item, index) => (
                <li className={index > 0 ? "mt-2" : ""} key={item.name}>
                    <strong>{item.name}</strong> → <b>{item.value} Ahli</b>
                    <br />
                    <span className="fs-6">
                        {/* Deskripsi harus diambil dari sumber data jika ada, 
                        atau hardcoded seperti ini jika data API hanya berisi name/value */}
                        {item.name.includes("Model Fisik") && "Layanan ini berfokus pada pengujian perilaku gelombang, arus, dan proses pantai melalui pendekatan model fisik. Hasil pengujian menjadi dasar penting dalam perencanaan pembangunan pesisir yang aman, efisien, dan berkelanjutan."}
                        {item.name.includes("Simulasi") && "Tim kami melakukan pemodelan numerik untuk memahami interaksi kompleks antara air laut, struktur, serta ekosistem. Simulasi ini membantu meminimalkan risiko serta mendukung desain infrastruktur maritim yang tangguh dan ramah lingkungan."}
                        {item.name.includes("Mekanika Tanah") && "Layanan ini mencakup pengujian tanah, investigasi geoteknik, hingga pengumpulan data lapangan yang akurat. Informasi yang diperoleh menjadi landasan kuat dalam pembangunan pesisir yang stabil, aman, dan berdaya guna."}
                    </span>
                </li>
            ))}
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
        
        {/* Back to Home Button (Menggunakan button standar) */}
        <div className="text-center mt-5 animate__animated animate__fadeInUp">
          <button 
            onClick={() => window.location.href = '/'} // Menggunakan navigasi standar
            className="btn btn-secondary btn-lg rounded-pill shadow-sm"
          >
            {/* Mengganti i dengan SVG atau span untuk menghindari error font awesome jika tidak terinstal */}
            <span className="me-2">&larr;</span> Kembali ke Beranda
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SDM;
