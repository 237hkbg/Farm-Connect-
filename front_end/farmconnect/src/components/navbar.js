import React from 'react';
import { Link } from 'react-router-dom';
import '../components/assests/css/navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">FarmConnect</Link>
    </div>
    <ul className="navbar-links">
      <li><Link to="/dashboard">Tableau de bord</Link></li>
      <li><Link to="/market">Marché</Link></li>
      <li><Link to="/equipment">Équipement</Link></li>
      <li><Link to="/advice">Conseils</Link></li>
      <li><Link to="/prices">Prix</Link></li>
      <li><Link to="/login">Connexion</Link></li>
      <li><Link to="/register">Inscription</Link></li>
    </ul>
  </nav>
);

export default Navbar;
