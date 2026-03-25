"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function StickyWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Show after page loads
    setIsVisible(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappMessage = encodeURIComponent(
    "Hi Fraga Technology, I'm interested in your web development and digital marketing services. Can you provide more information?"
  )
  const whatsappLink = `https://wa.me/919235000195?text=${whatsappMessage}`

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-all hover:shadow-xl hover:bg-green-600 md:bottom-8 md:right-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat with us on WhatsApp"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <MessageCircle className="h-5 w-5" />
          </motion.div>
          <span className="hidden font-semibold sm:inline">WhatsApp</span>
          {!isScrolled && (
            <motion.div
              className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              1
            </motion.div>
          )}
        </motion.a>
      )}
    </AnimatePresence>
  )
}
