import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardBuyer: React.FC = () => {
  const navigate = useNavigate();

  const btnStyle: React.CSSProperties = {
    width: "100%",
    padding: "20px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#FF9800",
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
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/003/133/843/non_2x/shopping-boy-and-buyer-vector.jpg')",
        backgroundSize: "auto 50%", // Medium height
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center", // Left-aligned
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#e65100" }}>
        🛒 Buyer Dashboard
      </h1>

      <div style={{ width: "100%", maxWidth: "400px" }}>
        <button style={btnStyle} onClick={() => navigate("/BuyerMarket")}>
          🛍️ Browse Market
        </button>
        <button style={btnStyle} onClick={() => navigate("/BuyerViewCrops")}>
          🌱 View Crops
        </button>
        <button style={btnStyle} onClick={() => navigate("/BuyerOrders")}>
          📦 My Orders
        </button>
        <button style={btnStyle} onClick={() => navigate("/BuyerProfile")}>
          👤 Profile
        </button>
        <button style={btnStyle} onClick={() => navigate("/BuyerAdvice")}>
          💡 Get Advice
        </button>
      </div>
    </div>
  );
};

export default DashboardBuyer;


