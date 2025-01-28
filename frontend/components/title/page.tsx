import { motion } from "framer-motion";
import React from 'react';

const Heading = ({ text }: { text: string }) => {
    return (
        <div className="flex flex-col items-center justify-center mb-4 sm:mb-8">
            <div className="flex items-center w-full">
                <motion.div
                    className="flex-grow border-t-2 border-gray-300"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                />
                <motion.div className="relative">
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mx-2 sm:mx-4 relative group"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {text}
                    </motion.h1>
                    <motion.svg
                        className="absolute -bottom-4 left-0 w-full h-6"
                        viewBox="0 0 400 30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <motion.path
                            d="M 0 20 Q 200 0, 400 20"
                            fill="none"
                            stroke="black"
                            strokeWidth="4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        />
                    </motion.svg>
                </motion.div>
                <motion.div
                    className="flex-grow border-t-2 border-gray-300"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
            <motion.div
                className="w-24 h-1 mt-4 bg-black rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            />
        </div>
    );
};

export default Heading;