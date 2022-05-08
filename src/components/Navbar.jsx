import React from "react";
export default function Navbar({ logout }) {
    return (
        <nav className="px-6 md:px-24 py-4 flex w-screen bg-slate-50 items-center">
            <p className="flex-1 text-left p-4 text-xl md:text-4xl">
                OurLiving
            </p>
            <div className="flex-1 flex justify-end">
                <div>
                    <button
                        className="flex-1 inline bg-blue-500 text-slate-50 px-6 py-3 md:px-12 md:py-4 rounded-lg text-l md:text-xl cursor-pointer hover:bg-blue-600"
                        onClick={logout}
                    >
                        Log out
                    </button>
                </div>
            </div>
        </nav>
    );
}
