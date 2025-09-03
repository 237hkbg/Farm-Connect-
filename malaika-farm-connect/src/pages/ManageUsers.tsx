import React from "react";

const ManageUsers: React.FC = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>👥 Manage Users</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>User Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
              No users found yet.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
