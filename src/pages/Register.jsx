import { useState, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { useRegister } from "../hooks/reqresAPI";

export default function Register({ updateUser }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const mutation = useRegister();

    const { error, data: user } = mutation;

    const submit = (e) => {
        e.preventDefault();
        mutation.mutate({ email, password });
        setEmail("");
        setName("");
        setPassword("");
        setRepeatPassword("");
    };
    useEffect(() => {
        if (user) {
            console.log("Storing item!");
            console.log(user);
            localStorage.setItem(
                "login-user-token",
                JSON.stringify(user.data.token)
            );
            updateUser(user);
        }
    }, [updateUser, user]);
    console.log(user);
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
                error={error}
            />
        </div>
    );
}
