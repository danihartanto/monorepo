import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/main.css';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Di aplikasi nyata, di sini ada validasi & API call
    console.log('Simulating login...');
    onLogin(); // Panggil fungsi untuk update state otentikasi
    navigate('/dashboard'); // Arahkan ke dashboard
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button onClick={handleLogin} className="auth-button">Login</button>
        <p>
          Belum punya akun? <Link to="/register">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;