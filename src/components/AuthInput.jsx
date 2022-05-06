import React from "react";

export default function AuthInput({ name, type, value, changeValue, error }) {
    console.log(error);
    console.log(name);
    return (
        <div>
            <div className="flex items-center">
                <div className="flex-1">
                    <label
                        className="block text-xl text-left p-4 text-slate-600"
                        htmlFor={name}
                    >
                        {name}
                    </label>
                </div>
                <div className="flex-1 text-red-500">
                    <label htmlFor={name}>
                        {error && error.name === name && error.details}
                    </label>
                </div>
            </div>

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
