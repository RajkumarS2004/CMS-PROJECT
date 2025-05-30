import React from "react";

export default function Intro() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-144px)] py-16 px-4 sm:px-8 bg-gradient-to-br from-[#fb6a09] via-[#004945] to-black bg-fixed bg-cover bg-center">
            <div className="w-full max-w-4xl bg-black/60 rounded-2xl shadow-2xl p-14 border-2 border-gray-800 backdrop-blur-md">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-extrabold mb-8 text-[#fb6a09] drop-shadow-lg">Welcome to the <span className="text-white">Expense Tracker</span></h1>
                    <p className="text-2xl text-amber-50 max-w-2xl text-center mb-10">
                        This app helps you organize your expenses, track your spending, and visualize important financial information all in one place.
                    </p>
                    <ul className="list-disc text-amber-50 pl-8 space-y-4 self-start text-xl">
                        <li><span className="text-[#fb6a09] font-semibold">Add, edit,</span> and manage your expenses easily</li>
                        <li><span className="text-[#fb6a09] font-semibold">Track</span> your spending progress</li>
                        <li><span className="text-[#fb6a09] font-semibold">Get insights</span> and visual summaries</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}