import { Home, Camera, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
    const navigate = useNavigate();

    const handleSOS = () => {
        
        alert('🚨 Emergency services contacted! Help is on the way.');
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-soft-lg z-40">
            <div className="flex items-center justify-around px-6 py-4 relative">
                {}
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex flex-col items-center space-y-1 p-2 rounded-card hover:bg-mint-100 transition-all focus:outline-none focus:ring-2 focus:ring-mint-500"
                    aria-label="Home"
                >
                    <Home size={28} className="text-deep-black" />
                    <span className="text-xs font-medium text-deep-black">Home</span>
                </button>

                {}
                <button
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-mint-500 p-5 rounded-full shadow-elevated hover:bg-mint-600 transition-all focus:outline-none focus:ring-2 focus:ring-mint-500 focus:ring-offset-2"
                    aria-label="Scan document or medicine"
                >
                    <Camera size={32} className="text-white" />
                </button>

                {}
                <button
                    onClick={handleSOS}
                    className="flex flex-col items-center space-y-1 p-2 rounded-card transition-all focus:outline-none focus:ring-2 focus:ring-danger-red pulse-animation"
                    aria-label="Emergency SOS"
                >
                    <div className="bg-danger-red p-2 rounded-full">
                        <AlertCircle size={28} className="text-white" />
                    </div>
                    <span className="text-xs font-bold text-danger-red">SOS</span>
                </button>
            </div>
        </nav>
    );
};

export default BottomNav;
