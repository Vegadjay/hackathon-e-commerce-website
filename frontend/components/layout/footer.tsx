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
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const categories = [
  { title: 'Kurta Sets', href: '/ethnic-wear?category=kurta-sets' },
  { title: 'Indian wear', href: '/ethnic-wear?category=indian' },
  { title: 'Top rated products', href: '/ethnic-wear?category=top-rated' },
  { title: 'Premium Fabric', href: '/bestsellers?category=premium' },
  { title: 'Chiffons', href: '/ethnic-wear?category=chiffon' },
  { title: 'Solid wear clothing', href: '/ethnic-wear?category=solid-wear-clothing' },
];

const basePath = '/customer';
const information = [
  { title: 'About Us', href: '/aboutus' },
  { title: 'Admin ', href: '/admin' },
  { title: 'Exchange/Return Policy', href: `${basePath}/returnpolicy` },
  { title: 'Track Your Order', href: `/trackyourorder` },
  { title: 'Privacy Policy', href: `${basePath}/privacypolicy` },
  { title: 'Terms and Conditions', href: `${basePath}/terms-and-conditions` },
  { title: 'Customize Products', href: `${basePath}/customize-products` },
  { title: 'Cancellation Policy', href: `${basePath}/cancellation-policy` },
  { title: 'Shipping Policy', href: `${basePath}/shipping-policy` },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Youtube, href: 'https://www.youtube.com' },
  { icon: Linkedin, href: 'https://www.linkedin.com/' },
];

export default function Footer() {
  return (
    <footer className="w-full mt-10 mb-10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Image
          src="/footer/f3.jpg"
          alt="Traditional pattern background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#f8f3ed]/80" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col md:flex-row justify-between gap-16 lg:gap-52">
            {/* Categories Section */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-orange-900 border-b border-orange-200 pb-2 md:border-none">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-800 hover:text-orange-600 transition-colors duration-300 text-sm block py-1"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-orange-900 border-b border-orange-200 pb-2 md:border-none">
                Information
              </h3>
              <ul className="space-y-2">
                {information.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-gray-800 hover:text-orange-600 transition-colors duration-300 text-sm block py-1"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-orange-900 border-b border-orange-200 pb-2 md:border-none">
                Contact Us
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-gray-800">
                  Email us at{' '}
                  <a
                    href="mailto:contact@rajwadiposhak.com"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    contact@rajwadiposhak.com
                  </a>
                </p>
                <p className="text-gray-800">
                  Call us at{' '}
                  <a
                    href="tel:+918849251028"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    +91 8849251028
                  </a>
                  <br />
                  (10:00 AM to 6:00 PM, Mon-Sat)
                </p>
                <p className="text-gray-700 italic text-sm">
                  Rajwadi Poshak is a part of Ethniclore
                </p>
                <div className="flex space-x-5 pt-4">
                  {socialLinks.map((social, index) => (
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
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
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