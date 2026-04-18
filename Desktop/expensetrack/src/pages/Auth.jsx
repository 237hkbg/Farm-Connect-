import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, Wallet, ArrowRight } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { data, error } = isLogin 
        ? await signIn({ email, password })
        : await signUp({ email, password });

      if (error) throw error;
      
      // Successfully authenticated
      navigate('/');
    } catch (err) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex text-foreground">
      {/* Visual Side */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-accent/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 flex flex-col justify-center px-16 w-full">
          <div className="flex items-center space-x-3 mb-8">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">ExpenseTrack</h1>
          </div>
          <h2 className="text-5xl font-extrabold text-white leading-tight mb-6">
            Master your <br/>
            financial future.
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-md">
            Track expenses, analyze spending habits, and achieve your financial goals with our intuitive student expense tracker.
          </p>
          
          <div className="mt-12 flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary/20 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-xs text-white">✨</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/70 font-medium">Join 10,000+ happy students</p>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 relative">
        {/* Mobile Header elements */}
        <div className="absolute top-8 left-8 lg:hidden flex items-center space-x-2">
          <Wallet className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold text-primary">ExpenseTrack</span>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-muted-foreground">
              {isLogin 
                ? 'Enter your credentials to access your account.' 
                : 'Sign up to start managing your expenses.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 rounded-xl bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 transition-all duration-300">
                {error}
              </div>
            )}


            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-foreground/80">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 px-4 py-3 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none placeholder:text-muted-foreground"
                    placeholder="student@university.edu"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-foreground/80">Password</label>
                  {isLogin && (
                    <a href="#" className="text-xs text-primary hover:text-primary/80 font-medium transition-colors">
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 px-4 py-3 bg-muted/50 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none placeholder:text-muted-foreground"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 shadow-md shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed font-medium text-lg mt-8 group"
            >
              {loading ? (
                <span className="flex items-center space-x-2">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center w-full relative">
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-5 h-5 ml-2 absolute right-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </span>
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <p className="text-muted-foreground">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(null);
                }}
                className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 transition-all"
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
