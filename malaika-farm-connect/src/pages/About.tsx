import React from "react";

const About: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>🌱 About FarmConnect</h1>
      <p style={{ maxWidth: "800px", margin: "0 auto 20px auto", lineHeight: "1.6" }}>
        FarmConnect is a digital platform designed to connect farmers and buyers efficiently. 
        Our goal is to simplify agricultural trading, improve access to fresh crops, and provide guidance for both farmers and consumers.
      </p>
      <p style={{ maxWidth: "800px", margin: "0 auto 20px auto", lineHeight: "1.6" }}>
        Through FarmConnect, farmers can showcase their produce, manage crop listings, and receive advice to optimize yields.
        Buyers can easily browse crops, place orders, and get recommendations based on market trends and crop quality.
      </p>
      <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
        Our platform also offers tools for admin management, reporting, and analytics to ensure smooth operations and transparency.
        FarmConnect is committed to building a sustainable and profitable agricultural ecosystem for everyone.
      </p>
    </div>
  );
};

export default About;

