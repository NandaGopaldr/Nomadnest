import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]); // Stores registered users

  return (
    <Router>
      <Routes>
        {/* Authentication Form */}
        <Route
          path="/"
          element={!isAuthenticated ? <AuthForm onAuth={() => setIsAuthenticated(true)} users={users} setUsers={setUsers} /> : <Navigate to="/dashboard" />}
        />

        {/* Dashboard */}
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />

        {/* Profile Page */}
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
