
import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router";
import AuthContext from "../context/Authcontext";

const PATHS = [
    { path: '/dashboard/intro', text: 'intro' },
];

export default function Dashboardlayouts() {
    const location = useLocation();
    // Upgrade main container and content area CSS
    // Replace main's className with upgraded styles

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="p-8 w-60 sticky top-0 h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center shadow-2xl">
                <span className="text-3xl font-extrabold mb-8 text-white tracking-wide">Dashboard</span>
                <nav className="flex flex-col gap-3 w-full">
                    {PATHS.map((value, index) => (
                        <Link
                            key={index}
                            to={value.path}
                            style={location.pathname === value.path ? STYLE.active : STYLE.inactive}
                            className={`block px-4 py-2 rounded-lg font-medium transition 
                                ${location.pathname === value.path
                                    ? "bg-blue-600 shadow text-white"
                                    : "hover:bg-gray-700 hover:text-white text-gray-300"}`}
                        >
                            {value.text.charAt(0).toUpperCase() + value.text.slice(1)}
                        </Link>
                    ))}
                </nav>
                <button
                    // onClick={logout}
                    className="mt-auto w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow transition"
                >
                    Logout
                </button>
            </aside>
            <main className="flex-1 min-h-screen overflow-auto p-10">
                <Outlet />
            </main>
        </div>
    );
}


const STYLE = {
    active: {
        color: "white"
    },
    inactive: {
        color: "gray"
    }
};
