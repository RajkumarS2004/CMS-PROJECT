import React from 'react'

export default function About() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#fb6a09] via-[#004945] to-black min-h-[calc(100vh-144px)] py-10 px-4 sm:px-8">
      <div className="w-full max-w-2xl bg-black/60 rounded-xl shadow-2xl p-8 border border-gray-800 backdrop-blur-md">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-[#fb6a09]">About Us</h1>
          <p className="text-lg text-amber-50 max-w-md text-center">
            We are a team of passionate developers dedicated to building amazing web applications.
            Our mission is to create user-friendly and efficient software solutions that make a difference.
          </p>
        </div>
      </div>
    </div>
  )
}
