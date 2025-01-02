'use client';

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface IUserRegistration {
  username: string;
  email: string;
  password: string;
  phone: string;
  address: IAddress;
}


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { InputField } from './inputBox'
import { useRouter } from 'next/navigation';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Register() {
   const [formData, setFormData] = useState<IUserRegistration>({
    username: '',
    email: '',
    password: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setApiMessage('Registration successful!');
        router.push('/');
    } else {
        setApiMessage(data.message || 'Registration failed.');
        console.error('Registration failed:', data);
      }
    } catch (error) {
      setApiMessage('An error occurred. Please try again.');
      console.error('Error during registration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof IUserRegistration] as object,
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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
          backgroundRepeat: 'repeat'
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
                Create Account
              </h2>
              <p className="mt-4 text-lg text-orange-600">
                Join our vibrant community
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <InputField
                label="Username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Choose a password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <InputField
                label="Street Address"
                name="address.street"
                type="text"
                placeholder="Enter street address"
                value={formData.address.street}
                onChange={handleInputChange}
              />
              <InputField
                label="City"
                name="address.city"
                type="text"
                placeholder="Enter city"
                value={formData.address.city}
                onChange={handleInputChange}
              />
              <InputField
                label="State"
                name="address.state"
                type="text"
                placeholder="Enter state"
                value={formData.address.state}
                onChange={handleInputChange}
              />
              <InputField
                label="ZIP Code"
                name="address.zipCode"
                type="text"
                placeholder="Enter ZIP code"
                value={formData.address.zipCode}
                onChange={handleInputChange}
              />
              <InputField
                label="Country"
                name="address.country"
                type="text"
                placeholder="Enter country"
                value={formData.address.country}
                onChange={handleInputChange}
                className="md:col-span-2"
              />

              <motion.div className="md:col-span-2 mt-6 space-y-4">
                <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                {isLoading ? 'Registering...' : 'Register'}
              </motion.button>
                <p className="text-center text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-orange-600 hover:text-orange-700 font-medium">
                    Log in
                  </Link>
                </p>
              </motion.div>
            </motion.form>

              {apiMessage && (
              <motion.div
                className={`mt-4 p-3 rounded-md text-center ${
                  apiMessage.includes('successful') ? 'text-green-600' : 'text-red-600'
                }`}
                variants={itemVariants}
              >
                {apiMessage}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}