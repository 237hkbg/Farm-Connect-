import React from "react";

const ManageCrops: React.FC = () => {
  const cropPlaceholderStyle: React.CSSProperties = {
    border: "2px dashed #bbb",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    marginLeft: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>🌱 Manage Crops</h1>
      <p>Approve or reject crops submitted by sellers.</p>

      {/* Placeholder for crop 1 */}
      <div style={cropPlaceholderStyle}>
        <span>Crop Name Placeholder</span>
        <div>
          <button style={{ ...buttonStyle, backgroundColor: "#28a745", color: "white" }}>
            Approve
          </button>
          <button style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "white" }}>
            Reject
          </button>
        </div>
      </div>

      {/* Placeholder for crop 2 */}
      <div style={cropPlaceholderStyle}>
        <span>Crop Name Placeholder</span>
        <div>
          <button style={{ ...buttonStyle, backgroundColor: "#28a745", color: "white" }}>
            Approve
          </button>
          <button style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "white" }}>
            Reject
          </button>
        </div>
      </div>

      {/* Add more placeholders as needed */}
    </div>
  );
};

export default ManageCrops;
