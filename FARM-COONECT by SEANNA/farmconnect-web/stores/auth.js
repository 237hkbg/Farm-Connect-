import { create } from 'zustand';

// role: 'buyer' | 'seller' | 'admin' (alias: 'customer' -> 'buyer')
function normalizeRole(role) {
  if (role === 'customer') return 'buyer';
  if (role === 'farmer') return 'seller';
  return role;
}

export const useAuth = create((set) => ({
  user: null, // { id, name, role }
  login: (email, _password) =>
    set({ user: { id: 'u1', name: email?.split('@')[0] || 'User', role: 'seller' } }),
  logout: () => set({ user: null }),
  setRole: (role) => set((s) => (s.user ? { user: { ...s.user, role: normalizeRole(role) } } : s)),
}));
