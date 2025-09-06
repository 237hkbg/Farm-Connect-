import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound: React.FC = () => {
  const location = useLocation();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: 12 }}>404 - Page Not Found</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        The path "{location.pathname}" does not exist.
      </p>
      <Link
        to="/"
        style={{
          padding: "12px 20px",
          borderRadius: 8,
          backgroundColor: "#2e7d32",
          color: "white",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
