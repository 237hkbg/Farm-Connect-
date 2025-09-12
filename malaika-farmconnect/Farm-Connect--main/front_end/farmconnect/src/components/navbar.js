import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleUserClick = () => {
    navigate("/dashboard");
  };

  return (
    <nav className="bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-800 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-12 w-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white/20 shadow-lg flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-white group-hover:text-yellow-300 transition-colors duration-300">
                  Farm<span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">Connect</span>
                </span>
                <span className="text-xs text-white/70 font-medium -mt-1">Growing Together</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Navigation Links */}
            <div className="flex items-center space-x-1 mr-8">
              <Link to="/market" className="relative px-4 py-2 text-white/90 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 group">
                <span className="relative z-10">Marketplace</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link to="/about" className="relative px-4 py-2 text-white/90 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 group">
                <span className="relative z-10">About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link to="/contact" className="relative px-4 py-2 text-white/90 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 group">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Auth Section */}
            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleUserClick}
                  className="flex items-center space-x-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-green-900">{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <span className="text-white font-medium">
                    Hi, {user.name}
                  </span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="px-6 py-2.5 text-white font-semibold rounded-full border-2 border-white/30 hover:border-yellow-300 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Login
                </Link>
                <Link to="/register" className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-6 h-0.5 bg-white transform transition duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`} />
                <span className={`absolute block w-6 h-0.5 bg-white transform transition duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute block w-6 h-0.5 bg-white transform transition duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden transition-all duration-300 ease-in-out">
          <div className="bg-gradient-to-b from-emerald-800/95 to-green-800/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {/* Mobile Navigation Links */}
              <Link to="/market" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300">
                Marketplace
              </Link>
              <Link to="/about" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300">
                About Us
              </Link>
              <Link to="/contact" className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300">
                Contact
              </Link>

              <div className="border-t border-white/10 pt-4 mt-4">
                {user ? (
                  <div className="space-y-3">
                    <button
                      onClick={handleUserClick}
                      className="flex items-center space-x-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 w-full cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center">
                        <span className="font-bold text-green-900">{user.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <span className="text-white font-medium">
                        Hi, {user.name}
                      </span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link to="/login" className="block w-full px-4 py-3 text-center text-white font-semibold rounded-lg border-2 border-white/30 hover:border-yellow-300 hover:bg-white/10 transition-all duration-300">
                      Login
                    </Link>
                    <Link to="/register" className="block w-full px-4 py-3 text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-bold rounded-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg">
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}