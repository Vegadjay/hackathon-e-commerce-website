"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/navigation';
const LoginPage = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    const router = useRouter();

  const handleLogin = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setError(null); 

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: input,
          password: password,
        }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || "Failed to log in");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      router.push('/')

    } catch (err:any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

          <form className="space-y-6" onSubmit={handleLogin}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <label className="block text-amber-700 mb-2" htmlFor="input">
                Email / Username
              </label>
              <input
                type="text"
                id="input"
                className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                placeholder="Enter your email or username"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </motion.div>

            {error && (
              <motion.p
                className="text-red-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>
          </form>

          <motion.div
            className="mt-6 text-center text-amber-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Don&apos;t have an account?{' '}
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
