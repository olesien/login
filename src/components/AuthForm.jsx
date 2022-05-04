import React from "react";
import AuthAlternative from "./AuthAlternative";
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";
import AuthTitle from "./AuthTitle";

export default function AuthForm({
    name,
    inputs,
    alternative,
    onSubmit,
    error,
}) {
    return (
        <div className="bg-slate-50 p-6 rounded-lg">
            {error && (
                <p className="text-red-700">
                    Error: {error.response.data.error}
                </p>
            )}
            <form className="p-6" onSubmit={onSubmit}>
                <AuthTitle title={name} />
                <div className="inputs my-12">
                    {inputs.map((input, index) => (
                        <AuthInput
                            key={index}
                            name={input.name}
                            type={input.type}
                            value={input.value}
                            changeValue={input.changeValue}
                        />
                    ))}
                </div>

                <AuthButton name={name} />
                <AuthAlternative alternative={alternative} />
            </form>
        </div>
    );
}
