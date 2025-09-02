import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1920&q=80")`, // Full-screen farm landscape
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        color: "white",
        textShadow: "2px 2px 6px black",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          width: "100%",
          padding: "20px 40px",
          backgroundColor: "rgba(0,0,0,0.4)",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "left",
          backdropFilter: "blur(4px)",
        }}
      >
        FarmConnect
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>
          🌱 Welcome to FarmConnect
        </h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "40px" }}>
          Connecting farmers, buyers, and experts seamlessly
        </p>
        <button
          onClick={handleGetStarted}
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#28a745",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            const btn = e.currentTarget;
            btn.style.backgroundColor = "#218838";
            btn.style.transform = "scale(1.1)";
            btn.style.boxShadow = "0 6px 10px rgba(0,0,0,0.5)";
          }}
          onMouseOut={(e) => {
            const btn = e.currentTarget;
            btn.style.backgroundColor = "#28a745";
            btn.style.transform = "scale(1)";
            btn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;










