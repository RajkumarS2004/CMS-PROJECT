import React from 'react';

function Developer() {
    const developers = [
        {
            name: "RAJKUMAR S",
            color: "blue",
            border: "border-blue-500",
            text: "text-blue-700",
            span: "text-blue-600",
            desc: "MERN Stack Developer - Expert in ",
            skill: "MongoDB",
            skillDesc: " for robust database design and management."
        },
        {
            name: "MADANSANKARAVEL V",
            color: "green",
            border: "border-green-500",
            text: "text-green-700",
            span: "text-green-600",
            desc: "MERN Stack Developer - Specializes in ",
            skill: "React.js",
            skillDesc: " for building scalable backend APIs."
        },
        {
            name: "DANUSH S",
            color: "purple",
            border: "border-purple-500",
            text: "text-purple-700",
            span: "text-purple-600",
            desc: "MERN Stack Developer - Focused on ",
            skill: "Express.js",
            skillDesc: " for dynamic and responsive user interfaces."
        }
    ];

    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-[#fb6a09] via-[#004945] to-black min-h-[calc(100vh-144px)] py-10 px-4 sm:px-8">
            <div className="w-full max-w-2xl bg-black/60 rounded-xl shadow-2xl p-8 border border-gray-800 backdrop-blur-md">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4 text-[#fb6a09]">About Us</h1>
                    <p className="text-lg text-amber-50 max-w-md text-center mb-8">
                        Meet our passionate MERN Stack Developers, each specializing in a core technology to deliver robust, scalable, and dynamic web solutions.
                    </p>
                    <div className="flex flex-col gap-8 w-full">
                        {developers.map((dev, idx) => (
                            <div
                                key={dev.name}
                                className={`flex flex-col items-center bg-black/80 shadow-lg rounded-lg p-6 w-full border ${dev.border}`}
                            >
                                <img
                                    src="/src/assets/LOGO.png"
                                    alt={dev.name}
                                    className={`w-24 h-24 rounded-full mb-4 border-4 ${dev.border} shadow-md`}
                                />
                                <h2 className={`text-2xl font-bold mb-2 ${dev.text}`}>{dev.name}</h2>
                                <p className="text-amber-50 text-center">
                                    {dev.desc}
                                    <span className={`font-semibold ${dev.span}`}>{dev.skill}</span>
                                    {dev.skillDesc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Developer;