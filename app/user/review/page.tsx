'use client'
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductReview = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (rating === 0) return;
        setSubmitted(true);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const starVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.2, rotate: 5 },
        tap: { scale: 0.95 }
    };

    const successVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {!submitted ? (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Write a Review
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Rating
                                </label>
                                <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <motion.button
                                            key={star}
                                            type="button"
                                            variants={starVariants}
                                            initial="initial"
                                            whileHover="hover"
                                            whileTap="tap"
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHover(star)}
                                            onMouseLeave={() => setHover(0)}
                                            className="focus:outline-none"
                                        >
                                            <Star
                                                className={`h-8 w-8 ${(hover || rating) >= star
                                                    ? 'text-yellow-400 fill-yellow-400'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="review"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Your Review
                                </label>
                                <textarea
                                    id="review"
                                    rows={4}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    placeholder="Tell us what you think..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit Review
                            </motion.button>
                        </form>
                    </>
                ) : (
                    <motion.div
                        className="text-center"
                        variants={successVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                            <svg
                                className="h-6 w-6 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Thanks for your review!
                        </h3>
                        <p className="text-sm text-gray-500">
                            Your feedback helps others make better decisions.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSubmitted(false)}
                            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Write Another Review
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default ProductReview;