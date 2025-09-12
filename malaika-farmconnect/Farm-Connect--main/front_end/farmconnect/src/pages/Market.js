import React, { useEffect, useState, useContext } from 'react';
import { ShoppingCart, Search, Filter, Star, MapPin, User, X, Plus, Minus, Truck, Shield, Clock } from 'lucide-react';
import API from '../api/axios';
import { AuthContext } from '../context/AuthContext';

const Market = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [orderModal, setOrderModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState('');
  const [orderSuccess, setOrderSuccess] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Fruits', 'Vegetables', 'Grains', 'Dairy', 'Other'];

  useEffect(() => {
    API.get('/products')
      .then(res => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch(() => {
        setProducts([]);
        setFilteredProducts([]);
      });
  }, []);

  useEffect(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category (only if your backend has category field)
    if (selectedCategory !== 'All' && products.length > 0 && products[0].category) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory]);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setOrderModal(true);
    setQuantity(1);
    setOrderError('');
    setOrderSuccess('');
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setOrderLoading(true);
    setOrderError('');
    setOrderSuccess('');
    
    // Validate product ID
    if (!selectedProduct || !selectedProduct._id) {
      setOrderError('Invalid product selected. Please try again.');
      setOrderLoading(false);
      return;
    }
    
    // Log product ID for debugging
    console.log('Ordering product with ID:', selectedProduct._id);
    
    try {
      const response = await API.post('/orders', {
        product: selectedProduct._id,
        quantity,
      });
      setOrderSuccess('Order placed successfully!');
      setOrderModal(false);
    } catch (err) {
      // Detailed error logging
      let errorMsg = 'Failed to place order.';
      if (err.response) {
        if (err.response.data?.message) errorMsg = err.response.data.message;
        else if (err.response.status === 404) errorMsg = `Product not found (ID: ${selectedProduct._id}). Please refresh and try again.`;
        else if (err.response.status === 401) errorMsg = 'You must be logged in as a buyer to place an order.';
        else errorMsg = `Error ${err.response.status}: ${err.response.statusText}`;
      } else if (err.message) {
        errorMsg = err.message;
      }
      setOrderError(errorMsg);
      // Log product ID and error to console for debugging
      console.error('Order error for product ID', selectedProduct._id, err);
    }
    setOrderLoading(false);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Fresh Products <span className="text-yellow-300">Marketplace</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Discover fresh, organic products directly from local farmers
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 p-2">
                <Search className="w-5 h-5 text-white/60 ml-4" />
                <input
                  type="text"
                  placeholder="Search for fresh products..."
                  className="flex-1 bg-transparent text-white placeholder-white/60 px-4 py-2 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center space-x-2 bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Section - Only show if products have category field */}
        {isFilterOpen && products.length > 0 && products[0]?.category && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="flex flex-wrap gap-3">
              <span className="text-gray-700 font-semibold">Categories:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-green-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Fast Delivery</div>
              <div className="text-sm text-gray-600">Within 24 hours</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Quality Guaranteed</div>
              <div className="text-sm text-gray-600">100% organic products</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Fresh Daily</div>
              <div className="text-sm text-gray-600">Harvested today</div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🛒</div>
              <div className="text-gray-500 text-lg">No products available</div>
              <div className="text-gray-400">Try adjusting your search</div>
            </div>
          )}
          
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-5xl mb-2">📦</div>
                  <div className="text-gray-500 text-sm">Photo</div>
                </div>
              </div>

              <div className="p-6">
                {/* Product Info */}
                <div className="mb-4">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {product.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-green-600 mb-4">
                  {product.price} FCFA
                </div>

                {/* Seller Info */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <User className="w-4 h-4" />
                  <span>Seller: {product.seller?.name || product.seller?.email || 'Unknown'}</span>
                </div>

                {/* Order Button */}
                {user?.role === 'buyer' && (
                  <button
                    className="w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-green-500/25 transform hover:scale-[1.02]"
                    onClick={() => handleOrderClick(product)}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Order</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Modal */}
      {orderModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Order Product</h2>
              <button
                onClick={() => setOrderModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                disabled={orderLoading}
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {/* Product Info */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <label className="block text-gray-700 font-semibold mb-2">Product</label>
                  <div className="font-semibold text-lg text-gray-900">
                    {selectedProduct?.name}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Quantity</label>
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                    <button
                      type="button"
                      onClick={decrementQuantity}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={e => setQuantity(Number(e.target.value))}
                      className="text-xl font-bold text-gray-900 px-4 bg-transparent text-center w-20 focus:outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={incrementQuantity}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Error/Success Messages */}
                {orderError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
                    {orderError}
                  </div>
                )}
                {orderSuccess && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 flex items-center space-x-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{orderSuccess}</span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    onClick={() => setOrderModal(false)}
                    disabled={orderLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    disabled={orderLoading}
                    onClick={handleOrderSubmit}
                  >
                    {orderLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Ordering...</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        <span>Place Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Market;