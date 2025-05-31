import React from 'react';

 function About() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#18181b] via-[#27272a] to-[#22223b] min-h-[calc(100vh-144px)] px-4 py-10 sm:px-8">
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10 transition-all duration-300">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fb6a09] drop-shadow-md">
            About Expense Tracker
          </h1>
          <p className="text-amber-50 text-lg leading-relaxed max-w-2xl">
            We are a passionate team of developers focused on delivering impactful web applications like the Expense Tracker. Our goal is to empower users to manage their personal finances with ease, clarity, and confidence.
          </p>

          <div className="w-full">
            <h2 className="text-2xl font-semibold text-[#fb6a09] mb-2">Our Values</h2>
            <ul className="text-left text-amber-100 text-base space-y-2 list-disc list-inside pl-4">
              <li>Innovation and creativity in every project</li>
              <li>Commitment to quality and performance</li>
              <li>Collaboration and open communication</li>
              <li>Continuous learning and improvement</li>
              <li>Customer-centric approach</li>
            </ul>
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-semibold text-[#fb6a09] mb-2">What We Do</h2>
            <p className="text-amber-50 text-base leading-relaxed">
              From CMS platforms to custom solutions, we utilize modern web technologies to bring your ideas to life. Whether you’re a startup or a growing business, we create tools that help you succeed digitally.
            </p>
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-semibold text-[#fb6a09] mb-2">Contact Us</h2>
            <p className="text-amber-50 text-base leading-relaxed">
              Have questions or interested in collaborating? Reach out at{' '}
              <a
                href="mailto:info@cmsproject.com"
                className="underline text-[#fb6a09] hover:text-orange-300 transition-colors duration-200"
              >
                info@cmsproject.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;