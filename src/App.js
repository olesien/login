import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
    const loggedIn = false;
    return (
        <div className="App">
            <Routes>
                {loggedIn ? (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
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
    );
}

export default App;
