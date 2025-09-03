import React from "react";

const BuyerProfile: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>👤 My Profile</h1>
      <div style={{ marginBottom: "20px" }}>
        <div style={{
          width: "150px",
          height: "150px",
          border: "2px dashed gray",
          borderRadius: "50%",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          Upload Photo
        </div>
        <input type="file" />
      </div>
      <form>
        <label>Full Name:</label>
        <input type="text" placeholder="Enter name" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <label>Age:</label>
        <input type="number" placeholder="Enter age" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <label>Email:</label>
        <input type="email" placeholder="Enter email" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default BuyerProfile;

