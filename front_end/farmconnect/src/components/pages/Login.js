import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('agriculteur');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !userType) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/users');
      const users = await res.json();
      const found = users.find(u => u.email === email && u.userType === userType && u.password === password);
      if (found) {
        login();
        if (userType === 'acheteur') {
          navigate('/market');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError('Identifiants ou type d\'utilisateur incorrect.');
      }
    } catch {
      setError('Erreur de connexion au serveur.');
    }
  };

  return (
    <div className="page login login-bg">
      <div className="login-side-info">
        <img src="/logo192.png" alt="Logo FarmConnect" className="login-logo-large" />
        <h1 className="login-welcome">Bienvenue sur <span className="fc-green">FarmConnect</span></h1>
        <p className="login-desc">
          Connectez-vous pour accéder à votre tableau de bord personnalisé, consulter les prix en temps réel, louer des équipements agricoles, vendre vos récoltes et recevoir des conseils adaptés à votre région et à vos cultures.
        </p>
        <ul className="login-benefits">
          <li><span role="img" aria-label="Sécurité">🔒</span> Vos données sont protégées et confidentielles.</li>
          <li><span role="img" aria-label="Support">🤝</span> Assistance dédiée pour chaque agriculteur.</li>
          <li><span role="img" aria-label="Mobile">📱</span> Accès facile sur mobile et ordinateur.</li>
          <li><span role="img" aria-label="Réseau">🌍</span> Rejoignez un réseau d’agriculteurs et d’acheteurs partout au Cameroun.</li>
        </ul>
        <div className="login-quote">
          <span className="quote-mark">“</span>
          <span>La technologie au service de l’agriculture pour un avenir plus vert et plus rentable.</span>
        </div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Connexion</h2>
        {error && <div style={{color:'#c62828', marginBottom:'0.7rem'}}>{error}</div>}
        <div className="form-group">
          <label htmlFor="userType">Type d'utilisateur</label>
          <select 
            id="userType" 
            name="userType" 
            value={userType} 
            onChange={e => setUserType(e.target.value)} 
            required
            style={{
              padding: '0.7rem 1rem',
              border: '1.5px solid #c8e6c9',
              borderRadius: '7px',
              fontSize: '1rem',
              background: '#f9fbe7',
              cursor: 'pointer'
            }}
          >
            <option value="agriculteur">🌾 Agriculteur / Vendeur</option>
            <option value="acheteur">🛒 Acheteur</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" id="email" name="email" placeholder="exemple@mail.com" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" placeholder="Votre mot de passe" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="login-btn">Se connecter</button>
        <p className="login-link">Pas de compte ? <a href="/register">Inscrivez-vous</a></p>
      </form>
    </div>
  );
};

export default Login;
