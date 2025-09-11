
import './App.css';
import './components/assests/css/navbar.css'
import './components/assests/css/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Market from './components/pages/Market';
import Equipment from './components/pages/Equipment';
import Advice from './components/pages/Advice';
import Prices from './components/pages/Prices';
import { AuthProvider } from './components/Auth/auth';
import PrivateRoute from './components/Auth/PrivateRoute';
import Navbar from './components/navbar';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/market" element={<PrivateRoute><Market /></PrivateRoute>} />
            <Route path="/equipment" element={<PrivateRoute><Equipment /></PrivateRoute>} />
            <Route path="/advice" element={<PrivateRoute><Advice /></PrivateRoute>} />
            <Route path="/prices" element={<PrivateRoute><Prices /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
