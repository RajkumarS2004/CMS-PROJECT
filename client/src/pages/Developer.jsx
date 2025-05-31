import React from 'react';

function Developer() {
    const developers = [
        {
            name: "RAJKUMAR S",
            color: "blue",
            border: "border-blue-500",
            text: "text-blue-400",
            span: "text-blue-300",
            desc: "MERN Stack Developer - Expert in ",
            skill: "MongoDB",
            skillDesc: " for robust database design and management."
        },
        {
            name: "MADANSANKARAVEL V",
            color: "green",
            border: "border-green-500",
            text: "text-green-400",
            span: "text-green-300",
            desc: "MERN Stack Developer - Specializes in ",
            skill: "React.js",
            skillDesc: " for building scalable backend APIs."
        },
        {
            name: "DANUSH S",
            color: "purple",
            border: "border-purple-500",
            text: "text-purple-400",
            span: "text-purple-300",
            desc: "MERN Stack Developer - Focused on ",
            skill: "Express.js",
            skillDesc: " for dynamic and responsive user interfaces."
        }
    ];

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-144px)] py-10 px-4 sm:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <div className="w-full max-w-5xl bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-[0_0_40px_#fb6a09aa] p-8 md:p-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#fb6a09] drop-shadow-xl">Meet Our Developers</h1>
                    <p className="mt-4 text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
                        Our talented MERN Stack Developers each specialize in key technologies to deliver high-performance, scalable applications.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {developers.map((dev, idx) => (
                        <div
                            key={dev.name}
                            className={`group flex flex-col items-center text-center bg-black/60 hover:bg-black/70 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-2xl p-6 border ${dev.border}`}
                        >
                            <div className={`w-24 h-24 rounded-full mb-4 border-4 ${dev.border} shadow-md overflow-hidden`}>
                                <img
                                    src="/src/assets/LOGO.png"
                                    alt={dev.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h2 className={`text-xl font-extrabold mb-2 tracking-wide ${dev.text}`}>{dev.name}</h2>
                            <p className="text-sm text-gray-200">
                                {dev.desc}
                                <span className={`font-semibold ${dev.span}`}>{dev.skill}</span>
                                {dev.skillDesc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Developer;
