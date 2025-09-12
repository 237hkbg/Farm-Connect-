import React, { useEffect, useState, useContext } from 'react';
import { 
  BarChart3, 
  Users, 
  Package, 
  TrendingUp, 
  Plus, 
  Search, 
  Settings, 
  UserCheck, 
  ShoppingBag,
  Activity,
  DollarSign,
  Leaf,
  Eye,
  Trash2,
  X
} from 'lucide-react';
import API from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, login } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showProductModal, setShowProductModal] = useState(false);
  const [productForm, setProductForm] = useState({ name: '', price: '', description: '' });
  const [productLoading, setProductLoading] = useState(false);
  const [productError, setProductError] = useState('');
  const navigate = useNavigate();
  const role = user?.role || 'buyer';

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [statsRes, activityRes, userRes] = await Promise.all([
          API.get('/dashboard/stats'),
          API.get('/dashboard/activity'),
          user?.role === 'farmer' ? API.get(`/users/${user._id}`) : Promise.resolve({ data: user })
        ]);
        setStats(statsRes.data);
        setActivity(activityRes.data);
        // Update user earnings if farmer
        if (user?.role === 'farmer' && userRes.data) {
          login(userRes.data, localStorage.getItem('token'));
        }
      } catch (err) {
        setStats(null);
        setActivity([]);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  // Handlers for role-based actions
  const handleAddProduct = () => setShowProductModal(true);
  const handleBrowseProducts = () => navigate('/market');
  const handleManageUsers = () => navigate('/admin/users');
  const handleManageProducts = () => navigate('/admin/products');

  // Product form handlers
  const handleProductChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setProductLoading(true);
    setProductError('');
    try {
      await API.post('/products', {
        ...productForm,
        seller: user?._id,
      });
      setShowProductModal(false);
      setProductForm({ name: '', price: '', description: '' });
      // Optionally refresh stats/activity
      window.location.reload();
    } catch (err) {
      setProductError('Failed to add product.');
    }
    setProductLoading(false);
  };

  // Role-based actions
  const renderActions = () => {
    if (role === 'farmer') {
      return (
        <button
          className="group flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-500 hover:to-green-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-green-500/25"
          onClick={handleAddProduct}
        >
          <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
          Add New Product
        </button>
      );
    }
    if (role === 'buyer') {
      return (
        <button
          className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          onClick={handleBrowseProducts}
        >
          <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          Browse Products
        </button>
      );
    }
    if (role === 'admin') {
      return (
        <div className="flex gap-4">
          <button
            className="group flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-500 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            onClick={handleManageUsers}
          >
            <UserCheck className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Manage Users
          </button>
          <button
            className="group flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
            onClick={handleManageProducts}
          >
            <Settings className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Manage Products
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-emerald-200/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Welcome back{user?.name ? `, ${user.name}` : ''}!
                </h1>
                <p className="text-gray-600">Here's your platform overview</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>System Online</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Role-based actions */}
        <div className="flex justify-center md:justify-start">
          {renderActions()}
        </div>

        {/* Seller Earnings (Farmer) */}
        {role === 'farmer' && (
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-green-100">Total Earnings</h3>
                <p className="text-3xl font-bold mt-2">
                  {user?.earnings !== undefined ? `₦${user.earnings.toLocaleString()}` : '-'}
                </p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-green-100" />
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 bg-white/50 backdrop-blur-sm rounded-2xl">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
              <Leaf className="w-6 h-6 text-green-600 absolute top-5 left-5 animate-pulse" />
            </div>
            <p className="mt-4 text-green-600 font-semibold">Loading your dashboard...</p>
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:bg-white/80">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Total Users</p>
                    <p className="text-3xl font-bold text-green-700 mt-2">{stats?.totalUsers ?? '-'}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:bg-white/80">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Products Listed</p>
                    <p className="text-3xl font-bold text-blue-700 mt-2">{stats?.productsListed ?? '-'}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:bg-white/80">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Active Rentals</p>
                    <p className="text-3xl font-bold text-yellow-600 mt-2">{stats?.activeRentals ?? '-'}</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ShoppingBag className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:bg-white/80">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">Market Prices</p>
                    <p className="text-3xl font-bold text-purple-700 mt-2">{stats?.marketPricesTracked ?? '-'}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
                </div>
              </div>
              <div className="p-6">
                {activity.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500">No recent activity to display</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {activity.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-800 font-medium">{item.action}</span>
                        </div>
                        <span className="text-sm text-gray-500">{item.time}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-in">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>
              <button
                onClick={() => setShowProductModal(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <form onSubmit={handleProductSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={productForm.name}
                  onChange={handleProductChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter product name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Price (₦)</label>
                <input
                  type="number"
                  name="price"
                  value={productForm.price}
                  onChange={handleProductChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="0.00"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={productForm.description}
                  onChange={handleProductChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  rows="4"
                  placeholder="Describe your product..."
                  required
                />
              </div>
              {productError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {productError}
                </div>
              )}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                  onClick={() => setShowProductModal(false)}
                  disabled={productLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-500 hover:to-green-600 transition-all shadow-lg disabled:opacity-50"
                  disabled={productLoading}
                >
                  {productLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Adding...
                    </div>
                  ) : (
                    'Add Product'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Admin management pages
export function AdminUsers() {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    API.get('/users')
      .then(res => setUsers(res.data))
      .catch(() => setError('Failed to fetch users'))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user?')) return;
    try {
      await API.delete(`/users/${id}`);
      setUsers(users.filter(u => u._id !== id));
    } catch {
      setError('Failed to delete user');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Manage Users</h2>
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="p-6">
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                {error}
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {users.map(u => (
                    <tr key={u._id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-gray-800 font-medium">{u.name}</td>
                      <td className="px-6 py-4 text-gray-600">{u.email}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {u.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          className="flex items-center px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors text-sm font-medium"
                          onClick={() => handleDelete(u._id)}
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function AdminProducts() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    API.get('/products')
      .then(res => setProducts(res.data))
      .catch(() => setError('Failed to fetch products'))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await API.delete(`/products/${id}`);
      setProducts(products.filter(p => p._id !== id));
    } catch {
      setError('Failed to delete product');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Manage Products</h2>
            </div>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="p-6">
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                {error}
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Seller</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map(p => (
                    <tr key={p._id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-gray-800 font-medium">{p.name}</td>
                      <td className="px-6 py-4 text-gray-600 max-w-xs truncate">{p.description}</td>
                      <td className="px-6 py-4 text-gray-800 font-semibold">₦{p.price}</td>
                      <td className="px-6 py-4 text-gray-600">{p.seller?.name || p.seller?.email}</td>
                      <td className="px-6 py-4">
                        <button 
                          className="flex items-center px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors text-sm font-medium"
                          onClick={() => handleDelete(p._id)}
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}