import React from "react";

export default function AuthButton({ name }) {
    return (
        <input
            type="submit"
            className="bg-blue-500 px-20 py-4 my-4 text-slate-50 rounded-lg text-2xl font-medium cursor-pointer"
            value={name}
        />
    );
}
