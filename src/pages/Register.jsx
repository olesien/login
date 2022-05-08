import { useState, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { useRegister } from "../hooks/reqresAPI";

export default function Register({ updateUser }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [inputErr, setInputErr] = useState({ name: "", details: "" });
    const mutation = useRegister();

    const { error, data: user } = mutation;
    const validateInput = () => {
        let errCount = 0;

        //password repeat
        if (password !== repeatPassword) {
            setInputErr({
                name: "Repeat Password",
                details: "The passwords don't match!",
            });
            errCount++;
        }

        //password
        if (password.length < 4) {
            setInputErr({
                name: "Password",
                details: "Password is too short! (min 4)",
            });
            errCount++;
        }

        //name
        if (name.length < 4) {
            setInputErr({
                name: "Name",
                details: "Name is too short! (min 4)",
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

        //If there are more than 0 errors, prevent form from being sent
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
            setName("");
            setPassword("");
            setRepeatPassword("");
            setInputErr({ name: "", details: "" });
        }
    };

    //When changes to user prop are detected, update the local storage.
    useEffect(() => {
        if (user) {
            localStorage.setItem(
                "login-user-token",
                JSON.stringify(user.data.token)
            );
            updateUser(user);
        }
    }, [updateUser, user]);
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
                        error: inputErr,
                    },
                    {
                        name: "Name",
                        type: "text",
                        value: name,
                        changeValue: (e) => setName(e.target.value),
                        error: inputErr,
                    },
                    {
                        name: "Password",
                        type: "password",
                        value: password,
                        changeValue: (e) => setPassword(e.target.value),
                        error: inputErr,
                    },
                    {
                        name: "Repeat Password",
                        type: "password",
                        value: repeatPassword,
                        changeValue: (e) => setRepeatPassword(e.target.value),
                        error: inputErr,
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
