import React, { useEffect, useState } from 'react';

const BASE_ORDERS = [
  {
    product: "Maïs jaune (100 kg)",
    buyer: "Paul",
    status: "Payé",
    date: "01/09/2025",
    price: "25000"
  },
  {
    product: "Tomate fraîche (50 kg)",
    buyer: "Amina",
    status: "En attente",
    date: "02/09/2025",
    price: "20000"
  },
  {
    product: "Manioc (200 kg)",
    buyer: "Jean",
    status: "Annulée",
    date: "28/08/2025",
    price: "36000"
  },
  {
    product: "Riz local (30 kg)",
    buyer: "Fatou",
    status: "Payé",
    date: "25/08/2025",
    price: "12000"
  }
];

const Home = () => {
  const [orders, setOrders] = useState([]);

  // Charger les commandes depuis le backend (orders.json)
  useEffect(() => {
    fetch('http://localhost:5000/api/market')
      .then(res => res.json())
      .then(data => {
        // Si le backend est vide, injecte les commandes de base
        if (!data || data.length === 0) {
          // Ajoute les commandes de base dans le backend
          BASE_ORDERS.forEach(order => {
            fetch('http://localhost:5000/api/market', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(order)
            });
          });
          setOrders(BASE_ORDERS);
        } else {
          setOrders(data);
        }
      });
  }, []);

  return (
    <div className="home-marketplace-layout">
      {/* Sidebar */}
      <aside className="home-sidebar">
        <div className="sidebar-logo">
          <img src="/logo192.png" alt="FarmConnect logo" />
          <span>FarmConnect</span>
        </div>
        <nav className="sidebar-menu">
          <ul>
            <li>Marché</li>
            <li>Location d'équipement</li>
            <li>Conseils agricoles</li>
            <li>Prix en temps réel</li>
            <li>Voir mes gains</li>
          </ul>
        </nav>
        <div className="sidebar-section">
          <h4>Catégories</h4>
          <ul>
            <li>Céréales</li>
            <li>Légumes</li>
            <li>Fruits</li>
            <li>Racines & tubercules</li>
            <li>Équipements</li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main className="home-main-content">
        {/* Top bar */}
        <div className="home-topbar">
          <input className="home-search" type="text" placeholder="Rechercher un produit, un service..." />
          <div className="home-user-info">
            <img src="/logo192.png" alt="Profil" className="user-avatar" />
            <span>Bonjour, Agriculteur !</span>
          </div>
        </div>

        {/* Section Marché : Affichage des demandes */}
        <section className="home-orders">
          <h3>Demandes du Marché</h3>
          <div className="market-orders-list">
            {orders.length === 0 && (
              <div style={{ color: '#888', padding: '2rem' }}>Aucune commande pour le moment.</div>
            )}
            {Array.isArray(orders) && orders.map((order, idx) => (
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
        </section>

        {/* Reste du contenu (offres, deals, suggestions) */}
        <section className="home-offers">
          <div className="offer-card main-offer">
            <h2>Offre Spéciale : <span className="fc-green">Location de tracteur à -30%</span></h2>
            <p>Profitez de la location d’équipement moderne à prix réduit pour booster vos récoltes cette saison !</p>
          </div>
          <div className="offer-card">
            <h3>Planification IA des cultures</h3>
            <p>Découvrez quelles cultures planter selon votre région et la saison grâce à l’intelligence artificielle.</p>
          </div>
          <div className="offer-card">
            <h3>Prix du jour</h3>
            <p>Maïs : 250 FCFA/kg | Manioc : 180 FCFA/kg | Tomate : 400 FCFA/kg</p>
          </div>
        </section>

        <section className="home-deals">
          <h3>Deals du jour <span className="deals-timer">20:48:12 restants</span></h3>
          <div className="deals-grid">
            <div className="deal-item">
              <div className="img-placeholder">Photo</div>
              <span>Sac de riz local</span>
              <span className="deal-price">12 000 FCFA</span>
            </div>
            <div className="deal-item">
              <div className="img-placeholder">Photo</div>
              <span>Tracteur à louer</span>
              <span className="deal-price">5 000 FCFA/jour</span>
            </div>
            <div className="deal-item">
              <div className="img-placeholder">Photo</div>
              <span>Semences de maïs</span>
              <span className="deal-price">2 500 FCFA</span>
            </div>
            <div className="deal-item">
              <div className="img-placeholder">Photo</div>
              <span>Pompe d’irrigation</span>
              <span className="deal-price">8 000 FCFA</span>
            </div>
          </div>
        </section>

        <section className="home-suggestions">
          <h3>Suggestions pour vous</h3>
          <div className="suggestions-grid">
            <div className="suggestion-item">
              <div className="img-placeholder">Photo</div>
              <span>Engrais bio</span>
            </div>
            <div className="suggestion-item">
              <div className="img-placeholder">Photo</div>
              <span>Charrue manuelle</span>
            </div>
            <div className="suggestion-item">
              <div className="img-placeholder">Photo</div>
              <span>Filet anti-oiseaux</span>
            </div>
            <div className="suggestion-item">
              <div className="img-placeholder">Photo</div>
              <span>Arrosoir 10L</span>
            </div>
          </div>
        </section>
      </main>

      {/* Right sidebar (optional) */}
      <aside className="home-rightbar">
        <div className="rightbar-section">
          <h4>Vu récemment</h4>
          <ul>
            <li>Sac de riz local</li>
            <li>Tracteur à louer</li>
            <li>Engrais bio</li>
          </ul>
        </div>
        <div className="rightbar-section">
          <h4>Populaire</h4>
          <ul>
            <li>Maïs jaune</li>
            <li>Pompe d’irrigation</li>
            <li>Tomate</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Home;