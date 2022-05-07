import { useState, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { useLogin } from "../hooks/reqresAPI";

export default function Login({ updateUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputErr, setInputErr] = useState({ name: "", details: "" });
    const mutation = useLogin();
    const { error, data: user } = mutation;
    const validateInput = () => {
        let errCount = 0;

        //password
        if (password.length < 4) {
            setInputErr({
                name: "Password",
                details: "Password is too short! (min 4)",
            });
            errCount++;
        }

        //mail
        const emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.length < 4) {
            setInputErr({ name: "Email", details: "Email is too short!" });
            errCount++;
        } else if (!email.match(emailRegex)) {
            setInputErr({ name: "Email", details: "This email is invalid!" });
            errCount++;
        }

        if (errCount > 0) {
            return false;
        }
        return true;
    };
    const submit = (e) => {
        e.preventDefault();
        const goodInput = validateInput();
        if (goodInput) {
            mutation.mutate({ email, password });
            setEmail("");
            setPassword("");
            setInputErr({ name: "", details: "" });
        }
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
                        error: inputErr,
                    },
                    {
                        name: "Password",
                        type: "password",
                        value: password,
                        changeValue: (e) => setPassword(e.target.value),
                        error: inputErr,
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
