import React from "react";

const DashboardSeller: React.FC = () => {
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

  const placeholderBox: React.CSSProperties = {
    marginTop: "15px",
    height: "120px",
    border: "2px dashed #bbb",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#666",
    fontSize: "16px",
    backgroundColor: "rgba(255,255,255,0.7)",
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
        backgroundColor: "#f0f4f8",
      }}
    >
      {/* Title */}
      <h1 style={{ marginBottom: "20px", color: "#1e3a8a" }}>
        🛒 Seller Dashboard
      </h1>

      {/* Centered Image */}
      <img
        src="https://t4.ftcdn.net/jpg/08/13/64/07/360_F_813640771_s55b6SnRLsf2mrm0ebnlhmOuLY6o0uIj.jpg"
        alt="Seller Cartoon"
        style={{
          width: "250px",
          height: "250px",
          objectFit: "contain",
          marginBottom: "30px",
        }}
      />

      {/* Options Section */}
      <div style={{ width: "100%", maxWidth: "600px" }}>
        {/* Add Crop */}
        <button style={btnStyle}>➕ Add Crop</button>
       
        {/* View Crops */}
        <button style={btnStyle}>🌱 View My Crops</button>
       
        {/* Orders */}
        <button style={btnStyle}>📦 Manage Orders</button>
        
        {/* Earnings */}
        <button style={btnStyle}>💰 View Earnings</button>
       

        {/* Settings */}
        <button style={btnStyle}>⚙️ Account Settings</button>
       
      </div>
    </div>
  );
};

export default DashboardSeller;
