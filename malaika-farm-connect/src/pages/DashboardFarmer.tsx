import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardFarmer: React.FC = () => {
  const navigate = useNavigate();

  const btnStyle: React.CSSProperties = {
    width: "100%",
    padding: "20px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#2196F3",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#0a0c12ff" }}>
        🛒 Farmer Dashboard
      </h1>

      <div style={{ width: "100%", maxWidth: "400px" }}>
        <button style={btnStyle} onClick={() => navigate("/FarmerAddCrops")}>
          ➕ Add Crop
        </button>
        <button style={btnStyle} onClick={() => navigate("/FarmerViewCrops")}>
          🌱 View My Crops
        </button>
        <button style={btnStyle} onClick={() => navigate("/FarmerOrders")}>
          📦 Manage Orders
        </button>
        <button style={btnStyle} onClick={() => navigate("/FarmerEarnings")}>
          💰 View Earnings
        </button>
        <button style={btnStyle} onClick={() => navigate("/FarmerSettings")}>
          ⚙️ Account Settings
        </button>
      </div>
    </div>
  );
};

export default DashboardFarmer;



