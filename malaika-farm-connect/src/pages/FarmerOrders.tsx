import React from "react";

const FarmerOrders: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>📦 Orders</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>Order ID</th>
            <th>Buyer</th>
            <th>Crop</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4} style={{ textAlign: "center", padding: "20px" }}>
              No orders yet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FarmerOrders;

