import { useState, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { useLogin } from "../hooks/reqresAPI";

export default function Login({ updateUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const mutation = useLogin();
    const { error, data: user } = mutation;
    console.log(mutation);
    const submit = (e) => {
        e.preventDefault();
        console.log(email, password);
        mutation.mutate({ email, password });
        setEmail("");
        setPassword("");
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
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center gradient-background">
            {/* {isLoading && <p>Loading</p>} */}

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
                error={error}
            />
        </div>
    );
}
