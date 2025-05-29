import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (email === "admin@gmail.com" && password === "admin") {
            Swal.fire({
                title: "Success",
                text: "Login is successful",
                icon: "success"
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
        <div className="flex items-center justify-center bg-gradient-to-br from-[#fb6a09] via-[#004945] to-black min-h-[calc(100vh-144px)] py-10 px-4 sm:px-8">
            <div className="w-full max-w-2xl bg-black/60 rounded-xl shadow-2xl p-8 border border-gray-800 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
                    <h2 className="text-4xl font-bold mb-2 text-[#fb6a09] drop-shadow">Sign-In</h2>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="Email" className="text-lg font-medium text-[#fb6a09]">Email</label>
                        <input
                            type="email"
                            name="username"
                            placeholder="Enter Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="px-4 py-3 rounded-xl border border-[#fb6a09]/30 focus:outline-none focus:ring-2 focus:ring-[#fb6a09] bg-black/40 text-lg text-amber-50 transition"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="password" className="text-lg font-medium text-[#fb6a09]">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                            className="px-4 py-3 rounded-xl border border-[#fb6a09]/30 focus:outline-none focus:ring-2 focus:ring-[#fb6a09] bg-black/40 text-lg text-amber-50 transition"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#fb6a09] via-[#004945] to-black text-white font-bold rounded-full shadow-xl hover:from-[#fb6a09]/80 hover:to-black/80 transition-all duration-200 text-xl"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signin;
