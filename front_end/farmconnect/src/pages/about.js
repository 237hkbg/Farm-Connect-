import React from 'react';
import { 
  Leaf, 
  Users, 
  Target, 
  Heart, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-emerald-400 to-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center">
              <Leaf className="w-10 h-10 text-green-900" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            About <span className="text-yellow-300">FarmConnect</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between farmers and communities, fostering sustainable agriculture 
            and creating a thriving ecosystem for fresh, local produce.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering farmers and connecting communities through sustainable agriculture and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To create a world where sustainable farming thrives, local communities are nourished, 
              and farmers prosper through direct connections with consumers.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Sustainability, transparency, community support, and fostering meaningful relationships 
              between producers and consumers in the agricultural ecosystem.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Goal</h3>
            <p className="text-gray-600 leading-relaxed">
              To revolutionize agriculture by providing farmers with tools to reach wider markets 
              while ensuring consumers access to fresh, quality produce.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                FarmConnect was born from a simple observation: farmers work tirelessly to produce 
                quality food, yet often struggle to reach consumers directly. Meanwhile, communities 
                seek fresh, local produce but lack easy access to local farmers.
              </p>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Founded in 2024, we set out to bridge this gap by creating a digital platform that 
                connects farmers directly with their communities, eliminating intermediaries and 
                ensuring fair prices for both producers and consumers.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-white/90">Direct farmer connections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-white/90">Fair pricing for all</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
                    <div className="text-white/80">Farmers Connected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300 mb-2">2K+</div>
                    <div className="text-white/80">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300 mb-2">50+</div>
                    <div className="text-white/80">Cities Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
                    <div className="text-white/80">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose FarmConnect?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a marketplace - we're a community dedicated to sustainable agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Local Focus</h3>
            <p className="text-gray-600">
              Supporting local farmers and reducing food miles for fresher produce and stronger communities.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assured</h3>
            <p className="text-gray-600">
              Every farmer is verified and every product meets our high standards for freshness and quality.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Easy to Use</h3>
            <p className="text-gray-600">
              Simple, intuitive platform that makes buying and selling farm products effortless for everyone.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Fair Pricing</h3>
            <p className="text-gray-600">
              Transparent pricing that ensures farmers get fair compensation and buyers get great value.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Community Driven</h3>
            <p className="text-gray-600">
              Building relationships between farmers and consumers, creating a stronger agricultural community.
            </p>
          </div>

          <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainable Impact</h3>
            <p className="text-gray-600">
              Promoting environmentally responsible farming practices and reducing agricultural waste.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join the FarmConnect Community
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Whether you're a farmer looking to reach new customers or a consumer seeking fresh, 
            local produce, FarmConnect is here to help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <span>Start Farming with Us</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center justify-center px-8 py-4 bg-yellow-400 text-green-900 font-bold rounded-xl hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <span>Shop Fresh Produce</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}