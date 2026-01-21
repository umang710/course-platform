import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import TrainerDashboard from "./pages/TrainerDashboard";
import TraineeDashboard from "./pages/TraineeDashboard";

export default function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  const handleLogin = (newRole) => {
    localStorage.setItem("role", newRole);
    setRole(newRole);
  };

  const handleLogout = () => {
    localStorage.clear();
    setRole(null);
  };

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />

      <Route
        path="/trainer"
        element={
          role === "trainer" ? (
            <TrainerDashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/trainee"
        element={
          role === "trainee" ? (
            <TraineeDashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
