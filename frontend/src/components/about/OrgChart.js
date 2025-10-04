// src/components/about/OrgChart.js
import React, { useEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";
import "./OrgChart.css";

const OrgChartComponent = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const data = [
        // Root
        { id: 1, name: "Deputi Bidang Infrastruktur Riset dan Inovasi" },

        // Level 2
        { id: 2, pid: 1, name: "Direktur Pengelola Laboratorium, Fasilitas Riset, dan Kawasan Sains dan Teknologi" },

        // Level 3
        { id: 3, pid: 2, name: "KETUA TIM", title: "Sandi Sufiandi" },

        // Managers
        { id: 4, pid: 3, name: "ANIS KURNIATI", title: "Manager Umum" },
        { id: 5, pid: 3, name: "M. TAUFIQ", title: "Manager Aerodinamika, Aeroelastik & Aeroakustika" },
        { id: 6, pid: 3, name: "ARIFIN RASYIDI S", title: "Manager Aeronautika" },
        { id: 7, pid: 3, name: "FARIZ MAULANA", title: "Manager Dinamika Fluida Maritim & Rekayasa Lepas Pantai" },
        { id: 8, pid: 3, name: "ADNAN SANDY DWI", title: "Manager Dinamika Pesisir & Rekayasa Pantai" },
        { id: 9, pid: 3, name: "ANTONIUS APRIYANTO", title: "Manager Fasilitas Pengujian Roket Tarogong" },
        { id: 10, pid: 3, name: "YUDI HARYANTO", title: "Manager Fasilitas Peluncuran Roket Pameungpeuk" },

        // Pelaksana ANIS
        { id: 11, pid: 4, name: "Putri Virliani", title: "PIC Mutu & Manajemen Risiko (23 orang)" },
        { id: 12, pid: 4, name: "Bondani Fiqri R", title: "PIC Alat Limbah (14 orang)" },
        { id: 13, pid: 4, name: "Cornelius Nababan", title: "PIC BMN (21 orang)" },

        // Pelaksana TAUFIQ
        { id: 14, pid: 5, name: "F. Andre Yohaness", title: "Penyelia Karakteristik Aerodinamika (2 orang)" },
        { id: 15, pid: 5, name: "Muhamad Muflih", title: "Penyelia Instrumen & Sistem Ukur (2 orang)" },
        { id: 16, pid: 5, name: "Alief Saputra Kasman", title: "Penyelia Desain & Pembuatan Model (5 orang)" },
        { id: 17, pid: 5, name: "Raden Wibawa Purabaya", title: "Penyelia Simulasi Aerodinamika (3 orang)" },
        { id: 18, pid: 5, name: "Malinda Sabrina", title: "Penyelia Aeroelastik & Akustik (3 orang)" },

        // Pelaksana ARIFIN
        { id: 19, pid: 6, name: "Anes Septiyana", title: "Penyelia Aeromaterial Subsonik-Supersonik (2 orang)" },
        { id: 20, pid: 6, name: "Nataniel Murjono, Kosid Abdurrohman, Arvandi Marta", title: "Penyelia Struktur & Material Aeronautika (4 orang)" },
        { id: 21, pid: 6, name: "Yaya Sunarya, Mukhni, Sugeng Dwi Wijaya, Mikhail Quirino", title: "Penyelia Material Uji Terowongan Uji & ULA (3 orang)" },

        // Pelaksana FARIZ
        { id: 22, pid: 7, name: "Sumarsono", title: "Penyelia Seakeeping & Ship Model Manufacture (14 orang)" },
        { id: 23, pid: 7, name: "Murniadi Sabrowibowo", title: "Penyelia Propulsi & Mechanical Manufacture & Towing (6 orang)" },
        { id: 24, pid: 7, name: "Mohammad Nasir", title: "Penyelia Eksperimen Basin & CFD (9 orang)" },
        { id: 25, pid: 7, name: "M. Zufar", title: "Penyelia Eksperimen Basin & CFD (10 orang)" },
        { id: 26, pid: 7, name: "Baharrudin Ali", title: "Penyelia Hidroakustik (10 orang)" },

        // Pelaksana ADNAN
        { id: 27, pid: 8, name: "Dinar Catur Istiyanto", title: "Penyelia Hidrolik Pantai (14 orang)" },
        { id: 28, pid: 8, name: "Algas Wibowo, Ristiyanto Adiputra", title: "Penyelia Struktur Hidrolik & Dinamika Pesisir (9 orang)" },
        { id: 29, pid: 8, name: "Ferran Setya Nugroho, Irma Ayu Syahada", title: "Penyelia Akustik Pesisir (10 orang)" },

        // Pelaksana ANTONIUS
        { id: 30, pid: 9, name: "Pelaksana", title: "7 orang" },

        // Pelaksana YUDI
        { id: 31, pid: 10, name: "Pelaksana", title: "3 orang" },
      ];

      const chart = new OrgChart()
        .container(d3Container.current)
        .data(data)
        .parentNodeId(d => d.pid)
        .nodeWidth(() => 260)
        .nodeHeight(() => 120)
        .childrenMargin(() => 50)
        .compact(false)
        .nodeContent((d) => {
          return `
            <div style="padding:10px;border-radius:10px;background:#1e3a8a;color:white;height:100%;width:100%;box-shadow:0 3px 6px rgba(0,0,0,0.3)">
              <div style="font-weight:bold;font-size:14px">${d.data.name}</div>
              <div style="font-size:12px;margin-top:5px">${d.data.title || ""}</div>
            </div>
          `;
        })
        .render();
    }
  }, []);

  return <div ref={d3Container} style={{ width: "100%", height: "100vh" }} />;
};

export default OrgChartComponent;