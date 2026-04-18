const API_BASE = '/api';

const apiFetch = async (path, options = {}) => {
  const token = localStorage.getItem('access_token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let errorMsg = 'An error occurred';
    try {
      const errorData = await response.json();
      errorMsg = errorData.error || errorMsg;
    } catch (e) {}
    throw new Error(errorMsg);
  }

  return response.json();
};

export const apiService = {
  auth: {
    signUp: async ({ email, password }) => {
      try {
        const data = await apiFetch('/auth/register', {
          method: 'POST',
          body: JSON.stringify({ email, password })
        });
        localStorage.setItem('access_token', data.session.access_token);
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
    signIn: async ({ email, password }) => {
      try {
        const data = await apiFetch('/auth/login', {
          method: 'POST',
          body: JSON.stringify({ email, password })
        });
        localStorage.setItem('access_token', data.session.access_token);
        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
    signOut: async () => {
      localStorage.removeItem('access_token');
      return { error: null };
    },
    getSession: async () => {
      try {
        const data = await apiFetch('/auth/me');
        return { data: { session: { user: data.user } }, error: null };
      } catch (error) {
        return { data: { session: null }, error: null };
      }
    }
  },
  transactions: {
    get: async () => {
      return apiFetch('/transactions');
    },
    insert: async (txn) => {
      return apiFetch('/transactions', {
        method: 'POST',
        body: JSON.stringify(txn)
      });
    },
    delete: async (id) => {
      return apiFetch(`/transactions/${id}`, {
        method: 'DELETE'
      });
    }
  }
};
