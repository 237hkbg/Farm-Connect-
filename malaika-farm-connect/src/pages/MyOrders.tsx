import React, { useState } from "react";

interface Order {
  id: number;
  crop: string;
  quantity: number;
  price: number;
  seller: string;
}

const MyOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, crop: "Wheat", quantity: 10, price: 3, seller: "Farmer Joe" },
    { id: 2, crop: "Corn", quantity: 5, price: 4, seller: "Farmer Smith" },
  ]);

  const removeOrder = (id: number) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const totalPrice = orders.reduce((acc, order) => acc + order.quantity * order.price, 0);

  return (
    <div style={{ padding: "40px" }}>
      <h1>📦 My Orders</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Crop</th>
            <th style={thTdStyle}>Quantity</th>
            <th style={thTdStyle}>Price</th>
            <th style={thTdStyle}>Seller</th>
            <th style={thTdStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td style={thTdStyle}>{order.id}</td>
              <td style={thTdStyle}>{order.crop}</td>
              <td style={thTdStyle}>{order.quantity}</td>
              <td style={thTdStyle}>${order.price * order.quantity}</td>
              <td style={thTdStyle}>{order.seller}</td>
              <td style={thTdStyle}>
                <button onClick={() => removeOrder(order.id)} style={btnStyle}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{ marginTop: "20px" }}>Total Price: ${totalPrice}</h3>
      <button onClick={() => alert("Order Placed!")} style={{...btnStyle, marginTop: "10px"}}>Place Order</button>
    </div>
  );
};

const thTdStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "center",
};

const btnStyle: React.CSSProperties = {
  padding: "5px 10px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default MyOrders;

