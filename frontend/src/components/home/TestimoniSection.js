import React from "react";
import testimoniBg from "../../assets/home/tstimoni.png";

const testimonials = [
  {
    text: "Penelitian skripsi saya jadi luar biasa berkat fasilitas canggih di laboratorium ini! Staf yang ramah menjelaskan setiap langkah dengan jelas, membantu saya memahami dinamika pantai secara mendalam. Pengalaman ini bukan hanya mendukung data, tapi juga memperkaya wawasan praktis untuk masa depan karier saya!",
    name: "Mahasiswa",
    role: "Teknik Sipil",
    photo: "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
  },
  {
    text: "Kolaborasi dengan Laboratorium Dinamika Pesisir sungguh mengesankan! Tim mereka responsif, menyediakan data berkualitas tinggi, dan selalu siap berdiskusi secara ilmiah. Hasil riset kami jadi jauh lebih solid berkat fasilitas dan keahlian mereka yang luar biasa!",
    name: "Mitra Peneliti",
    role: "Universitas X",
    photo: "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
  },
  {
    text: "Laboratorium ini menjadi mitra terpercaya untuk proyek pemodelan pantai kami yang kompleks. Prosesnya cepat, data sangat akurat, dan tim mereka menunjukkan profesionalisme luar biasa. Mereka berhasil menggabungkan kebutuhan praktis dengan pendekatan ilmiah yang mendalam!",
    name: "Praktisi",
    role: "Konsultan Rekayasa Pantai",
    photo: "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
  },
];

const TestimoniSection = () => {
  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundImage: `url(${testimoniBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with gradient */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
        }}
      ></div>

      <div className="container position-relative text-white px-4">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">
            Cerita Mereka, Inspirasi Kita!
          </h2>
          <p className="lead fw-normal mx-auto" style={{ maxWidth: "700px" }}>
            Dengar pengalaman luar biasa dari para stakeholder yang telah bekerja sama dengan Laboratorium Dinamika Pesisir.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 border-0 shadow-lg animate__animated animate__fadeInUp" style={{ backgroundColor: "rgba(255,255,255,0.95)" }}>
                <div className="card-body d-flex flex-column position-relative">
                  <div
                    className="position-absolute top-0 start-0 w-25 h-1"
                    style={{ background: "linear-gradient(to right, #0d6efd, #20c997)" }}
                  ></div>
                  <p className="card-text mb-4 text-dark fst-italic">“{t.text}”</p>
                  <div className="d-flex align-items-center mt-auto">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="rounded-circle me-3 border border-primary border-2 object-fit-cover"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div>
                      <h6 className="fw-bold mb-0 text-dark">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action button */}
        <div className="text-center mt-5">
          <a
            href="https://forms.gle/dAdifB5BMhhMqrLw5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg rounded-pill px-5 py-3 transition-all duration-300"
            style={{ background: "linear-gradient(to right, #fd0d0dff, #2077c9ff)" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Ceritakan Pengalaman Anda!
          </a>
        </div>
      </div>

      {/* Bootstrap animation dependency */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </section>
  );
};

export default TestimoniSection;