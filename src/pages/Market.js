import React, { useEffect, useState } from 'react';

const Market = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/market')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="market-main">
      <h2>Marché - Toutes les commandes</h2>
      <div className="market-orders-list">
        {orders.length === 0 && (
          <div style={{ color: '#888', padding: '2rem' }}>Aucune commande pour le moment.</div>
        )}
        {orders.map((order, idx) => (
          <div className="market-order-card" key={idx}>
            <div className="img-placeholder">Photo</div>
            <div className="market-order-info">
              <div className="market-product">{order.product}</div>
              <div className="market-buyer">Acheteur : {order.buyer}</div>
              <div className={`market-status market-status-${order.status?.toLowerCase()}`}>Statut : {order.status}</div>
              <div className="market-date">Date : {order.date}</div>
              <div className="market-price">Prix : {order.price} FCFA</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;