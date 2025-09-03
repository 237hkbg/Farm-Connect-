import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

// Dashboards
import DashboardBuyer from "./pages/DashboardBuyer";
import DashboardSeller from "./pages/DashboardSeller";
import DashboardAdmin from "./pages/DashboardAdmin";

// Admin Pages
import ManageUsers from "./pages/ManageUsers";
import Reports from "./pages/Reports";
import SiteSettings from "./pages/SiteSettings";
import AdminViewCrops from "./pages/AdminViewCrops";
import ManageCrops from "./pages/ManageCrops"; // ✅ added ManageCrops

// Seller Pages
import SellerAddCrop from "./pages/SellerAddCrops";
import SellerViewCrops from "./pages/SellerViewCrops";
import SellerOrders from "./pages/SellerOrders";
import SellerEarnings from "./pages/SellerEarnings";
import SellerSettings from "./pages/SellerSettings";

// Buyer Pages
import BuyerMarket from "./pages/BuyerMarket";
import BuyerViewCrops from "./pages/BuyerViewCrops";
import BuyerOrders from "./pages/BuyerOrders";
import BuyerProfile from "./pages/BuyerProfile";
import BuyerAdvice from "./pages/BuyerAdvice";
import BuyerPayment from "./pages/BuyerPayment"; // ✅ added BuyerPayment

// Other Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App: React.FC = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/"; // landing page

  return (
    <div className="app-container">
      {!isLanding && <Navbar />}
      <div className="main-content">
        <div className="page-container">
          <Routes>
            {/* Landing Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Dashboards */}
            <Route path="/dashboard-buyer" element={<DashboardBuyer />} />
            <Route path="/dashboard-seller" element={<DashboardSeller />} />
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />

            {/* Admin Pages */}
            <Route path="/ManageCrops" element={<ManageCrops />} /> {/* ✅ ManageCrops */}
            <Route path="/ManageUsers" element={<ManageUsers />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/SiteSettings" element={<SiteSettings />} />
            <Route path="/AdminViewCrops" element={<AdminViewCrops />} />

            {/* Seller Pages */}
            <Route path="/SellerAddCrop" element={<SellerAddCrop />} />
            <Route path="/SellerViewCrops" element={<SellerViewCrops />} />
            <Route path="/SellerOrders" element={<SellerOrders />} />
            <Route path="/SellerEarnings" element={<SellerEarnings />} />
            <Route path="/SellerSettings" element={<SellerSettings />} />

            {/* Buyer Pages */}
            <Route path="/BuyerMarket" element={<BuyerMarket />} />
            <Route path="/BuyerViewCrops" element={<BuyerViewCrops />} />
            <Route path="/BuyerOrders" element={<BuyerOrders />} />
            <Route path="/BuyerProfile" element={<BuyerProfile />} />
            <Route path="/BuyerAdvice" element={<BuyerAdvice />} />
            <Route path="/BuyerPayment" element={<BuyerPayment />} /> {/* ✅ BuyerPayment */}

            {/* Other Pages */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;





