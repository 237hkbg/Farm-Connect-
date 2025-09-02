import React from "react";

const DashboardBuyer: React.FC = () => {
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
        backgroundColor: "#f9fafb",
      }}
    >
      {/* Title */}
      <h1 style={{ marginBottom: "20px", color: "#e65100" }}>
        🛒 Buyer Dashboard
      </h1>

      {/* Centered Image */}
      <img
        src="https://static.vecteezy.com/system/resources/previews/003/133/843/non_2x/shopping-boy-and-buyer-vector.jpg"
        alt="Buyer Cartoon"
        style={{
          width: "250px",
          height: "250px",
          objectFit: "contain",
          marginBottom: "30px",
        }}
      />

      {/* Options Section */}
      <div style={{ width: "100%", maxWidth: "600px" }}>
        {/* Market */}
        <button style={btnStyle}>🛍️ Browse Market</button>
        <div style={placeholderBox}>
       
        </div>

        {/* View Crops */}
        <button style={btnStyle}>🌱 View Crops</button>
        <div style={placeholderBox}>
       
        </div>

        {/* Orders */}
        <button style={btnStyle}>📦 My Orders</button>
        <div style={placeholderBox}>
       
        </div>

        {/* Profile */}
        <button style={btnStyle}>👤 Profile</button>
        <div style={placeholderBox}>
      
        </div>

        {/* Advice */}
        <button style={btnStyle}>💡 Get Advice</button>
        <div style={placeholderBox}>
       
        </div>
      </div>
    </div>
  );
};

export default DashboardBuyer;










