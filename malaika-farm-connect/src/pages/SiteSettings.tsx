import React, { useState } from "react";

const SiteSettings: React.FC = () => {
  const [siteName, setSiteName] = useState("FarmConnect");
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Site Name: ${siteName}, Maintenance Mode: ${maintenanceMode}`);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>⚙️ Site Settings</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Site Name: </label>
          <input value={siteName} onChange={(e) => setSiteName(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Maintenance Mode: </label>
          <input type="checkbox" checked={maintenanceMode} onChange={(e) => setMaintenanceMode(e.target.checked)} />
        </div>
        <button type="submit" style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#28a745", color: "#fff", border: "none" }}>Save Settings</button>
      </form>
    </div>
  );
};

export default SiteSettings;


