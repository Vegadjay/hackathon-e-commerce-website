'use client'

import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center p-4">
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <img
                        src="/logo/navbar-logo.png"
                        alt="404 Error Illustration"
                        className="mx-auto w-64 h-64 object-contain"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-semibold text-red-800 mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            The page you're looking for doesn't exist or has been moved to another URL.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <a
                            href="/"
                            className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium 
                       hover:bg-red-700 transition-colors duration-200 inline-block"
                        >
                            Return Home
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;