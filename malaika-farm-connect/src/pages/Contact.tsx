import React from "react";

const Contact: React.FC = () => {
  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    margin: "0 auto",
    gap: "15px",
  };

  const inputStyle: React.CSSProperties = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>📞 Contact Us</h1>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        We’d love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form style={formStyle}>
        <input style={inputStyle} type="text" placeholder="Your Name" required />
        <input style={inputStyle} type="email" placeholder="Your Email" required />
        <input style={inputStyle} type="text" placeholder="Subject" required />
        <textarea style={inputStyle} placeholder="Message" rows={6} required></textarea>
        <button style={buttonStyle} type="submit">Send Message</button>
      </form>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h3>Other ways to reach us:</h3>
        <p>Email: support@farmconnect.com</p>
        <p>Phone: +237 678 28 85 90</p>
        <p>Address: Yaoundé, Cameroon</p>
      </div>
    </div>
  );
};

export default Contact;

