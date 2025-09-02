import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashboardBuyer from "./pages/DashboardBuyer";
import DashboardSeller from "./pages/DashboardSeller";
import DashboardAdmin from "./pages/DashboardAdmin";
import AddCrop from "./pages/AddCrop";
import ViewCrop from "./pages/ViewCrop";
import Market from "./pages/Market";
import Advice from "./pages/Advice";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import About from "./pages/About";

// New Admin Pages
import ManageUsers from "./pages/ManageUsers";
import Reports from "./pages/Report";
import SiteSettings from "./pages/SiteSettings";
import ViewCrops from "./pages/ViewCrop";

const App: React.FC = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/"; // landing page

  return (
    <div className="app-container">
      {/* Show Navbar only if not landing page */}
      {!isLanding && <Navbar />}
      <div className="main-content">
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard-buyer" element={<DashboardBuyer />} />
            <Route path="/dashboard-seller" element={<DashboardSeller />} />
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
            <Route path="/add-crop" element={<AddCrop />} />
            <Route path="/view-crop" element={<ViewCrop />} />
            <Route path="/market" element={<Market />} />
            <Route path="/advice" element={<Advice />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* Admin interactive pages */}
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/site-settings" element={<SiteSettings />} />
            <Route path="/view-crops" element={<ViewCrops />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

