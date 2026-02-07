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
            {/* Header */}
            <Header onAvatarClick={toggleSidebar} />

            {/* Sidebar */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main content area - scrollable */}
            <main className="pt-6 pb-24">
                {/* Government Health IDs Section */}
                <HealthIDCards />

                {/* Medicine Tracker Section */}
                <MedicineTracker />
            </main>

            {/* Bottom Navigation */}
            <BottomNav />
        </div>
    );
};

export default Dashboard;
