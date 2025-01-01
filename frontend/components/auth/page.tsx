"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 m-4"
      >
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-200"
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-8 text-amber-800"
          >
            Welcome Back
          </motion.h2>

          <form className="space-y-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <label className="block text-amber-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-amber-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                placeholder="Enter your password"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              type="submit"
            >
              Login
            </motion.button>
          </form>

          <motion.div 
            className="mt-6 text-center text-amber-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Don't have an account?{' '}
            <Link href="/register" className="text-amber-600 font-semibold hover:underline">
              Register here
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;