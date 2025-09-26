import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import semua halaman
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

// Import CSS
import './styles/main.css';

function App() {
  // State sederhana untuk simulasi status login
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Di aplikasi nyata, ini akan di-set setelah verifikasi token dari API
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />

        {/* Rute yang Dilindungi (Protected Route) */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        
        {/* Tambahkan rute lain di dalam dashboard di sini jika perlu */}
        {/* Contoh: <Route path="/dashboard/profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} /> */}

        {/* Fallback route jika halaman tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;