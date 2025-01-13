'use client'

import { GlobeDemo } from '@/components/earth/earth';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect.tsx';
import { motion } from 'framer-motion';

const words = [
    {
        text: "Build",
    },
    {
        text: "awesome",
    },
    {
        text: "apps",
    },
    {
        text: "with",
    },
    {
        text: "Aceternity.",
        className: "text-blue-500 dark:text-blue-500",
    },
];

// Animation variants for the earth container
const earthContainerVariants = {
    hidden: {
        x: '100%',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0.3
        }
    }
};

// Animation variants for the text container
const textContainerVariants = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const EarthComponent = () => {
    return (
        <div className="min-h-screen w-full  overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-center min-h-[600px] w-full">
                <motion.div
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="md:w-1/3 w-full p-6 flex items-center justify-center"
                >
                    <div className="bg-opacity-50 rounded-lg p-4">
                        <TypewriterEffectSmooth words={words} />
                    </div>
                </motion.div>

                <motion.div
                    variants={earthContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="md:w-2/3 w-full mt-10 h-[600px]"
                >
                    <GlobeDemo />
                </motion.div>
            </div>
        </div>
    );
};

export default EarthComponent;  