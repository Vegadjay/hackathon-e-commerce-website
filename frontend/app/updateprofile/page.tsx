'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { InputField }  from '@/components/layout/inputBox';
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

export default function UpdateProfile() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const router = useRouter();

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setFormData(userData);
        } else {
          setApiMessage('Failed to load user data');
        }
      } catch (error) {
        setApiMessage('Error loading user data');
        console.error('Error fetching user data:', error);
      } finally {
        setIsDataLoaded(true);
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setApiMessage('');

    if (!formData.username || !formData.email) {
        setApiMessage('Username and email are required.');
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
        const response = await fetch('/api/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setApiMessage('Profile updated successfully!');
            setTimeout(() => {
                router.push('/profile');
            }, 1500);
        } else {
            setApiMessage(data.error || 'Update failed.');
        }
    } catch (error) {
        setApiMessage('An error occurred. Please try again.');
        console.error('Error during update:', error);
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

  if (!isDataLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

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
            <motion.div
              className="relative text-center mb-12"
              variants={itemVariants}
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Update Profile
              </h2>
              <p className="mt-4 text-lg text-orange-600">
                Modify your account information
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
                  {isLoading ? 'Updating...' : 'Update Profile'}
                </motion.button>
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </motion.button>
                </Link>
              </motion.div>
            </motion.form>

            {apiMessage && (
              <motion.div
                className={`mt-4 p-3 rounded-md text-center ${
                  apiMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'
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