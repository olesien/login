import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<p className="p-12">Welcome home</p>}
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
