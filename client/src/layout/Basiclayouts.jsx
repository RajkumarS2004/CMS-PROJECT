import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import Snowfall from "./Snowfall";
export default function Basiclayout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative">
      {/* Header */}
      <header className="bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-800 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-14 rounded-full shadow-lg ring-2 ring-white/20 hover:scale-110 transition-transform duration-300"
          />
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
              RDM <span className="text-indigo-400">CMS</span>
            </h1>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/signin"
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium transition-colors duration-300 shadow"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 text-white text-sm sm:text-base font-medium transition-colors duration-300 shadow"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-1/2 left-0 z-50 -translate-y-1/2 bg-gray-900 border-r border-gray-800 shadow-xl flex flex-col
          transition-all duration-300 overflow-hidden rounded-tr-xl rounded-br-xl
          ${navOpen ? "w-48 py-6 px-4 gap-4" : "w-0 p-0 gap-0"}`}
      >
        <NavItemFull to="/" label="Home" onClick={() => setNavOpen(false)} />
        <NavItemFull
          to="/about"
          label="About"
          onClick={() => setNavOpen(false)}
        />
        <NavItemFull
          to="/developer"
          label="Developer"
          onClick={() => setNavOpen(false)}
        />
      </aside>

      {/* Nav Icon fixed left middle */}
      <button
        onClick={() => setNavOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        className={`
          fixed top-1/2 left-0 -translate-y-1/2 z-60 bg-gray-900 rounded-r-full p-3 shadow-lg ring-1 ring-white/20
          hover:bg-indigo-700 transition-all duration-300 focus:outline-none
          ${
            navOpen
              ? "opacity-0 scale-50 pointer-events-none"
              : "opacity-100 scale-100"
          }
        `}
      >
        {/* Hamburger icon */}
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Optional Background Overlay */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setNavOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 py-10 px-4 sm:px-8 bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
        <Snowfall />
        <div className="max-w-5xl mx-auto bg-black/60 rounded-xl shadow-2xl p-8 border border-gray-800 backdrop-blur-md relative z-10">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function NavItemFull({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-300 hover:text-indigo-400 font-semibold text-lg transition-colors rounded-md px-3 py-2"
    >
      {label}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-400 py-5 text-center border-t border-gray-800">
      <span className="text-sm tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">RDM CMS Project</span>. All
        rights reserved.
      </span>
    </footer>
  );
}
