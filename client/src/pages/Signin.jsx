import React from 'react';
import{useState} from 'react';
import Swal from 'sweetalert2';

function Signin() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

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
        <>
            <section className="min-h-[90vh] min-w-[90vw] flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-pink-50 to-yellow-100">
                <form 
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-12 flex flex-col gap-6 items-center max-w-md w-full border border-gray-200">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center tracking-tight drop-shadow">Sign-In</h2>
                    
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="Email" className="text-lg font-medium text-purple-700">Email</label>
                        <input
                            type="email"
                            name="username"
                            placeholder="Enter Email"
                              value={email}
            onChange={e => setEmail(e.target.value)}
                            required
                            className="px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 text-lg transition"
                        />
                    </div>
                    
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="password" className="text-lg font-medium text-purple-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                            className="px-4 py-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 text-lg transition"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-full shadow-xl hover:from-indigo-600 hover:to-pink-600 transition-all duration-200 text-xl"
                    >
                        Login
                    </button>
                </form>
            </section>
        </>
    );
}

export default Signin;