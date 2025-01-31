'use client'

import { BackgroundLines } from '@/components/ui/background-lines';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const quotes = [
    "पधारो म्हारे वस्त्र संसार।",
    "राजस्थानी रंग, परंपरा के संग।",
    "म्हारी धरती री शान, राजस्थानी पोशाक जान।",
    "पहनावे में परंपरा, हर धागे में कहानी।",
    "वस्त्र जो कहें राजस्थानी इतिहास।"
];


const heroTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const backgroundLines = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    // Quote rotation
    useEffect(() => {
        const quoteInterval = setInterval(() => {
            setCurrentQuoteIndex(prev => (prev + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(quoteInterval);
    }, []);

    return (
        <div>
            <BackgroundLines className="relative flex items-center justify-center w-full flex-col px-4 py-16 overflow-hidden">
                <motion.div
                    variants={heroTextVariants}
                    className="relative z-10"
                >
                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 text-4xl md:text-6xl lg:text-8xl font-sans py-8 md:py-12 font-bold tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Rajwadi{" "}
                        </motion.span>
                        <motion.span
                            className="text-red-400 inline-block"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Poshaak
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            , <br className="md:hidden" />
                            <span className="mt-4">पधारो म्हारे देश।</span>
                        </motion.span>
                    </h2>

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentQuoteIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl font-semibold mx-auto text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 text-center mt-6"
                        >
                            {quotes[currentQuoteIndex]}
                        </motion.p>
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="absolute top-10 left-10 transform rotate-45">
                        <Sparkles className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="absolute bottom-10 right-10 transform -rotate-45">
                        <Sparkles className="w-6 h-6 text-red-400" />
                    </div>
                </motion.div>
            </BackgroundLines></div>
    )
}

export default backgroundLines;
