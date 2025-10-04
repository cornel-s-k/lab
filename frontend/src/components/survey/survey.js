import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously } from 'firebase/auth';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Ambil konfigurasi dari environment variable (.env)
const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);
const appId = process.env.REACT_APP_APP_ID;
const initialAuthToken = process.env.REACT_APP_INITIAL_AUTH_TOKEN || '';

const Survey = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    serviceType: '',
    otherService: '',
    easeOfAccess: 0,
    waitingTime: 0,
    staffProfessionalism: 0,
    serviceQuality: 0,
    infoClarity: 0,
    resultsAccess: 0,
    facilityComfort: 0,
    security: 0,
    overallSatisfaction: 0,
    futureHopes: '',
    improvementSuggestions: '',
  });

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // <--- State baru untuk melacak pengiriman

  // Inisialisasi Firebase
  useEffect(() => {
    const setupFirebase = async () => {
      try {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        if (initialAuthToken) {
          await signInWithCustomToken(auth, initialAuthToken);
        } else {
          await signInAnonymously(auth);
        }

        const currentUser = auth.currentUser;
        if (currentUser) {
          setUserId(currentUser.uid);
        } else {
          setUserId(crypto.randomUUID());
        }
        setIsAuthReady(true);
      } catch (error) {
        console.error('Firebase initialization or authentication failed:', error);
        setStatusMessage({ type: 'error', text: 'Gagal menghubungkan ke database.' });
        setIsAuthReady(false);
      }
    };

    setupFirebase();
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseInt(value, 10),
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      setStatusMessage({ type: 'error', text: 'Autentikasi belum siap. Mohon tunggu sebentar.' });
      return;
    }

    setLoading(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const surveyData = { ...formData, userId };
      const response = await fetch('http://localhost:3001/api/submit-survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(surveyData),
      });

      if (!response.ok) {
        throw new Error('Gagal mengirim data ke server.');
      }

      setStatusMessage({
        type: 'success',
        text: 'Terima kasih atas masukan Anda! Data berhasil dikirim.',
      });
      setIsSubmitted(true); // <--- Mengatur state untuk menampilkan halaman terima kasih
    } catch (error) {
      console.error('Error submitting form data:', error);
      setStatusMessage({ type: 'error', text: 'Terjadi kesalahan saat mengirim data. Mohon coba lagi.' });
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => (
    <div className="container my-5">
      <h2 className="text-center mb-4">Review Layanan Laboratorium</h2>
      {statusMessage.text && (
        <div className={`alert alert-${statusMessage.type}`} role="alert">
          {statusMessage.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        {/* Konten formulir tetap sama */}
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instansi / Unit Kerja</label>
          <input
            type="text"
            className="form-control"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
          />
        </div>
        <h5 className="mt-4">Jenis Layanan Yang Digunakan</h5>
        {["Fasilitas Uji Fisik - Saluran 2D Beton", "Fasilitas Uji Fisik - Saluran 2D Kaca", "Fasilitas Uji Fisik - Kolam 3D", "Fasilitas Uji Fisik - Saluran Simulasi Tsunami", "Fasilitas Uji Fisik - Penggunaan Data Primer",].map((service) => (
          <div className="form-check" key={service}>
            <input
              type="radio"
              className="form-check-input"
              name="serviceType"
              value={service}
              checked={formData.serviceType === service}
              onChange={handleChange}
            />
            <label className="form-check-label">{service}</label>
          </div>
        ))}
        <div className="form-check mt-2">
          <input
            type="radio"
            className="form-check-input"
            name="serviceType"
            value="Yang lain"
            checked={formData.serviceType === "Yang lain"}
            onChange={handleChange}
          />
          <label className="form-check-label">Yang lain</label>
        </div>
        {formData.serviceType === "Yang lain" && (
          <input
            type="text"
            className="form-control mt-2"
            name="otherService"
            value={formData.otherService}
            onChange={handleChange}
            placeholder="Sebutkan layanan lainnya"
          />
        )}
        <hr className="my-4" />
        {[
          { id: 1, label: "Kemudahan dalam mengakses layanan", name: "easeOfAccess" },
          { id: 2, label: "Waktu tunggu layanan", name: "waitingTime" },
          { id: 3, label: "Profesionalisme staf laboratorium", name: "staffProfessionalism" },
          { id: 4, label: "Kualitas hasil layanan", name: "serviceQuality" },
          { id: 5, label: "Kejelasan informasi yang diberikan", name: "infoClarity" },
          { id: 6, label: "Kemudahan dalam mengakses hasil", name: "resultsAccess" },
          { id: 7, label: "Tingkat kebersihan dan kenyamanan fasilitas", name: "facilityComfort" },
          { id: 8, label: "Tingkat keamanan dalam pelayanan", name: "security" },
          { id: 9, label: "Kepuasan terhadap keseluruhan layanan", name: "overallSatisfaction" },
        ].map((item) => (
          <div className="mb-3" key={item.id}>
            <label className="form-label">
              {item.id}. {item.label}
            </label>
            <div>
              {[1, 2, 3, 4, 5].map((rating) => (
                <div className="form-check form-check-inline" key={rating}>
                  <input
                    type="radio"
                    className="form-check-input"
                    name={item.name}
                    value={rating}
                    checked={formData[item.name] === rating}
                    onChange={handleRatingChange}
                    required
                  />
                  <label className="form-check-label">{rating}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mb-3">
          <label className="form-label">Harapan untuk layanan kedepan</label>
          <textarea
            className="form-control"
            name="futureHopes"
            rows="3"
            value={formData.futureHopes}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Usulan perbaikan / tambahan layanan</label>
          <textarea
            className="form-control"
            name="improvementSuggestions"
            rows="3"
            value={formData.improvementSuggestions}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-danger w-100"
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Kirim Reviu"}
        </button>
        <button
          type="button"
          className="btn btn-secondary w-100 mt-3"
          onClick={() => (window.location.href = "/")}
        >
          Kembali ke Home
        </button>
      </form>
    </div>
  );

  const renderThankYou = () => (
    <div className="container my-5 text-center">
      <div className="card p-5 shadow">
        <h2 className="text-success mb-3">Terima kasih atas masukan Anda!</h2>
        <p>Data survei Anda telah berhasil kami terima. Masukan Anda sangat berarti untuk perbaikan layanan kami.</p>
        <button
          type="button"
          className="btn btn-secondary w-100 mt-3"
          onClick={() => (window.location.href = "/")}
        >
          Kembali ke Home
        </button>
      </div>
    </div>
  );

  // Mengubah logika render utama
  return <div>{isSubmitted ? renderThankYou() : renderForm()}</div>;
};

export default Survey;