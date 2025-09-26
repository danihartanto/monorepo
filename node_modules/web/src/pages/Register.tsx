import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Register</h2>
        <input type="text" placeholder="Nama Lengkap" className="auth-input" />
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-button">Register</button>
        <p>
          Sudah punya akun? <Link to="/login">Login di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;