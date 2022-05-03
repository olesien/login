import { useState } from "react";
import AuthForm from "../components/AuthForm";

export default function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="w-screen h-screen overflow-hidden bg-blue-400 flex justify-center items-center gradient-background">
            <AuthForm
                name="Register"
                inputs={[
                    {
                        name: "Email",
                        type: "text",
                        value: email,
                        changeValue: (e) => setEmail(e.target.value),
                    },
                    {
                        name: "Name",
                        type: "text",
                        value: name,
                        changeValue: (e) => setName(e.target.value),
                    },
                    {
                        name: "Password",
                        type: "password",
                        value: password,
                        changeValue: (e) => setPassword(e.target.value),
                    },
                    {
                        name: "Repeat Password",
                        type: "password",
                        value: repeatPassword,
                        changeValue: (e) => setRepeatPassword(e.target.value),
                    },
                ]}
                alternative={{
                    text: "Already have an account?",
                    link: "/login",
                    linkText: "Login here",
                }}
                onSubmit={submit}
            />
        </div>
    );
}
