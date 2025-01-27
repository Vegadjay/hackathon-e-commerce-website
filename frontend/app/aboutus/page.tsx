"use client"
import RedesignedLinkPreviewDemo from '@/components/ui/footer-link'
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
    return (
        <div>
            <motion.div
                className="mt-16 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            >
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                    </motion.div>
                    <RedesignedLinkPreviewDemo />
                </div>
            </motion.div></div>
    )
}

export default page