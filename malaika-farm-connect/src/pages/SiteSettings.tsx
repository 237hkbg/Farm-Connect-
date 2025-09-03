import React from "react";

const SiteSettings: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>⚙️ Site Settings</h1>
      <form>
        <label>Platform Name:</label>
        <input type="text" placeholder="Enter site name" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <label>Admin Email:</label>
        <input type="email" placeholder="Enter admin email" style={{ display: "block", marginBottom: "20px", padding: "10px" }} />

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default SiteSettings;
