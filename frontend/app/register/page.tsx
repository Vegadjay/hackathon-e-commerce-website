'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Link from 'next/link';

const schema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  phone: z
    .string()
    .regex(/^\d{10}$/, 'Phone number must be 10 digits long'),
  street: z.string().min(5, 'Street address must be at least 5 characters long'),
  city: z.string().min(2, 'City name must be at least 2 characters long'),
  state: z.string().min(2, 'State name must be at least 2 characters long'),
  zip: z
    .string()
    .regex(/^\d{5}$/, 'Zip code must be exactly 5 digits'),
  country: z.string().min(3, 'Country name must be at least 3 characters long'),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data:any) => {
    console.log('Form Data:', data);
    alert('Registration successful!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-rose-100 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl p-8 m-4"
      >
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-200"
          whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-8 text-amber-800"
          >
            Create Account
          </motion.h2>

          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'username', label: 'Username', type: 'text', placeholder: 'Choose a username' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
              { name: 'password', label: 'Password', type: 'password', placeholder: 'Create a password' },
              { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Enter your phone number' },
              { name: 'street', label: 'Street Address', type: 'text', placeholder: 'Enter your street address', span: true },
              { name: 'city', label: 'City', type: 'text', placeholder: 'Enter your city' },
              { name: 'state', label: 'State', type: 'text', placeholder: 'Enter your state' },
              { name: 'zip', label: 'Zip Code', type: 'text', placeholder: 'Enter zip code' },
              { name: 'country', label: 'Country', type: 'text', placeholder: 'Enter your country' },
            ].map(({ name, label, type, placeholder, span }, idx) => (
              <motion.div
                key={name}
                className={span ? 'md:col-span-2' : ''}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <label className="block text-amber-700 mb-2">{label}</label>
                <input
                  type={type}
                  {...register(name)}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors[name]
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-amber-200 focus:border-amber-500'
                  } focus:outline-none`}
                  placeholder={placeholder}
                />
                {errors[name] && (
                  <motion.p
                    className="text-red-500 mt-1 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {errors[name] && (errors[name].message as string)}
                  </motion.p>
                )}
              </motion.div>
            ))}

            <motion.button
              className="md:col-span-2 w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
            >
              Register
            </motion.button>
          </form>

          <motion.div
            className="mt-6 text-center text-amber-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Already have an account?{' '}
            <Link href="/login" className="text-amber-600 font-semibold hover:underline">
              Login here
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
