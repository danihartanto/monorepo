import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000); // Tunggu 2 detik

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

  return (
    <div className="splash-screen">
      <h1>My Awesome App</h1>
      <p>Loading...</p>
    </div>
  );
};

export default SplashScreen;