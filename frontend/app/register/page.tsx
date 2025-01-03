// !!! DONE UNTIL FORM ... 

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { InputField } from './inputBox';
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
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  const router = useRouter();

  const validateForm = () => {
    const newErrors: any = {};
    
    if (formData.username.length < 3) newErrors.username = 'Username must be at least 3 characters long';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.address.street) newErrors.addressStreet = 'Street is required';
    if (!formData.address.city) newErrors.addressCity = 'City is required';
    if (!formData.address.state) newErrors.addressState = 'State is required';
    if (!/^\d{6}$/.test(formData.address.zipCode)) newErrors.addressZipCode = 'Zip code must be 6 digits';
    if (!formData.address.country) newErrors.addressCountry = 'Country is required';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setApiMessage('');

    if (!formData.username || !formData.email || !formData.password) {
        setApiMessage('All fields are required.');
        setIsLoading(false);
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        setApiMessage('Please enter a valid email address.');
        setIsLoading(false);
        return;
    }

    if (formData.password.length < 6) {
        setApiMessage('Password must be at least 6 characters.');
        setIsLoading(false);
        return;
    }

    try {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setApiMessage('Registration successful!');
            console.log(data);
            router.push('/');
        } else {
            setApiMessage(data.error || 'Registration failed.');
            console.error('Registration failed:', data);
        }
    } catch (error) {
        setApiMessage('An error occurred. Please try again.');
        console.error('Error during registration:', error);
    } finally {
        setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof formData] as object,
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
      <div className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
          url('/jaipuri-bg.svg')`,
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
            {/* Top Section with Animation */}
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
                error={errors.username}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Choose a password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
              />
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
              />
              <InputField
                label="Street Address"
                name="address.street"
                type="text"
                placeholder="Enter street address"
                value={formData.address.street}
                onChange={handleInputChange}
                error={errors.addressStreet}
              />
              <InputField
                label="City"
                name="address.city"
                type="text"
                placeholder="Enter city"
                value={formData.address.city}
                onChange={handleInputChange}
                error={errors.addressCity}
              />
              <InputField
                label="State"
                name="address.state"
                type="text"
                placeholder="Enter state"
                value={formData.address.state}
                onChange={handleInputChange}
                error={errors.addressState}
              />
              <InputField
                label="ZIP Code"
                name="address.zipCode"
                type="text"
                placeholder="Enter ZIP code"
                value={formData.address.zipCode}
                onChange={handleInputChange}
                error={errors.addressZipCode}
              />
              <InputField
                label="Country"
                name="address.country"
                type="text"
                placeholder="Enter country"
                value={formData.address.country}
                onChange={handleInputChange}
                error={errors.addressCountry}
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
