import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/Auth/login";
import Register from "./features/Auth/register";
import Dashboard, { AdminUsers, AdminProducts } from "./pages/Dashboard";
import Market from "./pages/Market";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/layout";
import Index from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/market" element={<Market />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;