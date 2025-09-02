import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); // toggle between login/register
  const [role, setRole] = useState("buyer");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to the correct dashboard based on role
    if (role === "buyer") navigate("/dashboard-buyer");
    else if (role === "seller") navigate("/dashboard-seller");
    else navigate("/dashboard-admin");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (regPassword !== regConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // After registration, redirect to dashboard
    if (role === "buyer") navigate("/dashboard-buyer");
    else if (role === "seller") navigate("/dashboard-seller");
    else navigate("/dashboard-admin");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          minWidth: "350px",
          maxWidth: "420px",
          padding: "30px",
        }}
      >
        {/* Toggle Buttons */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <button
            onClick={() => setIsLogin(true)}
            style={{
              padding: "10px 20px",
              marginRight: "5px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: isLogin ? "#28a745" : "#ccc",
              color: isLogin ? "#fff" : "#333",
            }}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: !isLogin ? "#28a745" : "#ccc",
              color: !isLogin ? "#fff" : "#333",
            }}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          // --- LOGIN FORM ---
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "10px" }}>
              Role:
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
              </select>
            </label>

            <label style={{ marginBottom: "10px", marginTop: "10px" }}>
              Email:
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </label>

            <label style={{ marginBottom: "20px", marginTop: "10px" }}>
              Password:
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </label>

            <button
              type="submit"
              style={{
                padding: "12px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Login
            </button>
          </form>
        ) : (
          // --- REGISTER FORM ---
          <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "10px" }}>
              Role:
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
              </select>
            </label>

            <label style={{ marginBottom: "10px", marginTop: "10px" }}>
              Name:
              <input
                type="text"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </label>

            <label style={{ marginBottom: "10px", marginTop: "10px" }}>
              Email:
              <input
                type="email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </label>

            <label style={{ marginBottom: "10px", marginTop: "10px" }}>
              Password:
              <input
                type="password"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </label>

            <label style={{ marginBottom: "20px", marginTop: "10px" }}>
              Confirm Password:
              <input
                type="password"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </label>

            <button
              type="submit"
              style={{
                padding: "12px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;







