// src/pages/BuyerOrders.tsx
import React from "react";

const BuyerOrders: React.FC = () => {
  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 8, color: "#333" }}>📦 My Orders</h1>
      <p style={{ marginBottom: 24, color: "#666" }}>
        You don’t have any orders yet. Place an order from the Market.
      </p>

      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: 16 }}>📝 Order History</h2>
        <p style={{ color: "#888" }}>
          ⚠️ No orders available. They will appear here once you place an order.
        </p>
      </div>
    </div>
  );
};

export default BuyerOrders;
