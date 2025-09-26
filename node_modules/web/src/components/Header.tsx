import React from 'react';
import '../styles/main.css';

const Header = () => {
  return (
    <header className="dashboard-header">
      <h2 className="header-title">Material Dashboard</h2>
      <div className="header-search">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>
    </header>
  );
};

export default Header;