import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqData = [
    {
      id: "faq1",
      question: "Apa saja jenis layanan pengujian yang tersedia di laboratorium ini?",
      answer: "Kami menyediakan layanan pengujian antara lain: pengujian model fisik dinamika dan bangunan pantai (gelombang, pasang surut, arus, tsunami, tekanan, breakwater, revetment, jetty, dsb), pengujian simulasi hidro-oseanografi dan interaksi air-struktur (pemodelan gelombang, pola sebaran panas, pola sebaran sedimen, dsb), dan pengujian mekanika tanah dan akuisisi data pesisir (pengujian kadar air, berat janis, ukuran butiran tanah; pengukuran batimetri dan topografi; pengambilan sampel coredrill, pengukuran pasang surut, dan profil arus laut, dsb).",
    },
    {
      id: "faq2",
      question: "Apakah pengujian di laboratorium bisa dilakukan berdasarkan permintaan proyek tertentu (customized testing)?",
      answer: "Ya, kami melayani pengujian berdasarkan spesifikasi teknis dari proyek atau kebutuhan unik pengguna.",
    },
    {
      id: "faq3",
      question: "Siapa saja yang dapat menggunakan layanan laboratorium ini?",
      answer: "Layanan kami terbuka untuk: Instansi pemerintah, Konsultan teknik, Perusahaan swasta, Perguruan tinggi dan lembaga riset, dan Mahasiswa untuk kegiatan tugas akhir.",
    },
    {
      id: "faq4",
      question: "Bagaimana prosedur permohonan layanan pengujian?",
      answer: "Permohonan layanan pengujian dapat diakses melalui website Layanan Sains BRIN >> elsa.brin.go.id",
    },
    {
      id: "faq5",
      question: "Berapa lama waktu yang dibutuhkan untuk satu proyek pengujian?",
      answer: "Durasi pengujian bervariasi tergantung pada kompleksitas objek uji atau skenario uji dari masing-masing layanan.",
    },
    {
      id: "faq6",
      question: "Berapa biaya layanan pengujian?",
      answer: "Besar nominal layanan tergantung pada fasilitas yang dipakai dan lama penggunaannya. Sebagai referensi dapat dilihat PMK RI No.129 /PMK.02/2022.",
    },
    {
      id: "faq7",
      question: "Apakah pengguna dapat terlibat langsung selama pengujian berlangsung?",
      answer: "Ya, kami menganjurkan kolaborasi aktif dengan pengguna jasa untuk memastikan pengujian berjalan sesuai tujuan teknis. Kunjungan ke laboratorium dapat dijadwalkan sesuai ketentuan yang berlaku.",
    },
    {
      id: "faq8",
      question: "Apakah laboratorium menerima magang atau program kerja praktik mahasiswa?",
      answer: "Ya. Kami menerima mahasiswa magang dengan durasi 1–6 bulan, sesuai kesepakatan dan ketersediaan pembimbing teknis. Pendaftaran dilakukan secara resmi melalui institusi asal dan diajukan melalui elsa.brin.go.id.",
    },
    {
      id: "faq9",
      question: "Bagaimana cara menghubungi laboratorium untuk informasi lebih lanjut?",
      answer: "Silakan hubungi kami melalui: Telepon / WA: 0813-2959-9897 dan Lokasi: BRIN Kawasan Mlati, Jl. Grafika Sekip No.2, Sendowo, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284.",
    },
    {
      id: "faq10",
      question: "Bagaimana jika terjadi kerusakan alat atau gangguan saat pengujian?",
      answer: "Jika terjadi kendala teknis selama pengujian, laboratorium akan segera menginformasikan pengguna dan menjadwalkan ulang (tanpa biaya tambahan, jika kesalahan berasal dari pihak laboratorium). Apabila kerusakan disebabkan oleh kesalahan pengguna, akan dikenakan kompensasi sesuai ketentuan.",
    },
    {
      id: "faq11",
      question: "Apakah laboratorium menerima kerja sama jangka panjang atau proyek multi-tahun?",
      answer: "Ya. Kami membuka peluang kerja sama riset atau proyek teknis jangka panjang, baik dalam bentuk kontrak kerja, MoU, atau nota kesepahaman.",
    },
    {
      id: "faq12",
      question: "Bagaimana jika pengguna membutuhkan data mentah (raw data)?",
      answer: "Data mentah (raw data) dapat disediakan melalui RIN (Repositiry Ilmiah Nasional). Namun, data tersebut hanya disampaikan setelah proses verifikasi dan pencatatan internal selesai.",
    },
    {
      id: "faq13",
      question: "Apakah jadwal pengujian dapat berubah setelah disepakati?",
      answer: "Jadwal bisa berubah karena beberapa faktor seperti: Gangguan teknis, Perawatan alat, Proyek sebelumnya mengalami perpanjangan. Jika terjadi perubahan, pengguna akan diberi pemberitahuan minimal 3 hari kerja sebelumnya.",
    },
    {
      id: "faq14",
      question: "Apakah hasil pengujian dapat dirahasiakan?",
      answer: "Ya. Kerahasiaan data dan hasil pengujian dapat dijamin melalui perjanjian tertulis, khususnya untuk proyek-proyek sensitif atau bersifat komersial.",
    },
    {
      id: "faq15",
      question: "Bagaimana jika hasil pengujian berbeda dengan ekspektasi pengguna?",
      answer: "Hasil pengujian bersifat objektif dan berdasarkan pengamatan atau pengukuran langsung. Jika terjadi ketidaksesuaian, pengguna dapat mengajukan klarifikasi secara tertulis, dan laboratorium akan memberi penjelasan teknis. Pengulangan pengujian dimungkinkan dengan perjanjian tambahan.",
    },
  ];

  return (
    <div className="bg-white">
      <Header />
      <div className="container py-5">
        <div className="text-center mb-5 mt-5">
          <h1 className="fw-bold mb-3 text-secondary animate__animated animate__fadeInDown">
            FAQ (Frequently Asked Questions)
          </h1>
          <p className="lead text-muted animate__animated animate__fadeIn">
            Jawaban atas pertanyaan yang sering diajukan mengenai layanan kami.
          </p>
          <hr className="w-25 mx-auto border-2 my-4" />
        </div>

        <div className="accordion" id="faqAccordion">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="accordion-item shadow-sm mb-3 faq-item animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="accordion-header" id={`heading${item.id}`}>
                <button
                  className="accordion-button collapsed fw-bold faq-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded="false"
                  aria-controls={`collapse${item.id}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse${item.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${item.id}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted faq-answer">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      {/* Custom CSS untuk tampilan lebih menarik */}
      <style jsx>{`
        .faq-item {
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .faq-button {
          background-color: #f8f9fa;
          color: #333;
          font-weight: 600;
          border-bottom: 1px solid #e0e0e0;
          transition: background-color 0.3s ease;
          padding: 1.25rem 1.5rem;
          border-radius: 12px;
          border-top: none;
          border-left: none;
          border-right: none;
        }

        .faq-button:not(.collapsed) {
          background-color: #8e1616;
          color: white;
        }

        .faq-button:focus {
          box-shadow: none;
        }

        .faq-answer {
          background-color: #fff;
          color: #555;
          font-size: 1rem;
          line-height: 1.6;
          padding: 1.5rem;
        }

        /* Ikon panah yang lebih stylish */
        .accordion-button::after {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236c757d'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0L8 4.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
          transition: transform 0.2s ease-in-out;
        }

        .accordion-button:not(.collapsed)::after {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0L8 4.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default FAQ;