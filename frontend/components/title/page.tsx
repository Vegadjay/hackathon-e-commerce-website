import { motion } from "framer-motion";
import React from 'react'

const Heading = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center justify-center mb-8">
            <motion.div
                className="flex-grow border-t border-gray-300"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            ></motion.div>
            <motion.h1
                className="text-5xl font-bold text-center mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {text}
            </motion.h1>
            <motion.div
                className="flex-grow border-t border-gray-300"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            ></motion.div>
        </div>
    )
}

export default Heading
