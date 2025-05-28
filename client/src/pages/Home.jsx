import React from 'react';

function Home() {
    return (
        <>
            <section className="min-h-[100vh] min-w-full flex items-center justify-center bg-gradient-to-tr from-indigo-300 via-pink-200 to-yellow-200">
                <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl px-16 py-20 flex flex-col items-center max-w-3xl w-full border border-gray-200">
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-purple-400 via-pink-400 to-yellow-300 rounded-full p-6 shadow-lg">
                        <span className="text-7xl">🛒</span>
                    </div>
                    <h1 className="mt-14 text-6xl font-black text-gray-800 mb-6 text-center tracking-tight drop-shadow">
                        Product Catalog CMS
                    </h1>
                    <p className="text-2xl text-gray-600 mb-14 text-center">
                        <span className="font-semibold text-purple-500">Modern, Fast, Secure.</span> <br />
                        Manage your products with ease and style.
                    </p>
                    <div className="flex gap-6 w-full justify-center">
                        <button className="px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-full shadow-xl hover:from-indigo-600 hover:to-pink-600 transition-all duration-200 text-2xl">
                            Get Started
                        </button>
                        <button className="px-10 py-4 bg-white/70 border-2 border-purple-300 text-purple-600 font-bold rounded-full shadow hover:bg-purple-50 transition-all duration-200 text-2xl">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;