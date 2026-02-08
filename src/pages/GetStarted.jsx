import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {}
            <div className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="max-w-md w-full text-center">
                    {}
                    <div className="mb-8">
                        <img
                            src="/hero-illustration.png"
                            alt="Medical professional consulting with patient"
                            className="w-full h-auto max-w-sm mx-auto"
                        />
                    </div>

                    {}
                    <h1 className="text-4xl font-bold text-deep-black mb-4">
                        Care Made Simple
                    </h1>

                    {}
                    <p className="text-lg text-gray-600 mb-8">
                        Your health companion, always by your side
                    </p>
                </div>
            </div>

            {}
            <div className="fixed bottom-0 left-0 right-0 bg-white px-6 py-6 shadow-soft-lg">
                <button
                    onClick={() => navigate('/login')}
                    className="w-full bg-deep-black text-white py-4 rounded-pill font-semibold text-lg hover:bg-gray-800 transition-all shadow-soft-lg"
                    aria-label="Get started with MediCall"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default GetStarted;
