// src/pages/BuyerMarket.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BuyerMarket: React.FC = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // Redirect to credit card payment placeholder first
    navigate("/BuyerPayment", { state: { action: "buy-now" } });
  };

  const handlePlaceOrder = () => {
    // Add to orders, user must go manually to BuyerOrders later
    alert("✅ Crop added to your Orders. Go to 'My Orders' to complete payment.");
  };

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>🛍️ Browse Market</h1>
      <p style={{ marginBottom: "30px", color: "#666" }}>
        Select crops and proceed to buy or place an order.
      </p>

      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        {/* Placeholder crop card */}
        <div
          style={{
            borderBottom: "1px solid #eee",
            paddingBottom: "16px",
            marginBottom: "16px",
          }}
        >
          <h3>🌱 Placeholder Crop</h3>
          <p>Price: $XX</p>
          <button
            onClick={handleBuyNow}
            style={btnStyle}
          >
            💳 Buy Now
          </button>
          <button
            onClick={handlePlaceOrder}
            style={{ ...btnStyle, backgroundColor: "#FF9800" }}
          >
            📝 Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  padding: "12px 20px",
  marginRight: "10px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#4CAF50",
  color: "white",
  cursor: "pointer",
};

export default BuyerMarket;

