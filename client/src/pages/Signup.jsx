import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthContext from '../context/Authcontext';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useContext(AuthContext) || {};
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (signup) {
      signup(email, dept, state, country, password);
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Signup function not available',
        icon: 'error'
      });
    }
  }

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
              <label className="block text-amber-50 mb-1" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fb6a09]"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-amber-50 mb-1" htmlFor="dept">Department</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fb6a09]"
                type="text"
                id="dept"
                name="dept"
                value={dept}
                onChange={e => setDept(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-amber-50 mb-1" htmlFor="state">State</label>
              <input
                className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#fb6a09]"
                type="text"
                id="state"
                name="state"
                value={state}
                onChange={e => setState(e.target.value)}
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
                value={country}
                onChange={e => setCountry(e.target.value)}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="min-w-[200px] mt-4 px-6 py-3  bg-[#fb6a09] hover:bg-[#e05c00]  text-white font-bold rounded-full shadow-xl transition-all duration-200 text-xl">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
