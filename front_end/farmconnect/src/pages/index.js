import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Truck, Leaf, Star, ArrowRight, Play, Check, MapPin, Phone, Mail } from 'lucide-react';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      name: "Marie Fotso",
      role: "Vegetable Producer",
      location: "Douala",
      text: "FarmConnect allowed me to sell my products directly to consumers. My income increased by 40%!",
      rating: 5
    },
    {
      name: "Jean Baptiste",
      role: "Restaurant Chef",
      location: "Yaoundé", 
      text: "I now easily find fresh and local products. The quality is exceptional!",
      rating: 5
    },
    {
      name: "Aminata Sow",
      role: "Agricultural Cooperative",
      location: "Bafoussam",
      text: "Our cooperative tripled its sales thanks to this innovative platform.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Active Community",
      description: "Over 5000 farmers and buyers connected",
      stats: "5000+"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Delivery in less than 24h in major cities",
      stats: "24h"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Organic",
      description: "Certified organic and local products",
      stats: "100%"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account in just a few minutes"
    },
    {
      number: "02", 
      title: "Explore",
      description: "Discover available local products"
    },
    {
      number: "03",
      title: "Order",
      description: "Place your order and receive at home"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950 text-white min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-emerald-400 to-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Leaf className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">#1 Platform in Cameroon</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Welcome to <br />
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  FarmConnect
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-lg">
                Connecting farmers to consumers for sustainable agriculture. 
                Fresh products, fair trade, and community growth.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-yellow-400/25">
                  <span>Get Started Now</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-yellow-300 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">{feature.stats}</div>
                    <div className="text-sm text-white/70">{feature.title}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                  {/* Placeholder for your hero image */}
                   <img src="/assets/images/logo.jpg" alt="FarmConnect Hero" className="w-full h-full object-cover rounded-2xl" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full p-3 shadow-lg">
                  <Star className="w-6 h-6 text-green-900" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full p-3 shadow-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why choose <span className="text-green-600">FarmConnect</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An innovative platform that revolutionizes the way we consume agricultural products
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mb-6 text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                <div className="mt-6 flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={`py-20 bg-white transition-all duration-1000 ${isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How does it <span className="text-green-600">work</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to start your journey with FarmConnect
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-bold text-2xl mb-6 shadow-lg">
                    {step.number}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-gray-300 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`py-20 bg-gradient-to-br from-emerald-50 to-green-50 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What our <span className="text-green-600">users</span> say
            </h2>
            <p className="text-xl text-gray-600">
              Authentic testimonials from our community
            </p>
          </div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                  <div className="text-green-600 text-sm flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-green-500 scale-125' 
                      : 'bg-gray-300 hover:bg-green-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className={`py-20 bg-gradient-to-r from-emerald-800 via-green-700 to-emerald-800 text-white transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to join the <span className="text-yellow-300">agricultural revolution</span>?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of farmers and consumers who are already part of our community
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center space-x-2 px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-yellow-400/25">
              <span>Create my account</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex items-center justify-center space-x-2 px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-yellow-300 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <Phone className="w-5 h-5" />
              <span>Contact us</span>
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Free registration</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Secure payment</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;