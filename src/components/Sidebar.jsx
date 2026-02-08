import { X, User, Settings, HelpCircle } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

const Sidebar = ({ isOpen, onClose }) => {
    const { isDyslexiaFont, toggleDyslexiaFont } = useAccessibility();

    return (
        <>
            {}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            {}
            <aside
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-elevated z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                aria-label="Navigation sidebar"
                role="navigation"
            >
                <div className="p-6 h-full flex flex-col">
                    {}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-deep-black">Menu</h2>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-mint-500"
                            aria-label="Close sidebar"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {}
                    <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
                        <img
                            src="/avatar.png"
                            alt="User profile"
                            className="w-16 h-16 rounded-full object-cover border-2 border-mint-500"
                        />
                        <div>
                            <h3 className="font-semibold text-deep-black text-lg">John Doe</h3>
                            <p className="text-gray-600 text-sm">john.doe@example.com</p>
                        </div>
                    </div>

                    {}
                    <nav className="flex-1 space-y-2">
                        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-card hover:bg-mint-100 transition-all text-left">
                            <User size={20} className="text-mint-600" />
                            <span className="font-medium text-deep-black">Profile Settings</span>
                        </button>

                        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-card hover:bg-mint-100 transition-all text-left">
                            <Settings size={20} className="text-mint-600" />
                            <span className="font-medium text-deep-black">General Settings</span>
                        </button>

                        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-card hover:bg-mint-100 transition-all text-left">
                            <HelpCircle size={20} className="text-mint-600" />
                            <span className="font-medium text-deep-black">Help & Support</span>
                        </button>

                        {}
                        <div className="pt-4 border-t border-gray-200 mt-4">
                            <div className="flex items-center justify-between px-4 py-3">
                                <span className="font-medium text-deep-black">Dyslexia Friendly Font</span>
                                <button
                                    onClick={toggleDyslexiaFont}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-mint-500 focus:ring-offset-2 ${isDyslexiaFont ? 'bg-mint-500' : 'bg-gray-300'
                                        }`}
                                    role="switch"
                                    aria-checked={isDyslexiaFont}
                                    aria-label="Toggle dyslexia friendly font"
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDyslexiaFont ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>
                            <p className="px-4 text-xs text-gray-500 mt-1">
                                Switch to a font designed for easier reading
                            </p>
                        </div>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
