import { create } from 'zustand'; // Import the zustand library for state management

// This function generates a unique ID for each crop
function genId() {
  // 'c_' is just a prefix, Math.random() creates a random string, Date.now() adds the current time
  return 'c_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// This store manages the crops data using zustand
// status: 'pending' | 'approved' | 'rejected' means each crop can have one of these states
export const useCrops = create((set, get) => ({
  items: [], // This array will hold all the crop objects

  // Function to add a new crop
  addCrop: ({ name, quantity, price, location = 'Unknown', seller = 'You' }) =>
    set((s) => ({
      items: [
        {
          id: genId(), // Unique id for the crop
          name, // Name of the crop
          quantity: Number(quantity), // Convert quantity to a number
          price: Number(price), // Convert price to a number
          location, // Location of the crop (default is 'Unknown')
          seller, // Seller's name (default is 'You')
          status: 'pending', // New crops start as 'pending'
        },
        ...s.items, // Add the new crop to the beginning of the array
      ],
    })),

  // Function to approve a crop (change its status to 'approved')
  approve: (id) =>
    set((s) => ({
      items: s.items.map((c) =>
        c.id === id ? { ...c, status: 'approved' } : c // If the crop id matches, update its status
      ),
    })),

  // Function to reject a crop (change its status to 'rejected')
  reject: (id) =>
    set((s) => ({
      items: s.items.map((c) =>
        c.id === id ? { ...c, status: 'rejected' } : c // If the crop id matches, update its status
      ),
    })),

  // Function to get all approved crops
  approved: () => get().items.filter((c) => c.status === 'approved'),

  // Function to get all pending crops
  pending: () => get().items.filter((c) => c.status === 'pending'),
}));
