import React from 'react';
import logo from '../assets/LOGO.png';

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-5 px-8 shadow-xl border-b border-gray-800">
            <nav className="flex items-center justify-between">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-14 w-14 rounded-full shadow-lg ring-2 ring-white/20 hover:scale-110 transition-transform duration-300"
                />
                <div className="flex-1 flex justify-center">
                    <h1 className="text-3xl font-extrabold text-white tracking-wider drop-shadow-lg">
                        RDM E-commerce <span className="text-indigo-400">CMS</span>
                    </h1>
                </div>
                {/* Sign In and Sign Up buttons */}
                <div className="flex gap-4">
                    <a
                        href="/signin"
                        className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
                    >
                        Sign In
                    </a>
                    <a
                        href="/signup"
                        className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-800 text-white font-semibold transition"
                    >
                        Sign Up
                    </a>
                </div>
            </nav>
        </header>
    );
}

export function Footer() {
    return (
        <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-400 py-5 text-center border-t border-gray-800">
            <span className="text-sm tracking-wide">
                &copy; {new Date().getFullYear()} <span className="font-semibold text-white">RDM CMS Project</span>. All rights reserved.
            </span>
        </footer>
    );
}
