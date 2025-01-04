'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
<<<<<<< HEAD
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InputField } from '@/components/layout/inputBox';
import { signIn, useSession } from 'next-auth/react';
import { useRenderContext } from "@/contexts/RenderContext";
import Cookies from 'js-cookie';
=======
import { signIn } from 'next-auth/react'
>>>>>>> master

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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { triggerRender } = useRenderContext();
  const { data: session, status } = useSession();  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identifier: formData.email,
          password: formData.password
        }),
      }).then((res) => res.json());

<<<<<<< HEAD
      if (result.success) {
        toast.success('Logged in successfully!');
        setFormData({ email: '', password: '' });
        setTimeout(() => {
          triggerRender();
          router.push('/');
        }, 1100);
=======
      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
>>>>>>> master
      } else {
        toast.error('Login failed, please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
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

  const loginWithGoogle = async () => {
    try {
      await signIn('google', { redirect: true, callbackUrl: '/' });
      if (status === "authenticated" && session?.user?.token) {
        Cookies.set('token', session.user.token, { expires: 7,secure:false,httpOnly:false });
        toast.success('Logged in successfully!');
        triggerRender();
        router.push('/');
      } else if (status === "authenticated" && !session?.user?.token) {
        toast.error(session?.user?.message || 'Login failed, please try again.');
      }
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token!=undefined) {
      triggerRender();
      router.push('/');
    }
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
            url('/jaipuri-bg.svg')`,
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
        <div className="bg-white/80 shadow-2xl rounded-3xl overflow-hidden border-2 border-pink-100">
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

            <motion.form
              onSubmit={handleSubmit}
              className="relative grid grid-cols-1 gap-6"
            >
              <InputField
                name="email"
                type="text"
                placeholder="Enter your email or phone"
                value={formData.email}
                onChange={handleInputChange}
                label="Email"
                error=""
              />
              <InputField
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                label="Password"
                error=""
              />

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

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center -z-50 justify-center w-full px-8 py-3 mt-6 border rounded-xl text-gray-600 bg-white hover:shadow-md transition-shadow"
              onClick={loginWithGoogle}
            >
              <img
                src="/google.svg"
                alt="Google Logo"
                className="w-6 h-6 mr-3 bg-transparent"
              />
              Continue with Google
            </motion.button>

          </div>
        </div>
      </motion.div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}