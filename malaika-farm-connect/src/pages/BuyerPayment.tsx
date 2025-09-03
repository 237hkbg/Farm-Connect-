// src/pages/BuyerPayment.tsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BuyerPayment: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const action = (location.state as { action?: string })?.action;

  const handlePayment = () => {
    if (action === "buy-now") {
      navigate("/BuyerViewCrops", { state: { paid: true } });
    } else {
      navigate("/BuyerOrders", { state: { paid: true } });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>💳 Pay with Credit Card</h2>
        <p style={{ marginBottom: "20px" }}>
          Enter card details below (placeholder only).
        </p>
        <input type="text" placeholder="Card Number" style={inputStyle} />
        <input type="text" placeholder="Expiry Date" style={inputStyle} />
        <input type="text" placeholder="CVV" style={inputStyle} />
        <button onClick={handlePayment} style={payBtn}>
          ✅ Confirm Payment
        </button>
      </div>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const payBtn: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#28a745",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

export default BuyerPayment;
