import React from "react";

const SellerEarnings: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>💰 Earnings</h1>
      <p>Total Earnings: <strong>0</strong></p>
      <button style={{ padding: "10px 20px", marginTop: "20px" }}>
        Withdraw
      </button>
    </div>
  );
};

export default SellerEarnings;

