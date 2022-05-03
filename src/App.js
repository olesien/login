import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
    const loggedIn = true;
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Routes>
                    {loggedIn ? (
                        <>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="*"
                                element={<Navigate to="/" replace />}
                            />
                        </>
                    ) : (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
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
