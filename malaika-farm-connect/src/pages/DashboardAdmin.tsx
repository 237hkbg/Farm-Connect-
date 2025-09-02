import React from "react";

const DashboardAdmin: React.FC = () => {
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
      <h1 style={{ marginBottom: "20px", color: "#155724" }}>
        👑 Admin Dashboard
      </h1>

      {/* Centered Image */}
      <img
        src="https://www.kindpng.com/picc/m/456-4565189_administration-cartoon-png-transparent-png.png"
        alt="Admin Cartoon"
        style={{
          width: "250px",
          height: "250px",
          objectFit: "contain",
          marginBottom: "30px",
        }}
      />

      {/* Options Section */}
      <div style={{ width: "100%", maxWidth: "600px" }}>
        {/* View Crops */}
        <button style={btnStyle}>🌱 View All Crops</button>
        <div style={placeholderBox}>
       
        </div>

        {/* Add Crop */}
        <button style={btnStyle}>➕ Add Crop</button>
        <div style={placeholderBox}>
       
        </div>

        {/* Manage Users */}
        <button style={btnStyle}>👥 Manage Users</button>
        <div style={placeholderBox}>
       
        </div>

        {/* Reports */}
        <button style={btnStyle}>📊 View Reports</button>
        <div style={placeholderBox}>
       
        </div>

        {/* Settings */}
        <button style={btnStyle}>⚙️ Site Settings</button>
        <div style={placeholderBox}>
       
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;























