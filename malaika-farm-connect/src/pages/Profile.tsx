import React from "react";

const Profile: React.FC = () => {
  const user = { name: "John Doe", email: "john@example.com", role: "Buyer" };

  return (
    <div style={{ padding: "40px" }}>
      <h1>👤 Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <button onClick={() => alert("Profile updated")} style={btnStyle}>Update Profile</button>
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
};

export default Profile;

