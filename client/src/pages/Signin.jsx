import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/Authcontext";

function Signin() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { signin } = useContext(AuthContext) || {};

    function handleSubmit(event) {
        event.preventDefault();
        if (signin) {
            signin(email, password);
        } else if (email === "admin@gmail.com" && password === "admin") {
            Swal.fire({
                title: "Success",
                text: "Login is successful",
                icon: "success"
            }).then(() => {
                navigate('/dashboard/Intro');
            });
        } else {
            Swal.fire({
                title: "Invalid",
                text: "Login is invalid",
                icon: "error"
            });
        }
    }

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#004945] to-black min-h-[calc(100vh-144px)] py-16 px-6">
      <div className="w-full max-w-2xl bg-black/60 rounded-3xl shadow-2xl p-10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-[#fb6a09]/30">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8">
          {/* Icon */}
          <div className="mb-4 animate-bounce">
            <span className="text-6xl drop-shadow-[0_2px_8px_rgba(251,106,9,0.6)]">🔐</span>
          </div>
          <h2 className="text-5xl font-extrabold mb-2 text-[#fb6a09] text-center tracking-wide drop-shadow-lg">
            Sign-In
          </h2>
          <p className="text-lg text-amber-100 text-center mb-4 max-w-md">
            Welcome back! <span className="font-semibold text-[#fb6a09]">Securely access your dashboard.</span>
          </p>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-semibold text-[#fb6a09]">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              className="px-5 py-4 rounded-2xl border border-[#fb6a09]/30 focus:outline-none focus:ring-2 focus:ring-[#fb6a09] bg-black/40 text-lg text-amber-100 placeholder:text-[#fb6a09]/70 transition-all duration-300"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="text-lg font-semibold text-[#fb6a09]">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
              className="px-5 py-4 rounded-2xl border border-[#fb6a09]/30 focus:outline-none focus:ring-2 focus:ring-[#fb6a09] bg-black/40 text-lg text-amber-100 placeholder:text-[#fb6a09]/70 transition-all duration-300"
            />
          </div>

          <button
                type="submit"
                className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-green-500 via-green-700 to-green-900 text-white shadow-lg hover:shadow-green-500/40 transition-transform transform hover:scale-105"
              >
               Login
              </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
