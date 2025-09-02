import React from "react";

const ViewCrop: React.FC = () => {
  const myCrops = [
    { id: 1, name: "Carrots", quantity: 20 },
    { id: 2, name: "Lettuce", quantity: 15 },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>🌿 My Crops</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Crop</th>
            <th style={thTdStyle}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {myCrops.map((crop) => (
            <tr key={crop.id}>
              <td style={thTdStyle}>{crop.id}</td>
              <td style={thTdStyle}>{crop.name}</td>
              <td style={thTdStyle}>{crop.quantity}</td>
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

export default ViewCrop;




