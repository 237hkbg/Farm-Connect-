import React from "react";

const Market: React.FC = () => {
  const crops = [
    { id: 1, name: "Tomatoes", price: 3, seller: "Farmer Joe" },
    { id: 2, name: "Potatoes", price: 2, seller: "Farmer Smith" },
    { id: 3, name: "Corn", price: 4, seller: "Farmer Lee" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>🌾 Market</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Crop</th>
            <th style={thTdStyle}>Price ($)</th>
            <th style={thTdStyle}>Seller</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop) => (
            <tr key={crop.id}>
              <td style={thTdStyle}>{crop.id}</td>
              <td style={thTdStyle}>{crop.name}</td>
              <td style={thTdStyle}>{crop.price}</td>
              <td style={thTdStyle}>{crop.seller}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thTdStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "center",
};

export default Market;

