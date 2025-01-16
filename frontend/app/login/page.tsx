'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn, useSession } from 'next-auth/react';
import { useRenderContext } from "@/contexts/RenderContext";
import Cookies from 'js-cookie';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const floatingBubbleVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const CustomInput = ({ icon: Icon, error, ...props }: { icon: React.ComponentType<{ size: number }>, error?: string }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative group"
    >
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400 group-focus-within:text-indigo-600 transition-colors">
          <Icon size={20} />
        </div>
        <input
          {...props}
          className={`w-full pl-12 pr-4 py-3 bg-white/50 backdrop-blur-sm border-2 rounded-xl
          ${error ? 'border-red-400' : 'border-purple-200 group-focus-within:border-indigo-400'}
          transition-all duration-300 outline-none`}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </motion.div>
  );
};

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { triggerRender } = useRenderContext();
  const { data: session, status } = useSession() as { data: { user: { token?: string, message?: string } } | null, status: string };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identifier: formData.email,
          password: formData.password
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success('Logged in successfully!');
        setFormData({ email: '', password: '' });

        if (result.token) {
          Cookies.set('token', result.token, {
            expires: 7,
            secure: process.env.NODE_ENV === 'production',
            httpOnly: false
          });
        }

        setTimeout(() => {
          triggerRender();
          router.push('/');
        }, 1100);
      } else {
        toast.error(result.message || 'Login failed, please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
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
      const result = await signIn('google', {
        redirect: false,
        callbackUrl: '/'
      });

      if (result?.error) {
        toast.error('Google login failed. Please try again.');
        return;
      }

      if (status === "authenticated" && session?.user?.token) {
        Cookies.set('token', session.user.token, {
          expires: 7,
          secure: process.env.NODE_ENV === 'production',
          httpOnly: false
        });
        toast.success('Logged in successfully!');
        triggerRender();
        router.push('/');
      } else if (status === "authenticated" && !session?.user?.token) {
        toast.error(session?.user?.message || 'Login failed, please try again.');
      }
    } catch (error) {
      console.error('Error logging in with Google:', error);
      toast.error('An error occurred with Google login. Please try again.');
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      triggerRender();
      router.push('/');
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/4 -left-12 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            transition: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-1/4 -right-12 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-md mx-auto"
        >
          {/* Floating decorative elements */}
          <motion.div
            variants={floatingBubbleVariants}
            animate="animate"
            className="absolute -top-4 -left-4 w-16 h-16 bg-purple-400/10 rounded-full backdrop-blur-sm"
          />
          <motion.div
            variants={floatingBubbleVariants}
            animate="animate"
            className="absolute top-1/2 -right-8 w-20 h-20 bg-indigo-400/10 rounded-full backdrop-blur-sm"
          />

          <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-white/50">
            <div className="p-8">
              <motion.div className="text-center mb-10" variants={itemVariants}>
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <User size={40} className="text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Welcome Back
                </h2>
                <p className="mt-3 text-gray-600">
                  Sign in to continue your journey
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <CustomInput
                  // @ts-ignore
                  icon={Mail}
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={undefined}
                />
                <CustomInput
                  // @ts-ignore
                  icon={Lock}
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={undefined}
                />

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl
                    font-medium flex items-center justify-center gap-2 group hover:shadow-lg transition-shadow"
                >
                  {isLoading ? 'Signing in...' : (
                    <>
                      Sign In
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                <motion.div
                  variants={itemVariants}
                  className="text-center space-y-4"
                >
                  <Link
                    href="/forgot-password"
                    className="text-sm text-purple-600 hover:text-indigo-600 transition-colors"
                  >
                    Forgot your password?
                  </Link>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={loginWithGoogle}
                    className="w-full flex items-center justify-center gap-3 py-3 border-2 border-purple-200
                      rounded-xl text-gray-700 hover:bg-white/50 hover:border-purple-300 transition-all"
                  >
                    <img
                      src="/google.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    Continue with Google
                  </motion.button>

                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link
                      href="/register"
                      className="text-purple-600 hover:text-indigo-600 transition-colors font-medium"
                    >
                      Sign Up
                    </Link>
                  </p>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="light"
      />
    </div>
  );
}