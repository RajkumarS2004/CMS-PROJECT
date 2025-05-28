import React from 'react';

function Home() {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 via-pink-100 to-yellow-100">
                <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-14 flex flex-col items-center max-w-xl w-full border border-gray-200">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-purple-400 via-pink-400 to-yellow-300 rounded-full p-4 shadow-lg">
                        <span className="text-5xl">🛒</span>
                    </div>
                    <h1 className="mt-8 text-4xl font-black text-gray-800 mb-3 text-center tracking-tight drop-shadow">
                        Product Catalog CMS
                    </h1>
                    <p className="text-lg text-gray-600 mb-10 text-center">
                        <span className="font-semibold text-purple-500">Modern, Fast, Secure.</span> <br />
                        Manage your products with ease and style.
                    </p>
                    <div className="flex gap-4 w-full justify-center">
                        <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-full shadow-xl hover:from-indigo-600 hover:to-pink-600 transition-all duration-200 text-lg">
                            Get Started
                        </button>
                        <button className="px-8 py-3 bg-white/70 border-2 border-purple-300 text-purple-600 font-bold rounded-full shadow hover:bg-purple-50 transition-all duration-200 text-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;