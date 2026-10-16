import React, { useState, useEffect } from 'react';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  const [sudahLogin, setSudahLogin] = useState(false);

  useEffect(() => {
    const tokenSimpanan = localStorage.getItem('token');
    if (tokenSimpanan) {
      setSudahLogin(true);
    }
  }, []);

  const handleLoginBerhasil = () => {
    setSudahLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setSudahLogin(false);
  };

  // Jika belum login, tampilkan halaman Login/Register
  if (!sudahLogin) {
    return <AuthPage handleLoginBerhasil={handleLoginBerhasil} />;
  }

  // Jika sudah login, tampilkan halaman Dashboard Pipeline
  return <DashboardPage handleLogout={handleLogout} />;
}