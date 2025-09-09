import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    userType: 'agriculteur'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirm || !formData.userType) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    
    if (formData.password !== formData.confirm) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    // Simuler l'inscription réussie
    // Ici on pourrait envoyer les données au backend
    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        userType: formData.userType,
        registeredAt: new Date().toISOString()
      })
    }).then(() => {
      // Connecter automatiquement après inscription
      login();
      // Rediriger selon le type d'utilisateur
      if (formData.userType === 'acheteur') {
        navigate('/market');
      } else {
        navigate('/dashboard');
      }
    }).catch(() => {
      setError('Erreur lors de l\'inscription. Veuillez réessayer.');
    });
  };

  return (
    <div className="page register register-bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Inscription</h2>
        {error && <div style={{color:'#c62828', marginBottom:'0.7rem'}}>{error}</div>}
        
        <div className="form-group">
          <label htmlFor="userType">Type d'utilisateur</label>
          <select 
            id="userType" 
            name="userType" 
            value={formData.userType} 
            onChange={handleChange} 
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
          <label htmlFor="name">Nom complet</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Votre nom" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="exemple@mail.com" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Créer un mot de passe" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirm">Confirmer le mot de passe</label>
          <input 
            type="password" 
            id="confirm" 
            name="confirm" 
            placeholder="Répétez le mot de passe" 
            value={formData.confirm}
            onChange={handleChange}
            required 
          />
        </div>
        
        <button type="submit" className="login-btn">S'inscrire</button>
        <p className="login-link">Déjà un compte ? <a href="/login">Connectez-vous</a></p>
      </form>
    </div>
  );
};

export default Register;
