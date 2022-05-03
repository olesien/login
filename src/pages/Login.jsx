import { useState } from "react";
import AuthForm from "../components/AuthForm";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submit = (e) => {
        e.preventDefault();
        console.log(email, password);
        setEmail("");
        setPassword("");
    };
    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center gradient-background">
            <AuthForm
                name="Login"
                inputs={[
                    {
                        name: "Email",
                        type: "text",
                        value: email,
                        changeValue: (e) => setEmail(e.target.value),
                    },
                    {
                        name: "Password",
                        type: "password",
                        value: password,
                        changeValue: (e) => setPassword(e.target.value),
                    },
                ]}
                alternative={{
                    text: "Don't have an account?",
                    link: "/register",
                    linkText: "Sign up here",
                }}
                onSubmit={submit}
            />
        </div>
    );
}
