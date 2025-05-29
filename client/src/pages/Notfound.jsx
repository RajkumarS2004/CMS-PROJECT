import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#fb6a09] via-[#004945] to-black min-h-[calc(100vh-144px)] py-10 px-4 sm:px-8">
      <div className="w-full max-w-2xl bg-black/60 rounded-xl shadow-2xl p-8 border border-gray-800 backdrop-blur-md">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl font-extrabold mb-4 text-[#fb6a09] drop-shadow-lg">404</h1>
          <p className="text-3xl font-semibold text-amber-50 mb-2">Page Not Found</p>
          <p className="text-lg text-amber-50 max-w-md text-center mb-6">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Link
            to={'/home'}
            className="mt-4 px-6 py-2 bg-[#fb6a09] text-black font-semibold rounded-full shadow hover:scale-105 transition-transform"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}