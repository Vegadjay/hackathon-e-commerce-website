'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Instagram, Youtube, Linkedin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Footer() {
  return (
    <footer className="w-full mt-10 mb-10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src='/footer/f6.jpg'
          alt="Traditional pattern background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#f8f3ed]/80" />
      </div>

      <div className="absolute inset-0 -z-10 bg-gray-50 md:hidden" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-5">
            <h3 className="text-lg md:text-xl font-bold text-orange-900 border-b border-orange-200 pb-2 md:border-none">Categories</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                'Suit Sets',
                'Kurta sets',
                'Dresses',
                'Unstitched Suit Sets',
                'Handblock Suit Sets',
                'Handpainted Suit Sets',
                'Kaftans',
                'Premium Chanderi Suit-sets',
                'Premium handwork Suit sets'
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-800 hover:text-orange-600 transition-colors duration-300 text-sm block py-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 md:space-y-5">
            <h3 className="text-lg md:text-xl font-bold text-orange-900 border-b border-orange-200 pb-2 md:border-none">Information</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                'Search',
                'About us',
                'Exchange Policy/Return Policy',
                'Track Your Order',
                'Privacy Policy',
                'Terms and Conditions',
                'Customize Products',
                'Cancellation Policy',
                'Shipping Policy',
                'Blog'
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-800 hover:text-orange-600 transition-colors duration-300 text-sm block py-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 md:space-y-5">
            <h3 className="text-lg md:text-xl font-bold text-orange-900 border-b border-orange-200 pb-2 md:border-none">Contact Us</h3>
            <div className="space-y-3 md:space-y-4 text-sm">
              <p className="text-gray-800">
                Please contact us on email{' '}
                <a
                  href="mailto:contact@rajwadiposhak.com"
                  className="text-orange-600 hover:text-orange-700 font-medium block md:inline"
                >
                  contact@rajwadiposhak.com
                </a>
              </p>
              <p className="text-gray-800">
                or call us at{' '}
                <a
                  href="tel:+918849251028"
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  +918849251028
                </a>
                <br />
                between 10:00 to 18:00 Monday to Saturday.
              </p>
              <p className="text-gray-700 italic text-sm">
                Rajwadi Poshak is a part of Ethniclore
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 md:space-y-5">
            <h3 className="text-lg md:text-xl font-bold text-orange-900 border-b border-orange-200 pb-2 md:border-none">Newsletter</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-800">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2.5 rounded-md border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2.5 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors text-sm font-medium"
                >
                  SUBSCRIBE
                </motion.button>
              </form>

              <div className="flex space-x-5 pt-4">
                {[
                  { icon: Github, href: 'https://github.com/Vegadjay' },
                  { icon: Instagram, href: 'https://instagram.com/jay_vegad_1' },
                  { icon: Youtube, href: 'https://www.youtube.com/@JAY_VEGAD' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/vegadjay' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-orange-200/50 text-center text-gray-800"
        >
          <p className="text-sm">&copy; {new Date().getFullYear()} Rajwadi Poshak. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}