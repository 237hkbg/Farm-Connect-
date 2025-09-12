import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Leaf,
  ArrowRight,
  CheckCircle,
  User,
  MessageCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

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
              <MessageSquare className="w-10 h-10 text-green-900" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Have questions about FarmConnect? We're here to help you grow your agricultural journey. 
            Reach out to us anytime.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div className="text-green-700">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-3">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-3">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-3">Subject</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MessageCircle className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none backdrop-blur-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group flex items-center justify-center py-4 px-6 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-xl hover:from-green-500 hover:to-green-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-2">Send us an email and we'll respond within 24 hours</p>
                    <a href="mailto:support@farmconnect.com" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                      support@farmconnect.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-2">Speak directly with our support team</p>
                    <a href="tel:+234-800-FARM-001" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                      +234-800-FARM-001
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
                    <p className="text-gray-600 mb-2">Come see us at our headquarters</p>
                    <p className="text-green-600 font-semibold">
                      123 Agriculture Street<br />
                      Green Valley, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Business Hours</h3>
                    <p className="text-gray-600 mb-2">We're here to help during these hours</p>
                    <div className="text-green-600 font-semibold">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-100" />
                </div>
                <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-100 mb-1">How do I start selling on FarmConnect?</h4>
                  <p className="text-white/90 text-sm">Simply register as a farmer, verify your account, and start listing your products!</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-100 mb-1">Is there a fee to join?</h4>
                  <p className="text-white/90 text-sm">No, joining FarmConnect is completely free for both farmers and buyers.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-100 mb-1">How do I ensure product quality?</h4>
                  <p className="text-white/90 text-sm">All our farmers are verified and we have quality assurance processes in place.</p>
                </div>
              </div>
              <button className="mt-6 group flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <span>View All FAQs</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Immediate Help?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our support team is standing by to help you with any questions or issues you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <Phone className="w-5 h-5 mr-2" />
              <span>Call Support</span>
            </button>
            <button className="group flex items-center justify-center px-8 py-4 bg-yellow-400 text-green-900 font-bold rounded-xl hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>Live Chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}