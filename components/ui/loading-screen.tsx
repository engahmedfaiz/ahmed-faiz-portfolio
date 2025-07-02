"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"
import { memo } from "react"

const LoadingScreen = memo(function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <div className="text-center">
        <motion.div
          className="relative w-24 h-24 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full" />
          <div className="absolute inset-2 border-4 border-purple-500/50 rounded-full border-t-transparent" />
          <div className="absolute inset-4 border-4 border-cyan-400 rounded-full border-r-transparent border-b-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Code className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-white mb-4"
        >
          Ahmed Faiz Mashrah
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-blue-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
})

export default LoadingScreen
