"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  className?: string
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`relative py-16 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-px h-24 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-2 h-2 bg-blue-500 rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}
