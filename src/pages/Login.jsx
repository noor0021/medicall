import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, handle authentication here
        navigate('/dashboard');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-mint-100 to-white flex items-center justify-center p-6">
            <div className="bg-white rounded-card shadow-soft-lg p-8 w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-deep-black mb-2">
                        {isSignup ? 'Create Account' : 'Welcome Back'}
                    </h2>
                    <p className="text-gray-600">
                        {isSignup ? 'Join us to manage your health' : 'Sign in to continue'}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name field - only for signup */}
                    {isSignup && (
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-deep-black mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent"
                                    placeholder="Enter your name"
                                    required={isSignup}
                                />
                            </div>
                        </div>
                    )}

                    {/* Email field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-deep-black mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    {/* Password field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-deep-black mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-card focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-transparent"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full bg-deep-black text-white py-3 rounded-card font-semibold text-lg hover:bg-gray-800 transition-all shadow-soft mt-6"
                    >
                        Continue
                    </button>
                </form>

                {/* Toggle between login and signup */}
                <div className="mt-6 text-center">
                    <button
                        onClick={() => setIsSignup(!isSignup)}
                        className="text-mint-600 hover:text-mint-700 font-medium"
                    >
                        {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
