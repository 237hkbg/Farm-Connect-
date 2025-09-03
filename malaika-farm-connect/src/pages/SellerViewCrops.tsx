import React from "react";

const SellerViewCrops: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>🌱 My Crops</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>Crop</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4} style={{ textAlign: "center", padding: "20px" }}>
              No crops added yet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SellerViewCrops;

