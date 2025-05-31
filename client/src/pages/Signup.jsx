import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthContext from '../context/Authcontext';

 function SignUp() {
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useContext(AuthContext) || {};
  // const navigate = useNavigate();

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
    <div className="flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#004945] to-black min-h-[calc(100vh-144px)] py-16 px-6">
      <div className="w-full max-w-3xl bg-black/60 rounded-3xl shadow-2xl p-10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-[#fb6a09]/30">
        <div className="flex flex-col items-center justify-center">
          {/* Icon */}
          <div className="mb-6 animate-bounce">
            <span className="text-6xl drop-shadow-[0_2px_8px_rgba(251,106,9,0.6)]">📝</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#fb6a09] text-center tracking-wide">
            Sign Up
          </h1>
          <p className="text-lg md:text-xl text-amber-100 text-center mb-10 leading-relaxed max-w-xl">
            <span className="font-semibold text-[#fb6a09]">Create your account</span> to access the CMS platform.
          </p>
          <form className="w-full max-w-md space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-amber-50 mb-1 font-semibold" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-gray-900/80 text-white border border-[#fb6a09]/30 focus:outline-none focus:ring-2 focus:ring-[#fb6a09] transition-all"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-amber-50 mb-1 font-semibold" htmlFor="dept">Department</label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-gray-900/80 text-white border border-[#fb6a09]/30 focus:outline-none focus:ring-2 focus:ring-[#fb6a09] transition-all"
                type="text"
                id="dept"
                name="dept"
                value={dept}
                onChange={e => setDept(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-amber-50 mb-1 font-semibold" htmlFor="state">State</label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-gray-900/80 text-white border border-[#fb6a09]/30 focus:outline-none focus:ring-2 focus:ring-[#fb6a09] transition-all"
                type="text"
                id="state"
                name="state"
                value={state}
                onChange={e => setState(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-amber-50 mb-1 font-semibold" htmlFor="country">Country</label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-gray-900/80 text-white border border-[#fb6a09]/30 focus:outline-none focus:ring-2 focus:ring-[#fb6a09] transition-all"
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={e => setCountry(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-amber-50 mb-1 font-semibold" htmlFor="password">Password</label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-gray-900/80 text-white border border-[#fb6a09]/30 focus:outline-none focus:ring-2 focus:ring-[#fb6a09] transition-all"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-green-500 via-green-700 to-green-900 text-white shadow-lg hover:shadow-green-500/40 transition-transform transform hover:scale-105"
              >
               Signup
              </button>
            </div>
            <div className="text-center mt-4">
              <span className="text-amber-100">Already have an account? </span>
              <button
                type="submit"
                className="text-[green-500] font-semibold hover:underline"
              >
               Signin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;