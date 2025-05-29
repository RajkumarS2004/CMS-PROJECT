import React from 'react';

function Developer() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 bg-gray-50 min-h-screen">
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80">
                <img src="/src/assets/LOGO.png" alt="RAJKUMAR S" className="w-24 h-24 rounded-full mb-4 border-2 border-blue-500" />
                <h1 className="text-xl font-bold mb-2 text-blue-700">RAJKUMAR S</h1>
                <p className="text-gray-600 text-center">MERN Stack Developer - Expert in <span className="font-semibold text-blue-600">MongoDB</span> for robust database design and management.</p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80">
                <img src="/src/assets/LOGO.png" alt="MADANSANKARAVEL V" className="w-24 h-24 rounded-full mb-4 border-2 border-green-500" />
                <h1 className="text-xl font-bold mb-2 text-green-700">MADANSANKARAVEL V</h1>
                <p className="text-gray-600 text-center">MERN Stack Developer - Specializes in <span className="font-semibold text-green-600">React.js</span> for building scalable backend APIs.</p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80">
                <img src="/src/assets/LOGO.png" alt="DANUSH S" className="w-24 h-24 rounded-full mb-4 border-2 border-purple-500" />
                <h1 className="text-xl font-bold mb-2 text-purple-700">DANUSH S</h1>
                <p className="text-gray-600 text-center">MERN Stack Developer - Focused on <span className="font-semibold text-purple-600">Express.js</span> for dynamic and responsive user interfaces.</p>
            </div>
        </div>
    );
}

export default Developer;