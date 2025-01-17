import { motion } from 'framer-motion'
import { Cover } from "@/components/ui/cover";
import React from 'react'
import EarthComponent from '@/app/pages/secondpage/page';


const Earthcomponent = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-full bg-gradient-to-b from-transparent to-neutral-50 dark:to-neutral-900"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-200 dark:via-neutral-100 dark:to-neutral-300">
                            Buy amazing products <div className="-mt-10">
                                <br /> with{" "}
                                <Cover>
                                    <span className="text-red-400">lightning-fast delivery</span>
                                </Cover>
                            </div>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mt-4 text-neutral-600 dark:text-neutral-400">
                            Shop now and experience speed like never before!
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-transparent"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <EarthComponent />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Earthcomponent;