import React from "react";
export default function Navbar({ logout }) {
    return (
        <nav className="px-24 py-4 flex w-screen bg-slate-50 items-center">
            <p className="flex-1 text-left p-4 text-4xl">OurLiving</p>
            <div className="flex-1 flex justify-end">
                <div>
                    <button
                        className="flex-1 inline bg-blue-500 text-slate-50 px-12 py-4 rounded-lg text-xl cursor-pointer hover:bg-blue-600"
                        onClick={logout}
                    >
                        Log out
                    </button>
                </div>
            </div>
        </nav>
    );
}
