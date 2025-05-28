import React from 'react';

function Home(props) {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
                <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
                        Welcome to my Application
                    </h1>
                    <p className="text-gray-500 mb-8 text-center">
                        Start your journey with a modern, beautiful CMS.
                    </p>
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200">
                        Get Started
                    </button>
                </div>
            </section>
        </>
    );
}

export default Home;