import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ensure you create this file for styling

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Placeholder login logic
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src="https://your-logo-url.com/deloitte.png" 
          alt="Deloitte Logo"
          className="logo"
        />
        <h2>iCMS Tax</h2>
        <p>Welcome to the iCMS group dashboard page</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
