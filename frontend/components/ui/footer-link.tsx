"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import { Sparkles } from "lucide-react";

export function RedesignedLinkPreviewDemo() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const sparkleVariants = {
        animate: {
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 360],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const gradientText = "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text";

    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-t from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="relative mb-10">
                <motion.h1
                    variants={itemVariants}
                    className={`text-4xl md:text-6xl font-bold text-center mb-6 ${gradientText}`}
                >
                    Inspired Creations
                    <motion.span
                        variants={sparkleVariants}
                        animate="animate"
                        className="inline-block ml-3"
                    >
                        <Sparkles className="w-9 h-9 text-yellow-500" />
                    </motion.span>
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300"
                >
                    Experience the fusion of design and innovation.
                </motion.p>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="relative p-8 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            >
                <motion.p
                    className="text-neutral-700 dark:text-neutral-200 text-xl md:text-2xl max-w-2xl mx-auto text-center leading-relaxed"
                    whileHover={{ scale: 1.03 }}
                >
                    Dive into the frontend magic by{' '}
                    <LinkPreview
                        isStatic
                        url="https://github.com/Vegadjay"
                        imageSrc="/developers/Jayvegad.png"
                        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 transition-all duration-300"
                    >
                        Jay Vegad
                    </LinkPreview>{' '}
                    and the backend wizardry by{' '}
                    <LinkPreview
                        isStatic
                        url="https://github.com/hemang-patel-9"
                        imageSrc="/developers/Hemangbaldha.png"
                        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 transition-all duration-300"
                    >
                        Hemang Patel
                    </LinkPreview>
                </motion.p>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="text-center space-y-8 mt-14"
            >
                <motion.p
                    className="text-2xl font-semibold text-green-600 dark:text-green-400"
                    whileHover={{ scale: 1.07 }}
                >
                    Building the future, one pixel at a time.
                </motion.p>
                <motion.div
                    className="flex items-center justify-center gap-4"
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.span
                        animate={{
                            scale: [1, 1.3, 1],
                            rotateZ: [0, 15, -15, 0],
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="text-3xl"
                    >
                        ❤️
                    </motion.span>
                    <span className="text-red-500 dark:text-red-400 font-medium">
                        Your support makes us stronger!
                    </span>
                </motion.div>
            </motion.div>

            {/* Footer */}
            <motion.footer
                variants={itemVariants}
                className="mt-16 text-center"
            >
                <motion.p
                    className="italic text-gray-600 dark:text-gray-400"
                    whileHover={{ color: "#6D28D9", scale: 1.1 }}
                >
                    "From concept to reality, we create with purpose."
                </motion.p>
            </motion.footer>
        </motion.div>
    );
}

export default RedesignedLinkPreviewDemo;
