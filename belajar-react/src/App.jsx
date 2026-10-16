import React, { useState, useEffect } from 'react';
import AuthPage from './pages/AuthPage';

export default function App() {
  // State untuk mengecek apakah user sudah login atau belum
  const [sudahLogin, setSudahLogin] = useState(false);

  // Jalankan sekali saat aplikasi pertama dibuka untuk cek localStorage
  useEffect(() => {
    const tokenSimpanan = localStorage.getItem('token');
    if (tokenSimpanan) {
      setSudahLogin(true);
    }
  }, []);

  // Fungsi yang dipanggil saat login sukses
  const handleLoginBerhasil = () => {
    setSudahLogin(true);
  };

  // Fungsi untuk keluar (logout)
  const handleLogout = () => {
    localStorage.removeItem('token');
    setSudahLogin(false);
  };

  // Jika belum login, tampilkan halaman Login/Register
  if (!sudahLogin) {
    return <AuthPage handleLoginBerhasil={handleLoginBerhasil} />;
  }

  // Jika sudah login, tampilkan halaman utama sementara
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Selamat Datang di Halaman Utama!</h1>
      <p>Anda berhasil masuk ke aplikasi.</p>
      <button 
        onClick={handleLogout}
        style={{ padding: '10px 20px', backgroundColor: '#dc2626', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '20px' }}
      >
        Keluar (Logout)
      </button>
    </div>
  );
}