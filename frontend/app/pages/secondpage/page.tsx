'use client'

import React, { useMemo, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { GLOBE_CONFIG, SAMPLE_ARCS } from '@/components/earth/constant';

// Dynamically import the World component to ensure it works with Next.js
const World = dynamic(() =>
    import('@/components/ui/global').then((m) => m.World),
    { ssr: false }
);

// BackgroundAnimation Component
const BackgroundAnimation = React.memo(() => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Set dimensions on component mount
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Add and cleanup resize event listener
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Generate particles dynamically based on screen dimensions
    const particles = useMemo(
        () =>
            [...Array(20)].map((_, i) => ({
                id: i,
                x: Math.random() * (dimensions.width || 1000), // Fallback width
                y: Math.random() * (dimensions.height || 800), // Fallback height
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
            })),
        [dimensions.width, dimensions.height]
    );

    // Avoid rendering particles until dimensions are available
    if (dimensions.width === 0) return null;

    return (
        <div className="absolute inset-0 overflow-hidden opacity-20">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{ x: particle.x, y: particle.y }}
                    animate={{
                        y: [particle.y, particle.y - 20, particle.y],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
});

BackgroundAnimation.displayName = 'BackgroundAnimation';

// GlobeDemo Component
const GlobeDemo = React.memo(() => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
            <div className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
                <World data={SAMPLE_ARCS} globeConfig={GLOBE_CONFIG} />
            </div>
        </div>
    );
});

GlobeDemo.displayName = 'GlobeDemo';

const EarthComponent = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <BackgroundAnimation />

            <GlobeDemo />
        </div>
    );
};

export default EarthComponent;
