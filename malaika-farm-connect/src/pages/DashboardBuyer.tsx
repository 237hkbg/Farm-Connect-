import React, { useState } from "react";

const DashboardBuyer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const btnStyle: React.CSSProperties = {
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#FF9800",
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
          "url('https://static.vecteezy.com/system/resources/previews/003/133/843/non_2x/shopping-boy-and-buyer-vector.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>🛒 Buyer Dashboard</h1>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <button style={btnStyle} onClick={() => setActiveTab("market")}>
          Browse Market
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("viewCrops")}>
          View Crops
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("orders")}>
          My Orders
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("profile")}>
          Profile
        </button>
        <button style={btnStyle} onClick={() => setActiveTab("advice")}>
          Get Advice
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
        {activeTab === "market" && (
          <div>
            <h2>Market</h2>
            <button style={actionBtn}>Buy Crop</button>
            <button style={actionBtn}>Add to Wishlist</button>
          </div>
        )}

        {activeTab === "viewCrops" && (
          <div>
            <h2>Available Crops</h2>
            <button style={actionBtn}>View Details</button>
            <button style={actionBtn}>Add to Cart</button>
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <h2>My Orders</h2>
            <button style={actionBtn}>Track Order</button>
            <button style={actionBtn}>Cancel Order</button>
          </div>
        )}

        {activeTab === "profile" && (
          <div>
            <h2>Profile</h2>
            <button style={actionBtn}>Edit Profile</button>
            <button style={actionBtn}>Change Password</button>
          </div>
        )}

        {activeTab === "advice" && (
          <div>
            <h2>Advice</h2>
            <button style={actionBtn}>Recommended Crops</button>
            <button style={actionBtn}>View Crop Tips</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardBuyer;









