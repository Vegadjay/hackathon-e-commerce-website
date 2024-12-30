"use client";

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function CheckoutSuccessPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-md rounded-lg bg-white p-8 text-center shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        </motion.div>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Order Successful!
        </h1>
        <p className="mt-4 text-gray-600">
          Thank you for your purchase. Your order has been received and will be
          processed shortly.
        </p>
        <Button
          onClick={() => router.push('/')}
          className="mt-8 w-full"
          size="lg"
        >
          Continue Shopping
        </Button>
      </motion.div>
    </div>
  );
}