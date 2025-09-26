import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import ChartCard from '../components/ChartCard';
import '../styles/main.css';

// Impor gambar placeholder untuk chart
import dailySalesChart from '../assets/cookie50.png';
import emailSubsChart from '../assets/ingredients.png';
import completedTasksChart from '../assets/list.png';

import { useMediaQuery } from '../hooks/useMediaQuery';

const Home = () => {
    const isMobile = useMediaQuery('(max-width: 992px)');
    // const [isSidebarOpen, setSidebarOpen] = useState(true);

    // 3. Atur state awal sidebar berdasarkan ukuran layar
    //    - Jika bukan mobile (desktop), sidebar terbuka (true)
    //    - Jika mobile, sidebar tertutup (false)
    const [isSidebarOpen, setSidebarOpen] = useState(!isMobile);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    // 4. Tambahkan Efek untuk handle saat ukuran layar berubah
    //    Jika pengguna melebarkan atau mengecilkan browser, state sidebar ikut menyesuaikan.
    useEffect(() => {
        setSidebarOpen(!isMobile);
    }, [isMobile]);

    return (
        <div className={`dashboard-layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        <div className="main-panel">
            <Header />
            {/* Tombol ini hanya akan dirender jika sidebar tertutup */}
            {!isSidebarOpen && (
                <button onClick={toggleSidebar} className="hamburger-btn">
                    ☰
                </button>
            )}
            
            
            
            <main className="dashboard-content">
            {/* Baris untuk Stats Cards */}
            <div className="row">
                <StatsCard icon="💽" label="Used Space" value="49/50 GB" footerText="Get More Space..." color="orange" />
                <StatsCard icon="" label="Revenue" value="$34,245" footerText="Last 24 Hours" color="green" />
                <StatsCard icon="ℹ️" label="Fixed Issues" value="75" footerText="Tracked from Github" color="red" />
                <StatsCard icon="🐦" label="Followers" value="+245" footerText="Just Updated" color="blue" />
            </div>

            {/* Baris untuk Chart Cards */}
            <div className="row">
                <ChartCard 
                title="Daily Sales" 
                description="55% increase in today sales" 
                footerText="updated 4 minutes ago" 
                chartImage={dailySalesChart} 
                color="green" 
                />
                <ChartCard 
                title="Email Subscriptions" 
                description="Last Campaign Performance" 
                footerText="campaign sent 2 days ago" 
                chartImage={emailSubsChart} 
                color="orange" 
                />
                <ChartCard 
                title="Completed Tasks" 
                description="Last Campaign Performance" 
                footerText="campaign sent 2 days ago" 
                chartImage={completedTasksChart} 
                color="red" 
                />
            </div>
            </main>
        </div>
        </div>
    );
};

export default Home;