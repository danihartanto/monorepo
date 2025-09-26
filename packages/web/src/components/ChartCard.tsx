import React from 'react';
import '../styles/main.css';

interface ChartCardProps {
  title: string;
  description: string;
  footerText: string;
  chartImage: string; // Path ke gambar chart
  color: 'green' | 'orange' | 'red';
}

const ChartCard: React.FC<ChartCardProps> = ({ title, description, footerText, chartImage, color }) => {
  return (
    <div className="chart-card">
      <div className={`chart-card-header ${color}`}>
        <img src={chartImage} alt={title} />
      </div>
      <div className="chart-card-body">
        <h4 className="chart-card-title">{title}</h4>
        <p className="chart-card-description">{description}</p>
      </div>
      <div className="chart-card-footer">
        <p>{footerText}</p>
      </div>
    </div>
  );
};

export default ChartCard;