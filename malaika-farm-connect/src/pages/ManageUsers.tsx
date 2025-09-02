import React from "react";

const ManageUsers: React.FC = () => {
  const users = [
    { id: 1, name: "John Doe", role: "Buyer" },
    { id: 2, name: "Jane Smith", role: "Seller" },
    { id: 3, name: "Admin One", role: "Admin" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>👥 Manage Users</h1>
      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Role</th>
            <th style={thTdStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={thTdStyle}>{user.id}</td>
              <td style={thTdStyle}>{user.name}</td>
              <td style={thTdStyle}>{user.role}</td>
              <td style={thTdStyle}>
                <button style={actionBtn}>Change Role</button>
                <button style={actionBtn}>Remove</button>
              </td>
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

const actionBtn: React.CSSProperties = {
  margin: "0 5px",
  padding: "5px 10px",
  borderRadius: "5px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

export default ManageUsers;


