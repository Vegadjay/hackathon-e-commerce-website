'use client'
import { motion } from "framer-motion"
export default function Loading() {
  return <div className="flex items-center justify-center w-full h-full">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-gray-200 rounded-full absolute" />

      <motion.div
        className="w-12 h-12 border-4 border-transparent rounded-full border-t-pink-500 absolute"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="w-12 h-12 border-4 border-transparent rounded-full border-t-pink-500/30 absolute"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1.2,
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </div>
  </div>
}