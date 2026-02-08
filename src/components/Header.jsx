import { Globe } from 'lucide-react';

const Header = ({ onAvatarClick }) => {
    return (
        <header className="sticky top-0 z-40 bg-white shadow-soft px-6 py-4">
            <div className="flex items-center justify-between">
                {}
                <button
                    onClick={onAvatarClick}
                    className="flex items-center space-x-3 hover:opacity-80 transition-all focus:outline-none focus:ring-2 focus:ring-mint-500 rounded-full"
                    aria-label="Open menu sidebar"
                >
                    <img
                        src="/avatar.png"
                        alt="User profile"
                        className="w-12 h-12 rounded-full object-cover border-2 border-mint-500"
                    />
                    <div className="text-left">
                        <p className="font-semibold text-deep-black">Welcome back!</p>
                        <p className="text-sm text-gray-600">Good to see you</p>
                    </div>
                </button>

                {}
                <button
                    className="p-3 rounded-full hover:bg-mint-100 transition-all focus:outline-none focus:ring-2 focus:ring-mint-500"
                    aria-label="Change language"
                >
                    <Globe size={24} className="text-deep-black" />
                </button>
            </div>
        </header>
    );
};

export default Header;
