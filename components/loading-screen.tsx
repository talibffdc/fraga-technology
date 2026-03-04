"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 600)
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030303]"
        >
          {/* Outer glow layers */}
          <div className="absolute h-72 w-72 rounded-full bg-[#7c3aed]/20 blur-[100px] animate-pulse" />
          <div className="absolute h-56 w-56 rounded-full bg-[#3b82f6]/20 blur-[80px] animate-pulse [animation-delay:200ms]" />

          {/* Glowing circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex h-40 w-40 items-center justify-center"
          >
            {/* Spinning gradient ring */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#7c3aed,#3b82f6,#06b6d4,#3b82f6,#7c3aed)] p-[2px] animate-spin [animation-duration:3s]">
              <div className="h-full w-full rounded-full bg-[#030303]" />
            </div>

            {/* Inner glow */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#7c3aed]/10 via-[#3b82f6]/10 to-[#06b6d4]/10 animate-pulse" />

            {/* Text */}
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative z-10 text-xl font-bold tracking-[0.25em] text-white"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              FRAGA
            </motion.span>
          </motion.div>

          {/* Bottom subtle text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-12 text-xs tracking-[0.2em] text-white/30"
          >
            We Build the Future
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
