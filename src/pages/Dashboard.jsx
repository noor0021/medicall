import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HealthIDCards from '../components/HealthIDCards';
import MedicineTracker from '../components/MedicineTracker';
import BottomNav from '../components/BottomNav';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {}
            <Header onAvatarClick={toggleSidebar} />

            {}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {}
            <main className="pt-6 pb-24">
                {}
                <HealthIDCards />

                {}
                <MedicineTracker />
            </main>

            {}
            <BottomNav />
        </div>
    );
};

export default Dashboard;
