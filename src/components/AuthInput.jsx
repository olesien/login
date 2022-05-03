import React from "react";

export default function AuthInput({ name, type, value, changeValue }) {
    return (
        <div>
            <label
                className="block text-xl text-left p-4 text-slate-600"
                htmlFor={name}
            >
                {name}
            </label>
            <input
                className="w-96 p-2 border-b-2 border-slate-600 "
                type={type}
                name={name}
                value={value}
                onChange={changeValue}
            />
        </div>
    );
}
