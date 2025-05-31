import React from "react";

export default function Intro() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-144px)] py-16 px-4 sm:px-8 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-fixed bg-cover bg-center">
      <div className="w-full max-w-5xl bg-white/10 rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 border border-green-700/30 backdrop-blur-2xl transition-all duration-300 hover:shadow-green-500/20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-white drop-shadow-lg text-center">
            Welcome to the <span className="text-white">Expense Tracker</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl text-center mb-10 font-medium leading-relaxed">
            This app helps you organize your expenses, track your spending, and
            visualize important financial information — all in one place.
          </p>
          <ul className="list-none text-white/90 pl-0 space-y-8 self-start w-full max-w-2xl">
            {features.map(({ icon, title, text, gradient }, i) => (
              <li key={i} className="flex items-start gap-4 group transition duration-200 hover:scale-[1.02]">
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${gradient} shadow-lg group-hover:scale-105 transition-transform`}
                >
                  {icon}
                </span>
                <span className="text-lg sm:text-xl leading-snug">
                  <span className="text-green-300 font-semibold">{title}</span>{" "}
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Add, edit,",
    text: "and manage your expenses easily",
    gradient: "bg-gradient-to-tr from-green-700 to-green-400",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Track",
    text: " your spending progress",
    gradient: "bg-gradient-to-tr from-green-400 to-green-700",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 12A9 9 0 1 1 12 3v9z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3v9h9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Get insights",
    text: " and visual summaries",
    gradient: "bg-gradient-to-tr from-green-300 to-green-600",
  },
];
