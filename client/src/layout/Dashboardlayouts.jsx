import { useContext, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import AuthContext from "../context/Authcontext";

// Updated icons with matching visuals and consistent green color
const ICONS = [
    // About (Info) - Blue
    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16v-4M12 8h.01" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Account Summary (Wallet) - Orange
    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3v4M8 3v4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Add Expense (Plus) - Red
    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Expense Chart (Pie Chart) - Purple
    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 12A9 9 0 1 1 12 3v9z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3v9h9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Transaction List (List) - Green
    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
];

const PATHS = [
    { path: '/dashboard/Intro', text: 'About' },
    { path: '/dashboard/Summarycard', text: 'Account Summary' },
    { path: '/dashboard/Transactionform', text: 'Add Expense' },
    { path: '/dashboard/Expensechart', text: 'Expense Chart' },
    { path: '/dashboard/Transactionlist', text: 'Transaction List' },
];

export default function Dashboardlayouts() {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        if (location.pathname === "/dashboard") {
            navigate("/dashboard/Intro", { replace: true });
        }
    }, [location.pathname, navigate]);

    return (
        <div className="flex min-h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <aside className="hidden md:flex flex-col items-center p-6 w-72 sticky top-0 h-screen bg-gradient-to-b from-[#18181b] to-[#27272a] shadow-2xl rounded-tr-3xl rounded-br-3xl border-r-4 border-green-700">
                
                                <div className="mb-10 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#22223b] to-green-900 flex items-center justify-center shadow-lg mb-2">
                                        <svg className="w-10 h-10 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7v6c0 5.25 3.75 10 10 10s10-4.75 10-10V7l-10-5zm0 2.18L19.09 7.5 12 11.82 4.91 7.5 12 4.18zM4 9.27l7.29 4.22c.44.25.98.25 1.42 0L20 9.27V13c0 4.42-3.58 8-8 8s-8-3.58-8-8V9.27z"/>
                                        </svg>
                                    </div>
                                    <span className="text-2xl font-bold text-green-300 tracking-widest">Dashboard</span>
                                </div>
                                <nav className="flex flex-col gap-2 w-full mt-4">
                                    {PATHS.map((value, index) => {
                                        const isActive = location.pathname === value.path;
                                        return (
                                            <Link
                                                key={index}
                                                to={value.path}
                                                className={`group flex items-center gap-4 px-5 py-3 rounded-xl font-semibold transition-all duration-200
                                                    ${isActive
                                                        ? "bg-gradient-to-r from-green-900 to-green-700 text-white shadow-lg border-l-4 border-green-500 scale-105"
                                                        : "hover:bg-gradient-to-r hover:from-green-900 hover:to-green-700 hover:text-white text-green-200"
                                                    }`}
                                            >
                                                <span className={`transition-transform duration-200 ${isActive ? "scale-125" : "group-hover:scale-110"}`}>
                                                    {ICONS[index]}
                                                </span>
                                                <span className="truncate">{value.text}</span>
                                            </Link>
                                        );
                                    })}
                                </nav>
                                <button
                                    onClick={logout}
                                    className="mt-auto w-full py-3 bg-gradient-to-r from-green-700 to-green-900 hover:from-green-900 hover:to-green-700 text-white rounded-xl font-bold shadow-lg transition-all duration-200 tracking-wide flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M17 16l4-4m0 0l-4-4m4 4H7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M3 12a9 9 0 0118 0 9 9 0 01-18 0z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Logout
                                </button>
                            </aside>
                            {/* Responsive sidebar for mobile */}
            <aside className="md:hidden fixed z-20 bottom-0 left-0 right-0 flex bg-gradient-to-r from-[#18181b] to-[#27272a] shadow-2xl border-t-4 border-green-700">
                {PATHS.map((value, index) => {
                    const isActive = location.pathname === value.path;
                    return (
                        <Link
                            key={index}
                            to={value.path}
                            className={`flex-1 flex flex-col items-center py-3 transition-all duration-200
                                ${isActive
                                    ? "bg-gradient-to-t from-green-900 to-green-700 text-green-200"
                                    : "text-green-300 hover:text-green-200"
                                }`}
                        >
                            {ICONS[index]}
                            <span className="text-xs">{value.text.split(' ')[0]}</span>
                        </Link>
                    );
                })}
            </aside>
            <main className="flex-1 min-h-screen overflow-auto bg-gradient-to-br from-[#18181b] via-[#27272a] to-[#22223b] p-6 md:p-10">
                <header className="rounded-3xl shadow-2xl bg-white/10 backdrop-blur-md p-6 md:p-10 min-h-[80vh] border border-green-900/30">
                    <Outlet />
                </header>
            </main>
        </div>
    );
}
