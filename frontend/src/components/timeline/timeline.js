import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "../../Custom.css"; // Pastikan file ini ada!

// Fungsi untuk parsing data CSV (TETAP SAMA)
const parseSheetData = (csvData) => {
  const lines = csvData.trim().split('\n');
  let headers = [];
  let rows = [];
  let startParsing = false;

  lines.forEach(line => {
    const values = line.split(',').map(v => v.trim());
    
    // Cek jika baris adalah header tabel (asumsi header selalu dimulai dengan "FASILITAS")
    if (values[0] && values[0].toUpperCase() === "FASILITAS") {
      headers = values.filter(h => h.trim() !== "");
      startParsing = true;
      return;
    }

    // Memproses baris data setelah header ditemukan
    if (startParsing && values[0] && values[0] !== 'ELSA ID') {
      const rowData = {};
      
      for (let i = 0; i < headers.length; i++) {
        const headerKey = headers[i];
        const value = values[i] || "";
        rowData[headerKey] = value;
      }
      rows.push(rowData);
    }
  });

  return { headers, rows };
};

const Timeline = () => {
  const [allSheetsData, setAllSheetsData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          { 
            url: "https://docs.google.com/spreadsheets/d/1Qd48JRtXwDLpVOslqf8CeCOliZ5XllxA5m0bdt8kCK8/export?format=csv&gid=0", 
            title: "Timeline Proyek 1 - Inisiasi" 
          },
          { 
            url: "https://docs.google.com/spreadsheets/d/1Qd48JRtXwDLpVOslqf8CeCOliZ5XllxA5m0bdt8kCK8/export?format=csv&gid=1706173216", 
            title: "Timeline Proyek 2 - Eksekusi" 
          }, 
          { 
            url: "https://docs.google.com/spreadsheets/d/1Qd48JRtXwDLpVOslqf8CeCOliZ5XllxA5m0bdt8kCK8/export?format=csv&gid=107033274", 
            title: "Timeline Proyek 3 - Integrasi" 
          }
        ];

        const fetchPromises = urls.map(item => axios.get(item.url));
        const allResponses = await Promise.all(fetchPromises);
        
        const aggregatedData = allResponses.map((response, index) => {
          const { headers, rows } = parseSheetData(response.data);
          
          return {
            title: urls[index].title,
            headers: headers,
            data: rows
          };
        });

        setAllSheetsData(aggregatedData);
        
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Gagal memuat data. Silakan coba lagi. Cek koneksi internet Anda.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="container text-center py-5">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Memuat data...</p>
    </div>;
  }
  if (error) {
    return <div className="container alert alert-danger text-center py-3">{error}</div>;
  }

  return (
    <div className="container py-5 timeline-page-bg">
      {/* Judul Utama */}
      <h1 className="display-5 text-center mb-5 text-primary fw-bold">
          <i className="bi bi-calendar-check-fill me-2"></i> Jadwal Proyek Terintegrasi
      </h1>
      
      {/* Loop Data Sheet */}
      {allSheetsData.map((sheet, sheetIndex) => (
        <div key={sheetIndex} className="sheet-table-section mb-5 p-3 p-md-4 bg-light rounded shadow-sm">
          {/* Judul Sheet */}
          <h2 className="text-left mb-4 text-secondary border-bottom border-primary pb-2">
              {sheet.title}
          </h2>

          {/* Table Responsive untuk Mobile */}
          <div className="table-responsive timeline-table-container">
            <table className="table table-striped table-hover table-bordered timeline-table">
              {/* Header */}
              <thead className="table-primary">
                <tr>
                  {sheet.headers.map((header, index) => (
                    <th key={index} className={header.toUpperCase() === "FASILITAS" ? "fasilitas-header" : "text-center"}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              {/* Body */}
              <tbody>
                {sheet.data.length > 0 ? (
                  sheet.data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {sheet.headers.map((header, colIndex) => (
                        <td 
                          key={colIndex} 
                          className={header.toUpperCase() === "FASILITAS" ? "fasilitas-cell fw-bold text-dark" : "timeline-cell"}
                          data-label={header} // Data-label untuk tampilan mobile
                        >
                          {row[header] || ''}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={sheet.headers.length} className="text-center text-muted">
                        Tidak ada data timeline untuk ditampilkan pada proyek ini.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      
      {/* Tombol Kembali */}
      <div className="text-center mt-5">
        <Link to="/" className="btn btn-primary btn-lg shadow-lg">
            <i className="bi bi-house-door-fill me-2"></i> Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default Timeline;