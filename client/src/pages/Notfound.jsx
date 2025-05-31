import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#18181b] via-[#27272a] to-[#000] min-h-screen p-6">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center">
        <h1 className="text-[6rem] sm:text-[8rem] font-extrabold text-[#fb6a09] drop-shadow-lg leading-none mb-4">404</h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-amber-50 mb-3">Page Not Found</h2>
        <p className="text-lg text-gray-300 max-w-md mb-6">
          Oops! The page you're looking for doesn't exist or might have been moved.
        </p>
        <Link
          to="/home"
          className="inline-block mt-4 px-6 py-2.5 bg-[#fb6a09] hover:bg-[#ff7f32] text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-200"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
