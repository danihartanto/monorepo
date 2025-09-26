import React from 'react';
import '../styles/main.css';

interface StatsCardProps {
  icon: string;
  label: string;
  value: string;
  footerText: string;
  color: 'orange' | 'green' | 'red' | 'blue';
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, label, value, footerText, color }) => {
  return (
    <div className="stats-card">
      <div className={`stats-card-icon ${color}`}>
        <span>{icon}</span>
      </div>
      <div className="stats-card-content">
        <p className="stats-card-label">{label}</p>
        <h3 className="stats-card-value">{value}</h3>
      </div>
      <div className="stats-card-footer">
        <p>{footerText}</p>
      </div>
    </div>
  );
};

export default StatsCard;