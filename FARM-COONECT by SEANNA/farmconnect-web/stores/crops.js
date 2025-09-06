import { create } from 'zustand';

function genId() {
  return 'c_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// status: 'pending' | 'approved' | 'rejected'
export const useCrops = create((set, get) => ({
  items: [],
  addCrop: ({ name, quantity, price, location = 'Unknown', seller = 'You' }) =>
    set((s) => ({
      items: [
        { id: genId(), name, quantity: Number(quantity), price: Number(price), location, seller, status: 'pending' },
        ...s.items,
      ],
    })),
  approve: (id) => set((s) => ({ items: s.items.map((c) => (c.id === id ? { ...c, status: 'approved' } : c)) })),
  reject: (id) => set((s) => ({ items: s.items.map((c) => (c.id === id ? { ...c, status: 'rejected' } : c)) })),
  approved: () => get().items.filter((c) => c.status === 'approved'),
  pending: () => get().items.filter((c) => c.status === 'pending'),
}));
