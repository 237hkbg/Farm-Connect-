import React from "react";

const FarmerSettings: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>⚙️ Account Settings</h1>
      <form>
        <label>Full Name:</label>
        <input type="text" placeholder="Enter name" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <label>Email:</label>
        <input type="email" placeholder="Enter email" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <label>Password:</label>
        <input type="password" placeholder="Enter new password" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default FarmerSettings;

