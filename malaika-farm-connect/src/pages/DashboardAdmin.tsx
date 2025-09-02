import React, { useState } from "react";

const DashboardAdmin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const btnStyle: React.CSSProperties = {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  const actionBtn: React.CSSProperties = {
    padding: "10px 16px",
    margin: "6px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundImage:
          "url('https://www.kindpng.com/picc/m/456-4565189_administration-cartoon-png-transparent-png.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>👑 Admin Dashboard</h1>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <button style={btnStyle} onClick={() => setActiveTab("viewCrops")}>
          View All Crops
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("addCrop")}>
          Add Crop
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("manageUsers")}>
          Manage Users
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("reports")}>
          View Reports
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("settings")}>
          Site Settings
        </button>
      </div>

      {/* Content Panels */}
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        {activeTab === "viewCrops" && (
          <div>
            <h2>All Crops</h2>
            <button style={actionBtn}>Approve Crop 1</button>
            <button style={actionBtn}>Delete Crop 1</button>
          </div>
        )}

        {activeTab === "addCrop" && (
          <div>
            <h2>Add Crop</h2>
            <input type="text" placeholder="Enter crop name" />
            <button style={actionBtn}>Upload Crop</button>
          </div>
        )}

        {activeTab === "manageUsers" && (
          <div>
            <h2>Manage Users</h2>
            <button style={actionBtn}>Approve User</button>
            <button style={actionBtn}>Remove User</button>
          </div>
        )}

        {activeTab === "reports" && (
          <div>
            <h2>Reports</h2>
            <button style={actionBtn}>View Sales Report</button>
            <button style={actionBtn}>View Users Report</button>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h2>Site Settings</h2>
            <button style={actionBtn}>Update Profile</button>
            <button style={actionBtn}>Change Password</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardAdmin;






















