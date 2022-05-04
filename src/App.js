import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
    console.log("init");
    const [user, setUser] = useState(localStorage.getItem("login-user-token"));
    console.log(user);
    const updateUser = (newUser) => {
        setUser(newUser);
    };
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Routes>
                    {user && user !== "undefined" ? (
                        <>
                            <Route
                                path="/"
                                element={<Home updateUser={updateUser} />}
                            />
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />
                        </>
                    ) : (
                        <>
                            <Route
                                path="/login"
                                element={<Login updateUser={updateUser} />}
                            />
                            <Route
                                path="/register"
                                element={<Register updateUser={updateUser} />}
                            />
                            <Route
                                path="*"
                                element={<Navigate to="/login" replace />}
                            />
                        </>
                    )}
                </Routes>
            </div>
        </QueryClientProvider>
    );
}

export default App;
