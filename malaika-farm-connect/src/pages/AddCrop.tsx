import React, { useState } from "react";

const AddCrop: React.FC = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Crop Added: ${name}, Quantity: ${quantity}`);
    setName("");
    setQuantity(0);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>➕ Add Crop (Admin)</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Crop Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Quantity: </label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required />
        </div>
        <button type="submit" style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#28a745", color: "#fff", border: "none" }}>Add Crop</button>
      </form>
    </div>
  );
};

export default AddCrop;


