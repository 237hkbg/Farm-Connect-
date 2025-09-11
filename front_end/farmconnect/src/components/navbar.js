import React from 'react';
import { Link } from 'react-router-dom';
import '../components/assests/css/navbar.css'

const Navbar = () => {
  const [language, setLanguage] = React.useState('fr');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // You can add logic here to update the app language
  };

  return (
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
      <div className="navbar-language">
        <label htmlFor="language-select">Langue:</label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
