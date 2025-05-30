import React from "react";

export default function Intro() {
    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-[#fb6a09] via-[#004945] to-black min-h-[calc(100vh-144px)] py-10 px-4 sm:px-8">
            <div className="w-full max-w-2xl bg-black/60 rounded-xl shadow-2xl p-8 border border-gray-800 backdrop-blur-md">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4 text-[#fb6a09]">Welcome to the Expense Tracker</h1>
                    <p className="text-lg text-amber-50 max-w-md text-center mb-6">
                        This app helps you organize your expenses, track your spending, and visualize important financial information all in one place.
                    </p>
                    <ul className="list-disc text-amber-100 pl-6 space-y-2 self-start">
                        <li>Add, edit, and manage your expenses easily</li>
                        <li>Track your spending progress</li>
                        <li>Get insights and visual summaries</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}