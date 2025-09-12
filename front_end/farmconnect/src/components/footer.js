import React from "react";
import { Mail, Facebook, Twitter, Instagram, MapPin, Phone, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-emerald-900 via-green-900 to-green-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-400 to-green-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full blur opacity-70"></div>
                <div className="relative h-12 w-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white/20 shadow-lg flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Farm<span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">Connect</span>
                </h2>
                <p className="text-white/70 text-sm font-medium">Growing Together</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Bridging the gap between farmers and consumers through technology, 
              fostering sustainable agriculture and community growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors">
                <MapPin size={16} className="text-yellow-400" />
                <span className="text-sm">Douala, Littoral Region</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors">
                <Phone size={16} className="text-yellow-400" />
                <span className="text-sm">+237 6XX XXX XXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Marketplace", href: "/market" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Farmers Portal", href: "/farmers" },
                { name: "Buyer's Guide", href: "/guide" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-yellow-300 transition-all duration-300 text-sm relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute -left-2 top-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400 group-hover:w-4 transition-all duration-300 transform -translate-y-1/2"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Support & Legal
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Help Center", href: "/help" },
                { name: "FAQ", href: "/faq" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
                { name: "Refund Policy", href: "/refunds" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-yellow-300 transition-all duration-300 text-sm relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute -left-2 top-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400 group-hover:w-4 transition-all duration-300 transform -translate-y-1/2"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Stay Connected
            </h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-white/70 text-sm mb-4">
                Get fresh updates about seasonal produce and farming tips.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400/50 focus:bg-white/15 transition-all duration-300"
                />
                <button className="px-4 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-semibold rounded-r-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300">
                  <Mail size={16} />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/70 text-sm mb-4">Follow us for updates</p>
              <div className="flex space-x-3">
                {[
                  { icon: Mail, href: "mailto:support@farmconnect.com", label: "Email" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="group w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-yellow-400/20 hover:to-green-400/20 hover:border-yellow-400/50 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={18} className="text-white/70 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-2 text-white/60">
            <p className="text-sm">
              © {currentYear} FarmConnect. All rights reserved.
            </p>
            <span className="text-white/40">•</span>
            <p className="text-sm flex items-center space-x-1">
              <span>Made with</span>
              <Heart size={12} className="text-red-400 fill-current" />
              <span>for farmers</span>
            </p>
          </div>
          
          {/* Additional Links */}
          <div className="flex items-center space-x-6 text-sm text-white/60">
            <a href="/accessibility" className="hover:text-yellow-300 transition-colors">
              Accessibility
            </a>
            <a href="/sitemap" className="hover:text-yellow-300 transition-colors">
              Sitemap
            </a>
            <a href="/security" className="hover:text-yellow-300 transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}