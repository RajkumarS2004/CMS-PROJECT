import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/signin');
    };

    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-[#fb6a09] via-[#004945] to-black min-h-[calc(100vh-144px)] py-10 px-4 sm:px-8">
            <div className="w-full max-w-2xl bg-black/60 rounded-xl shadow-2xl p-8 border border-gray-800 backdrop-blur-md">
                <div className="flex flex-col items-center justify-center">
                    <div className="mb-6">
                        <span className="text-6xl">🛒</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-[#fb6a09] text-center">
                        Expense Tracker
                    </h1>
                    <p className="text-lg text-amber-50 max-w-md text-center mb-10">
                        <span className="font-semibold text-[#fb6a09]">Modern, Fast, Secure.</span> <br />
                        Manage your expenses with ease and style.
                    </p>
                    <div className="flex gap-4 w-full justify-center">
                        <button
                            className="px-8 py-3 bg-gradient-to-r from-[#fb6a09] via-[#004945] to-black text-white font-bold rounded-full shadow-xl hover:from-[#fb6a09]/80 hover:to-black/80 transition-all duration-200 text-lg"
                            onClick={handleGetStarted}
                        >
                            Get Started
                        </button>
                        <button
                            className="px-8 py-3 bg-black/70 border-2 border-[#fb6a09] text-[#fb6a09] font-bold rounded-full shadow hover:bg-[#fb6a09]/10 transition-all duration-200 text-lg"
                            onClick={() => navigate('/about')}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;