// src/components/about/OrgChart.js
import React, { useEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";
import "./OrgChart.css";
import * as d3 from "d3";

const OrgChartComponent = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const data = [
        // Root
        { id: 1, name: "KETUA TIM", title: "Sandi Sufiandi" },

        // Level 2
        { id: 2, pid: 1, name: "ADNAN SANDY DWI", title: "Manager Dinamika Pesisir & Rekayasa Pantai" },

        // Level 3
        { id: 3, pid: 2, name: "Dwi Lukman Hakim, Dinar Catur Istiyanto", title: "Penyelia Hidrolik Pantai (14 orang)" },
        { id: 4, pid: 2, name: "Agus Wibowo, Ristiyanto Adiputra", title: "Penyelia Struktur Hidrolik & Dinamika Pesisir (9 orang)" },
        { id: 5, pid: 2, name: "Ferman Setya Nugroho, Arifan Jaya Syahbana", title: "Penyelia Akustik Pesisir (10 orang)" },
      ];

      const chart = new OrgChart()
        .container(d3Container.current)
        .data(data)
        .parentNodeId((d) => d.pid)
        .nodeWidth(() => 240)
        .nodeHeight(() => 110)
        .childrenMargin(() => 50)
        .compact(false)
        .onNodeClick(() => null) // 🔒 Nonaktifkan klik expand/collapse
        .zoomBehavior(null) // 🔒 Nonaktifkan zoom dan drag
        .linkUpdate(function (d) {
          // Gaya garis antar node
          d3.select(this)
            .attr("stroke", "#ccc")
            .attr("stroke-width", 2);
        })
        .nodeContent((d) => {
          return `
            <div style="
              padding:10px;
              border-radius:10px;
              background:#1e3a8a;
              color:white;
              height:100%;
              width:100%;
              box-shadow:0 3px 6px rgba(0,0,0,0.3);
              display:flex;
              flex-direction:column;
              justify-content:center;
              text-align:center;
            ">
              <div style="font-weight:bold;font-size:14px;text-transform:uppercase;">
                ${d.data.name}
              </div>
              <div style="font-size:12px;margin-top:5px;opacity:0.8;">
                ${d.data.title || ""}
              </div>
            </div>
          `;
        })
        .render();

      // Responsif terhadap resize window
      const handleResize = () => {
        chart.width(d3Container.current.offsetWidth).render();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      ref={d3Container}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "500px",
        overflow: "hidden", // mencegah scroll
      }}
    />
  );
};

export default OrgChartComponent;
