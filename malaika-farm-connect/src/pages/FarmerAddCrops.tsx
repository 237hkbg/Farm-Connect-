import React from "react";

const FarmerAddCrops: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>➕ Add Crop</h1>
      <form>
        <label>Crop Name:</label>
        <input type="text" placeholder="Enter crop name" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <label>Quantity:</label>
        <input type="number" placeholder="Enter quantity" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <label>Price:</label>
        <input type="number" placeholder="Enter price" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <button type="submit">Add Crop</button>
      </form>
    </div>
  );
};

export default FarmerAddCrops;

