import React, { useState } from "react";

const DashboardSeller: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const btnStyle: React.CSSProperties = {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#2196F3",
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
          "url('https://t4.ftcdn.net/jpg/08/13/64/07/360_F_813640771_s55b6SnRLsf2mrm0ebnlhmOuLY6o0uIj.jpg')", // Restored cartoon selling image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>🛒 Seller Dashboard</h1>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <button style={btnStyle} onClick={() => setActiveTab("addCrop")}>
          Add Crop
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("viewCrops")}>
          View My Crops
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("orders")}>
          Manage Orders
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("earnings")}>
          View Earnings
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("settings")}>
          Account Settings
        </button>
      </div>

      {/* Content Area */}
      <div
        style={{
          marginTop: "30px",
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        {activeTab === "addCrop" && (
          <div>
            <h2>Add Crop</h2>
            <input type="text" placeholder="Enter crop name" />
            <button style={actionBtn}>Upload Crop</button>
          </div>
        )}

        {activeTab === "viewCrops" && (
          <div>
            <h2>My Crops</h2>
            <button style={actionBtn}>Edit Crop</button>
            <button style={actionBtn}>Remove Crop</button>
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <h2>Orders</h2>
            <button style={actionBtn}>Confirm Order</button>
            <button style={actionBtn}>Cancel Order</button>
          </div>
        )}

        {activeTab === "earnings" && (
          <div>
            <h2>Earnings</h2>
            <button style={actionBtn}>View Transactions</button>
            <button style={actionBtn}>Request Payout</button>
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h2>Account Settings</h2>
            <button style={actionBtn}>Update Profile</button>
            <button style={actionBtn}>Change Password</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSeller;








