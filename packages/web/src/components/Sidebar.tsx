import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/main.css';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void; // Fungsi tanpa argumen & tanpa return
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? '' : 'closed'}`}>
      {/* 2. Tambahkan event onClick di sini */}
      <div className="sidebar-header" onClick={onToggle}>
        <h3>{isOpen ? 'Creative Tim' : 'CT'}</h3>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" end>
          <span className="icon">🎛️</span>
          <span className="text">Dashboard</span>
        </NavLink>
        <NavLink to="/dashboard/profile">
          <span className="icon">👤</span>
          <span className="text">User Profile</span>
        </NavLink>
        <NavLink to="/login">
          <span className="icon">🚪</span>
          <span className="text">Logout</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;