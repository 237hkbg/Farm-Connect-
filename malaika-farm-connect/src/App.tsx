import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

// Lazy-loaded pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

// Dashboards
const DashboardBuyer = lazy(() => import("./pages/DashboardBuyer"));
const DashboardFarmer = lazy(() => import("./pages/DashboardFarmer"));
const DashboardAdmin = lazy(() => import("./pages/DashboardAdmin"));

// Admin Pages
const ManageUsers = lazy(() => import("./pages/ManageUsers"));
const Reports = lazy(() => import("./pages/Reports"));
const SiteSettings = lazy(() => import("./pages/SiteSettings"));
const AdminViewCrops = lazy(() => import("./pages/AdminViewCrops"));
const ManageCrops = lazy(() => import("./pages/ManageCrops"));

// Seller Pages
const FarmerAddCrops = lazy(() => import("./pages/FarmerAddCrops"));
const FarmerViewCrops = lazy(() => import("./pages/FarmerViewCrops"));
const FarmerOrders = lazy(() => import("./pages/FarmerOrders"));
const FarmerEarnings = lazy(() => import("./pages/FarmerEarnings"));
const FarmerSettings = lazy(() => import("./pages/FarmerSettings"));

// Buyer Pages
const BuyerMarket = lazy(() => import("./pages/BuyerMarket"));
const BuyerViewCrops = lazy(() => import("./pages/BuyerViewCrops"));
const BuyerOrders = lazy(() => import("./pages/BuyerOrders"));
const BuyerProfile = lazy(() => import("./pages/BuyerProfile"));
const BuyerAdvice = lazy(() => import("./pages/BuyerAdvice"));
const BuyerPayment = lazy(() => import("./pages/BuyerPayment"));

// Other Pages
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App: React.FC = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/" || location.pathname === "/login"; // hide navbar on landing and login

  return (
    <div className="app-container">
      {!isLanding && <Navbar />}
      <div className="main-content">
        <div className="page-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Landing Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />

              {/* Dashboards */}
              <Route path="/dashboard-buyer" element={<DashboardBuyer />} />
              <Route path="/dashboard-Farmer" element={<DashboardFarmer />} />
              <Route path="/dashboard-admin" element={<DashboardAdmin />} />

              {/* Admin Pages */}
              <Route path="/ManageCrops" element={<ManageCrops />} />
              <Route path="/ManageUsers" element={<ManageUsers />} />
              <Route path="/Reports" element={<Reports />} />
              <Route path="/SiteSettings" element={<SiteSettings />} />
              <Route path="/AdminViewCrops" element={<AdminViewCrops />} />

              {/* Farmer Pages */}
              <Route path="/FarmerAddCrops" element={<FarmerAddCrops />} />
              <Route path="/FarmerViewCrops" element={<FarmerViewCrops />} />
              <Route path="/FarmerOrders" element={<FarmerOrders />} />
              <Route path="/FarmerEarnings" element={<FarmerEarnings />} />
              <Route path="/FarmerSettings" element={<FarmerSettings />} />

              {/* Buyer Pages */}
              <Route path="/BuyerMarket" element={<BuyerMarket />} />
              <Route path="/BuyerViewCrops" element={<BuyerViewCrops />} />
              <Route path="/BuyerOrders" element={<BuyerOrders />} />
              <Route path="/BuyerProfile" element={<BuyerProfile />} />
              <Route path="/BuyerAdvice" element={<BuyerAdvice />} />
              <Route path="/BuyerPayment" element={<BuyerPayment />} />

              {/* Other Pages */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />

              {/* 404 Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
