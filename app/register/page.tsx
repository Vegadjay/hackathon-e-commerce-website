'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRenderContext } from '@/contexts/RenderContext';
import { CheckCircle2, XCircle, Send } from 'lucide-react';

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

const inputVariants = {
  focus: { scale: 1.02, transition: { duration: 0.2 } },
  blur: { scale: 1, transition: { duration: 0.2 } }
};

const errorVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, height: 0 }
};

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  required = true,
  disabled = false
}) => (
  <motion.div className="relative">
    <motion.label
      className="block text-sm font-medium text-gray-700 mb-1"
      htmlFor={name}
    >
      {label} {required && <span className="text-red-500">*</span>}
    </motion.label>
    <motion.input
      variants={inputVariants}
      whileFocus="focus"
      initial="blur"
      animate="blur"
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full px-4 py-2 border-2 rounded-lg outline-none transition-colors
        ${error ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-red-500'}
        ${error ? 'focus:border-red-500' : 'focus:border-red-500'}
        ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
      `}
    />
    <AnimatePresence>
      {error && (
        <motion.p
          variants={errorVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute -bottom-6 left-0 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function Register() {
  const { triggerRender } = useRenderContext();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    otp: '',
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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const router = useRouter();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
      return false;
    }
    return true;
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!isOtpVerified) {
      newErrors.otp = 'Email verification required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.address.street) {
      newErrors.street = 'Street address is required';
    }
    if (!formData.address.city) {
      newErrors.city = 'City is required';
    }
    if (!formData.address.state) {
      newErrors.state = 'State is required';
    }
    if (!formData.address.zipCode) {
      newErrors.zipCode = 'ZIP code is required';
    }
    if (!formData.address.country) {
      newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async () => {
    if (!validateEmail()) return;

    setIsSendingOtp(true);
    try {
      const response = await fetch('/api/user/sendotp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        setIsOtpSent(true);
        toast.success('OTP sent successfully!');
      }
    } catch (error) {
      toast.error('Failed to send OTP');
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!formData.otp) {
      setErrors(prev => ({ ...prev, otp: 'Please enter OTP' }));
      return;
    }

    if (!/^\d{6}$/.test(formData.otp)) {
      setErrors(prev => ({ ...prev, otp: 'OTP must be a 6-digit number' }));
      return;
    }

    setIsVerifyingOtp(true);
    try {
      const response = await fetch('/api/user/verifyotp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          otp: formData.otp
        }),
        credentials: 'include'
      });

      const data = await response.json();

      if (data.success) {
        setIsOtpVerified(true);
        toast.success(data.message || 'OTP verified successfully');
      } else {
        setIsOtpVerified(false);
        toast.error(data.message || 'Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setIsOtpVerified(false);
      toast.error('Failed to verify OTP');
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isOtpVerified) {
      toast.error('Please verify your email first');
      return;
    }

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success('Registration successful!');
        location.reload();
        setTimeout(() => {
          triggerRender();
        }, 1000);
      }
    } catch (error) {
      toast.error('An error occurred during registration');
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.') as [keyof typeof formData, string];
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(typeof prev[parent] === 'object' ? prev[parent] : {}),
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-red-50 to-red-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={floatingBubbleVariants}
          animate="animate"
          className="absolute -top-4 -left-4 w-16 h-16 bg-red-400/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          variants={floatingBubbleVariants}
          animate="animate"
          className="absolute top-1/2 right-24 w-20 h-20 bg-red-400/10 rounded-full backdrop-blur-sm"
        />
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                Join Our Community
              </h2>
              <p className="mt-4 text-gray-600">
                Create your account and start your journey with us
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                <InputField
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="johndoe"
                  value={formData.username}
                  onChange={handleInputChange}
                  error={errors.username}
                  disabled={!isOtpVerified}
                />

                <div className="relative flex items-center gap-2">
                  <div className="flex-1">
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      disabled={isOtpVerified}
                    />
                  </div>
                  <motion.button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={isSendingOtp || isOtpVerified}
                    className="mt-6 h-10 w-10 p-2 bg-red-500 text-white rounded-lg
                  hover:bg-red-600 disabled:bg-gray-400 transition-colors
                   flex items-center justify-center"
                  >
                    {isSendingOtp ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </motion.button>
                </div>

                {isOtpSent && (
                  <div className="flex items-center space-x-2">
                    <InputField
                      label="Enter OTP"
                      name="otp"
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={formData.otp.trim().toString()}
                      onChange={handleInputChange}
                      error={errors.otp}
                      disabled={isOtpVerified}
                      // @ts-ignore
                      className="flex-1"
                    />
                    {isOtpVerified ? (
                      <CheckCircle2 className="w-6 h-6 text-red-500" />
                    ) : (
                      <motion.button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={isVerifyingOtp}
                        className="px-4 py-2 bg-red-500 mt-6 text-white rounded-lg text-sm
                      hover:bg-red-600 disabled:bg-gray-400 transition-colors"
                      >
                        {isVerifyingOtp ? 'Verifying...' : 'Verify OTP'}
                      </motion.button>
                    )}
                  </div>
                )}

                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={errors.password}
                  disabled={!isOtpVerified}
                />

                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                  required={false}
                  disabled={!isOtpVerified}
                />

                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Address Information <span className='text-red-300 ml-1 font-bold text-sm'>(*Must sure address is verified)</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                      label="Street Address"
                      name="address.street"
                      type="text"
                      placeholder="123 Main St"
                      value={formData.address.street}
                      onChange={handleInputChange}
                      error={errors.street}
                      disabled={!isOtpVerified}
                    />
                    <InputField
                      label="City"
                      name="address.city"
                      type="text"
                      placeholder="New York"
                      value={formData.address.city}
                      onChange={handleInputChange}
                      error={errors.city}
                      disabled={!isOtpVerified}
                    />
                    <InputField
                      label="State"
                      name="address.state"
                      type="text"
                      placeholder="NY"
                      value={formData.address.state}
                      onChange={handleInputChange}
                      error={errors.state}
                      disabled={!isOtpVerified}
                    />
                    <InputField
                      label="ZIP Code"
                      name="address.zipCode"
                      type="text"
                      placeholder="10001"
                      value={formData.address.zipCode}
                      onChange={handleInputChange}
                      error={errors.zipCode}
                      disabled={!isOtpVerified}
                    />
                    <InputField
                      label="Country"
                      name="address.country"
                      type="text"
                      placeholder="United States"
                      value={formData.address.country}
                      onChange={handleInputChange}
                      error={errors.country}
                      disabled={!isOtpVerified}
                    />
                  </div>
                </div>
              </div>

              <motion.div className="space-y-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading || !isOtpVerified}
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl 
                    font-medium transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Creating your account...
                    </span>
                  ) : (
                    'Create Account'
                  )}
                </motion.button>

                <p className="text-center text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-red-600 hover:text-red-700 font-medium">
                    Sign in
                  </Link>
                </p>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
