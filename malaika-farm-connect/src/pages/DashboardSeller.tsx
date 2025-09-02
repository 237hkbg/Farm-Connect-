import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardSeller: React.FC = () => {
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
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/08/13/64/07/360_F_813640771_s55b6SnRLsf2mrm0ebnlhmOuLY6o0uIj.jpg')",
        backgroundSize: "auto 50%", // Medium height
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center", // Left-aligned
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#1e3a8a" }}>
        🛒 Seller Dashboard
      </h1>

      <div style={{ width: "100%", maxWidth: "400px" }}>
        <button style={btnStyle} onClick={() => navigate("/SellerAddCrop")}>
          ➕ Add Crop
        </button>
        <button style={btnStyle} onClick={() => navigate("/SellerViewCrops")}>
          🌱 View My Crops
        </button>
        <button style={btnStyle} onClick={() => navigate("/SellerOrders")}>
          📦 Manage Orders
        </button>
        <button style={btnStyle} onClick={() => navigate("/SellerEarnings")}>
          💰 View Earnings
        </button>
        <button style={btnStyle} onClick={() => navigate("/SellerSettings")}>
          ⚙️ Account Settings
        </button>
      </div>
    </div>
  );
};

export default DashboardSeller;


