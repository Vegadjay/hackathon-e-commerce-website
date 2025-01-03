'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FooterImage from '@/assets/footer.png'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function Footer() {
  return (
    <footer className="w-full mt-10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={FooterImage}
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-extrabold text-black">Categories</h3>
            <ul className="space-y-3">
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
                    className="text-slate-950 hover:text-orange-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-extrabold text-black">Information</h3>
            <ul className="space-y-3">
              {[
                'Search',
                'About us',
                'Exchange Policy/Return Policy/ Refund Policy',
                'Track Your Order',
                'Privacy Policy',
                'Terms and Conditions',
                'Customize Products',
                'Cancellation Policy',
                'shipping policy',
                'Blog'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-extrabold text-black">Contact Us</h3>
            <div className="space-y-3 text-gray-600">
              <p>Please contact us on email <a href="mailto:contact@jaipuriadaah.com" className="text-orange-600 hover:text-orange-700">contact@jaipuriadaah.com</a></p>
              <p>or call us at <a href="tel:+919145843926" className="text-orange-600 hover:text-orange-700">+919145843926</a> between 10:00 to 18:00 Monday to Saturday.</p>
              <p className="text-sm italic">Jaipuriadaah is a part of Ethniclore</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-extrabold text-black">Newsletter</h3>
            <p className="text-gray-600">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                SUBSCRIBE
              </motion.button>
            </form>

            <div className="flex space-x-4 pt-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600"
        >
          <p>&copy; {new Date().getFullYear()} Jaipuriadaah. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}