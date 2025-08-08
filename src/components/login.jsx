import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar2 from './nav2';
import Footer from './footer';
import ScrollTop from './scroll_top';

const AuthForm = ({ isLogin, onToggle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="max-w-md w-full mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        {isLogin ? 'Welcome Back' : 'Create an Account'}
      </h2>

      <form className="space-y-4">
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          onClick={onToggle}
          className="text-yellow-500 font-semibold hover:underline"
        >
          {isLogin ? 'Register' : 'Login'}
        </button>
      </p>
    </motion.div>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
    <NavBar2/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <AuthForm isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
    </div>
      <ScrollTop/>
    
    <Footer/>
    </>
  );
};

export default AuthPage;
