'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface UserData {
  email?: string;
  [key: string]: any;
}

interface OTPInputProps {
  length: number;
  value: string;
  onChange: (value: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const OTPInput: React.FC<OTPInputProps> = ({ length = 6, value, onChange }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const valueArray = value.split('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const currentValue = e.target.value;
    
    if (!/^\d*$/.test(currentValue)) {
      return;
    }

    if (currentValue.length > 1) {
      const numbers = currentValue.split('').filter(char => /\d/.test(char));
      const newValue = [...valueArray];
      
      for (let i = 0; i < length - index; i++) {
        if (i < numbers.length) {
          newValue[index + i] = numbers[i];
        }
      }
      
      onChange(newValue.join(''));
      
      const nextIndex = Math.min(index + numbers.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    // Handle single digit input
    const newValue = [...valueArray];
    newValue[index] = currentValue;
    onChange(newValue.join(''));

    if (currentValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const currentValue = valueArray[index];
    
    if (e.key === 'Backspace') {
      e.preventDefault();
      
      if (currentValue) {
        const newValue = [...valueArray];
        newValue[index] = '';
        onChange(newValue.join(''));
      } else if (index > 0) {
        const newValue = [...valueArray];
        newValue[index - 1] = '';
        onChange(newValue.join(''));
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'Delete') {
      e.preventDefault();
      if (currentValue) {
        const newValue = [...valueArray];
        newValue[index] = '';
        onChange(newValue.join(''));
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    const numbers = pastedData.split('').filter(char => /\d/.test(char));
    
    if (numbers.length > 0) {
      const newValue = [...valueArray];
      for (let i = 0; i < length; i++) {
        if (i < numbers.length) {
          newValue[i] = numbers[i];
        }
      }
      onChange(newValue.join(''));
      
      const nextIndex = Math.min(numbers.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array(length).fill(0).map((_, index) => (
        <motion.input
          key={index}
          ref={el => inputRefs.current[index] = el}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={valueArray[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={handleFocus}
          onPaste={handlePaste}
          className="w-12 h-14 text-2xl text-center border-2 rounded-lg outline-none transition-all
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200
            disabled:bg-gray-100"
          whileFocus={{ scale: 1.05 }}
        />
      ))}
    </div>
  );
};

const OTPVerification: React.FC<{ userData: UserData }> = ({ userData }) => {
  const [otp, setOtp] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [canResend, setCanResend] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(current => {
        if (current <= 1) {
          setCanResend(true);
        }
        return current - 1;
      });
    }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timeLeft]);

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      toast.error('Please enter a complete OTP');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          otp,
          ...userData
        }),
      });

      if (!response.ok) {
        throw new Error('Verification failed');
      }

      const data = await response.json();

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success('Account created successfully!');
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      }
    } catch (error) {
      toast.error('An error occurred during verification');
      console.error('Verification error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;

    try {
      setIsLoading(true);
      const response = await fetch('/api/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userData?.email }),
      });

      if (!response.ok) {
        throw new Error('Failed to resend OTP');
      }

      const data = await response.json();

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success('New OTP sent successfully');
        setTimeLeft(30);
        setCanResend(false);
      }
    } catch (error) {
      toast.error('Failed to resend OTP');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-lg mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Verify Your Email
            </h2>
            <p className="text-gray-600">
              We&apos;ve sent a verification code to{' '}
              <span className="font-medium text-gray-800">
                {userData?.email}
              </span>
            </p>
          </motion.div>

          <form onSubmit={handleVerifyOTP} className="space-y-8">
            <div className="space-y-4">
              <OTPInput
                length={6}
                value={otp}
                onChange={setOtp}
              />
              
              <div className="text-center text-sm text-gray-600">
                {timeLeft > 0 ? (
                  <p>Resend code in {timeLeft} seconds</p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                    disabled={isLoading}
                  >
                    Resend Code
                  </button>
                )}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isLoading || otp.length !== 6}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl 
                font-medium transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                  Verifying...
                </span>
              ) : (
                'Verify & Create Account'
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default OTPVerification;