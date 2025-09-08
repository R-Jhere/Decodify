import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Home, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGoogleSignIn = async () => {
    // Backend functionality will be implemented later
    console.log('Google signup clicked');
  };

  const handleBackToHome = () => {
    navigate('/home');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900 px-4 relative">
      {/* Backdrop Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm z-10"></div>

      {/* Main Signup Content (Behind Backdrop) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className=" border-gray-800 backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-md w-full text-white relative z-0"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-3xl font-bold text-red-400 mb-2 text-center"
        >
          Create Account
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-gray-400 text-center mb-6"
        >
          Join our cybersecurity training platform
        </motion.p>

        <form className="space-y-5">
          {/* Name */}
          <motion.div>
            <label className="text-sm font-medium mb-1 block">Full Name</label>
            <div className="flex items-center bg-gray-900 border border-gray-700 rounded px-3 py-2 transition-all duration-300 focus-within:border-red-500">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>
          </motion.div>

          {/* Email */}
          <motion.div>
            <label className="text-sm font-medium mb-1 block">Email Address</label>
            <div className="flex items-center bg-gray-900 border border-gray-700 rounded px-3 py-2 transition-all duration-300 focus-within:border-red-500">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="bg-transparent outline-none text-white w-full"
              />
            </div>
          </motion.div>

          {/* Password */}
          <motion.div>
            <label className="text-sm font-medium mb-1 block">Password</label>
            <div className="flex items-center bg-gray-900 border border-gray-700 rounded px-3 py-2 transition-all duration-300 focus-within:border-red-500">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-transparent outline-none text-white w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 focus:outline-none hover:text-white transition"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>

          {/* Regular Sign Up Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 rounded-lg transition-colors"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Google Sign Up */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400 mb-3">Or sign up with</p>
          <div className="flex justify-center">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </div>
        </div>

        <motion.p
          className="mt-6 text-center text-sm text-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Already have an account?{' '}
          <a href="/login" className="underline hover:text-red-300 transition">
            Log in
          </a>
        </motion.p>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-red-500/30 rounded-2xl p-8 max-w-md w-full text-white shadow-2xl shadow-red-500/20"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={handleClosePopup}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Warning Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  <AlertCircle className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-red-400 mb-4">
                  Account Registration
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  You've accessed the signup page! This is where new users can create their accounts to access advanced features and track their progress through our cybersecurity training modules.
                </p>
                <p className="text-sm text-gray-400 mb-8">
                  For now, you can explore all our training games without creating an account!
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleBackToHome}
                    className="flex-1 group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Back to Home
                  </button>
                  <button
                    onClick={() => navigate('/games')}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Explore Games
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}