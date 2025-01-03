'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [apiMessage, setApiMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setApiMessage('');

    if (!formData.email || !formData.password) {
      setApiMessage('Both email and password are required.');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setApiMessage('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('    /api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        // Redirect or update state after successful login
      } else {
        setApiMessage(data.error || 'Login failed. Please check your credentials.');
        console.error('Login failed:', data);
      }
    } catch (error) {
      setApiMessage('An error occurred. Please try again.');
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
            url('/jaipuri-bg.svg')
          `,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border-2 border-pink-100">
          <div className="relative px-8 py-12">
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-100 rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-yellow-100 rounded-full -translate-x-16 translate-y-16" />

            <motion.div
              className="relative text-center mb-12"
              variants={itemVariants}
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="mt-4 text-lg text-orange-600">
                Log in to your account
              </p>
            </motion.div>

            {apiMessage && (
              <motion.div
                className={`mt-4 p-3 rounded-md text-center ${
                  apiMessage.includes('success') ? 'text-green-600' : 'text-red-600'
                }`}
                variants={itemVariants}
              >
                {apiMessage}
              </motion.div>
            )}

            <motion.form
              onSubmit={handleSubmit}
              className="relative grid grid-cols-1 gap-6"
            >
              {['email', 'password'].map((field) => (
                <input
                  key={field}
                  name={field}
                  type={field === 'password' ? 'password' : 'text'}
                  placeholder={`Enter your ${field}`}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-md"
                />
              ))}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </motion.button>

              <div className="text-center mt-4">
                <Link href="/forgot-password" className="text-orange-600 hover:underline">
                  Forgot Password?
                </Link>
                <p className="mt-2 text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/register" className="text-orange-600 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
