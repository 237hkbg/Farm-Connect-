

import React from 'react';
import { SalesLineChart, GainsBarChart } from '../Auth/charts';


const Dashboard = () => (
  <div className="dashboard-main">
    <div className="dashboard-header">
      <h2>Tableau de bord Agriculteur</h2>
      <span className="dashboard-welcome">Bienvenue, <b>Agriculteur</b> !</span>
    </div>
    <div className="dashboard-grid">
      {/* Statistiques principales */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-title">Total des ventes</div>
          <div className="stat-value">1 250 000 FCFA</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Gains disponibles</div>
          <div className="stat-value">320 000 FCFA</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Annonces actives</div>
          <div className="stat-value">4</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Note globale</div>
          <div className="stat-value">4.7 <span className="star">★</span></div>
        </div>
      </div>

      {/* Diagrammes dynamiques */}
      <div className="dashboard-section dashboard-charts">
        <h3>Évolution des ventes & gains</h3>
        <div className="dashboard-charts-flex">
          <div className="chart-box"><SalesLineChart /></div>
          <div className="chart-box"><GainsBarChart /></div>
        </div>
      </div>

      {/* Annonces de l'agriculteur */}
      <div className="dashboard-section dashboard-annonces">
        <h3>Mes annonces</h3>
        <div className="annonces-list">
          <div className="annonce-item">
            <div className="img-placeholder">Photo</div>
            <div>
              <div className="annonce-title">Maïs jaune (100 kg)</div>
              <div className="annonce-status">En ligne</div>
            </div>
          </div>
          <div className="annonce-item">
            <div className="img-placeholder">Photo</div>
            <div>
              <div className="annonce-title">Tomate fraîche (50 kg)</div>
              <div className="annonce-status">En attente</div>
            </div>
          </div>
          <div className="annonce-item">
            <div className="img-placeholder">Photo</div>
            <div>
              <div className="annonce-title">Manioc (200 kg)</div>
              <div className="annonce-status">Vendu</div>
            </div>
          </div>
        </div>
        <button className="dashboard-btn">Créer une nouvelle annonce</button>
      </div>

      {/* Historique des ventes */}
      <div className="dashboard-section dashboard-sales">
        <h3>Bilan de ventes</h3>
        <table className="sales-table">
          <thead>
            <tr>
              <th>Produit</th>
              <th>Quantité</th>
              <th>Prix total</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maïs jaune</td>
              <td>100 kg</td>
              <td>25 000 FCFA</td>
              <td>01/09/2025</td>
            </tr>
            <tr>
              <td>Manioc</td>
              <td>200 kg</td>
              <td>36 000 FCFA</td>
              <td>28/08/2025</td>
            </tr>
            <tr>
              <td>Tomate</td>
              <td>50 kg</td>
              <td>20 000 FCFA</td>
              <td>20/08/2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notations et avis */}
      <div className="dashboard-section dashboard-ratings">
        <h3>Notations & avis</h3>
        <div className="ratings-list">
          <div className="rating-item">
            <span className="star">★</span> 5.0 — "Très satisfait de la qualité !" <span className="rating-user">(Acheteur : Paul)</span>
          </div>
          <div className="rating-item">
            <span className="star">★</span> 4.5 — "Livraison rapide, bon service." <span className="rating-user">(Acheteur : Amina)</span>
          </div>
          <div className="rating-item">
            <span className="star">★</span> 4.7 — "Produits frais et bien emballés." <span className="rating-user">(Acheteur : Jean)
            </span>
          </div>
        </div>
      </div>

      {/* Zone de discussion */}
      <div className="dashboard-section dashboard-chat">
        <h3>Zone de discussion</h3>
        <div className="chat-box">
          <div className="chat-messages">
            <div className="chat-message chat-message-buyer">
              <span className="chat-user">Acheteur :</span> Bonjour, le maïs est-il encore disponible ?
            </div>
            <div className="chat-message chat-message-farmer">
              <span className="chat-user">Vous :</span> Oui, il me reste 80 kg. Voulez-vous en réserver ?
            </div>
            <div className="chat-message chat-message-buyer">
              <span className="chat-user">Acheteur :</span> Oui, je prends 50 kg. Merci !
            </div>
          </div>
          <form className="chat-input-form">
            <input type="text" className="chat-input" placeholder="Écrire un message..." disabled value="" />
            <button type="submit" className="chat-send-btn" disabled>Envoyer</button>
          </form>
          <div className="chat-info">(Zone de discussion simulée pour l’instant)</div>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="dashboard-section dashboard-actions">
        <h3>Actions rapides</h3>
        <div className="actions-list">
          <button className="dashboard-btn">Retirer mes gains</button>
          <button className="dashboard-btn">Voir mes annonces</button>
          <button className="dashboard-btn">Demander un conseil</button>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
