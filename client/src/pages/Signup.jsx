import React, { useState } from 'react';

export default function Signup() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    department: '',
    country: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    alert('Signup submitted!');
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#fb6a09] via-[#004945] to-black min-h-[calc(100vh-144px)] py-10 px-4 sm:px-8">
      <div className="w-full max-w-2xl bg-black/60 rounded-xl shadow-2xl p-8 border border-gray-800 backdrop-blur-md">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-[#fb6a09]">Sign Up</h1>
          <p className="text-lg text-amber-50 max-w-md text-center mb-8">
            Create your account to access the CMS platform.
          </p>
          <form className="w-full max-w-md space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-amber-50 mb-1" htmlFor="username">Username</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fb6a09]"
                type="text"
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-amber-50 mb-1" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fb6a09]"
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-amber-50 mb-1" htmlFor="password">Password</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fb6a09]"
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-amber-50 mb-1" htmlFor="department">Department</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fb6a09]"
                type="text"
                id="department"
                name="department"
                value={form.department}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-amber-50 mb-1" htmlFor="country">Country</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fb6a09]"
                type="text"
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#fb6a09] hover:bg-[#e05c00] text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
