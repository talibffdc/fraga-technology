"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone } from "lucide-react"

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Show after page loads
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const phoneNumber = "+919235000195"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-24 left-6 z-40 md:bottom-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Phone Number Badge - Desktop Only */}
          {isHovered && (
            <motion.div
              className="mb-2 hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg md:block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {phoneNumber}
            </motion.div>
          )}

          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 p-4 text-white shadow-lg transition-all hover:shadow-xl hover:bg-blue-600 md:px-5 md:py-3"
            aria-label="Call us"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Phone className="h-5 w-5" />
            </motion.div>
            <span className="hidden font-semibold md:inline text-sm">{isHovered ? "Call Now" : "Call"}</span>
          </a>

          {/* Mobile Number - Mobile Only */}
          <motion.div
            className="mt-2 block rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg md:hidden text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {phoneNumber}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
