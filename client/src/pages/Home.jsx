import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/signin');
    };

    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#004945] to-black min-h-[calc(100vh-144px)] py-16 px-6">
            <div className="w-full max-w-3xl bg-black/60 rounded-3xl shadow-2xl p-10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-[#fb6a09]/30">
                <div className="flex flex-col items-center justify-center">
                    {/* Icon */}
                    <div className="mb-6 animate-bounce">
                        <span className="text-6xl drop-shadow-[0_2px_8px_rgba(251,106,9,0.6)]">🛒</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#fb6a09] text-center tracking-wide">
                        Expense Tracker
                    </h1>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl text-amber-100 text-center mb-10 leading-relaxed max-w-xl">
                        <span className="font-semibold text-[#fb6a09]">Modern. Fast. Secure.</span> <br />
                        Track your finances effortlessly with powerful visual insights.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={handleGetStarted}
                            className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-green-500 via-green-700 to-green-900 text-white shadow-lg hover:shadow-green-500/40 transition-transform transform hover:scale-105"
                        >
                            Get Started
                        </button>
                        <button
                            onClick={() => navigate('/about')}
                            className="px-8 py-3 text-lg font-semibold rounded-full bg-black/50 border-2 border-green-500 text-green-400 hover:bg-green-900/10 transition-transform transform hover:scale-105 shadow"
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
