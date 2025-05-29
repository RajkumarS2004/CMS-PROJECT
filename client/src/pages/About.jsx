import React from 'react'

export default function About() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#fb6a09] via-[#004945] to-black min-h-[calc(100vh-144px)] py-10 px-4 sm:px-8">
      <div className="w-full max-w-2xl bg-black/60 rounded-xl shadow-2xl p-8 border border-gray-800 backdrop-blur-md">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-[#fb6a09]">About Us</h1>
          <p className="text-lg text-amber-50 max-w-md text-center mb-6">
            We are a team of passionate developers dedicated to building amazing web applications.
            Our mission is to create user-friendly and efficient software solutions that make a difference.
          </p>
          <h2 className="text-2xl font-semibold text-[#fb6a09] mb-2">Our Values</h2>
          <ul className="text-amber-50 text-base mb-6 list-disc list-inside max-w-md text-left">
            <li>Innovation and creativity in every project</li>
            <li>Commitment to quality and performance</li>
            <li>Collaboration and open communication</li>
            <li>Continuous learning and improvement</li>
            <li>Customer-centric approach</li>
          </ul>
          <h2 className="text-2xl font-semibold text-[#fb6a09] mb-2">What We Do</h2>
          <p className="text-amber-50 text-base max-w-md text-center mb-4">
            From content management systems to custom web solutions, we leverage the latest technologies to deliver products that help businesses grow and succeed. Whether you are a startup or an established enterprise, we are here to turn your ideas into reality.
          </p>
          <h2 className="text-2xl font-semibold text-[#fb6a09] mb-2">Contact Us</h2>
          <p className="text-amber-50 text-base max-w-md text-center">
            Interested in working with us or have any questions? Reach out at <a href="mailto:info@cmsproject.com" className="underline text-[#fb6a09]">info@cmsproject.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
