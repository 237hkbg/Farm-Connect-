import React from "react";

const AdminViewCrops: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>🌱 Admin - View All Crops</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>Crop Name</th>
            <th>Seller</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
              No crops available yet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewCrops;
