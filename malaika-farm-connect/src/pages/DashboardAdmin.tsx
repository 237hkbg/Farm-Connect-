import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardAdmin: React.FC = () => {
  const navigate = useNavigate();

  const btnStyle: React.CSSProperties = {
    width: "100%",
    padding: "20px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#28a745",
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
          "url('https://www.kindpng.com/picc/m/456-4565189_administration-cartoon-png-transparent-png.png')",
        backgroundSize: "auto 50%", // Medium size
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center", // Align left
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#155724" }}>
        👑 Admin Dashboard
      </h1>

      <div style={{ width: "100%", maxWidth: "400px" }}>
        <button style={btnStyle} onClick={() => navigate("/AdminViewCrops")}>
          🌱 View All Crops
        </button>
        <button style={btnStyle} onClick={() => navigate("/AddCrop")}>
          ➕ Add Crop
        </button>
        <button style={btnStyle} onClick={() => navigate("/ManageUsers")}>
          👥 Manage Users
        </button>
        <button style={btnStyle} onClick={() => navigate("/Reports")}>
          📊 View Reports
        </button>
        <button style={btnStyle} onClick={() => navigate("/SiteSettings")}>
          ⚙️ Site Settings
        </button>
      </div>
    </div>
  );
};

export default DashboardAdmin;



























