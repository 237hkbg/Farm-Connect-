import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, PieChart, Tags, Settings, Wallet, LogOut, X } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../../context/AuthContext';

const navItems = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Analytics', path: '/analytics', icon: PieChart },
  { name: 'Categories', path: '/categories', icon: Tags },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const { user, signOut } = useAuth();
  
  return (
    <div className={clsx(
      "border-r border-border bg-card/95 backdrop-blur-xl flex flex-col h-full",
      "fixed md:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 w-64",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="p-6 flex items-center justify-between md:mb-0">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/20 p-2 rounded-xl">
            <Wallet className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight gradient-text">ExpenseTrack</span>
        </div>
        {setIsOpen && (
          <button 
            onClick={() => setIsOpen(false)} 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen && setIsOpen(false)}
            className={({ isActive }) => clsx(
              "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200",
              isActive 
                ? "bg-primary/10 text-primary font-medium shadow-sm" 
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 m-4 rounded-2xl bg-secondary/30 border border-border/50">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center text-white font-medium shadow-md">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-foreground truncate">{user?.email || 'User'}</p>
            <p className="text-xs text-muted-foreground">Premium Plan</p>
          </div>
        </div>
        <button
          onClick={() => signOut()}
          className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
