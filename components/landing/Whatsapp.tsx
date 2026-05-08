"use client"
import { useEffect } from "react"
import { FaWhatsapp, FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { setActiveFloating, useActiveFloating } from "@/lib/floatingStore"

export const Whatsapp = () => {
    const active = useActiveFloating()
    const isOpen = active === "whatsapp"
    const hidden = active === "chatbot"

    useEffect(() => {
        if (!isOpen) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveFloating(null)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [isOpen])

    return (
        <div className="fixed bottom-24 right-4 sm:bottom-32 sm:right-6 z-[10000] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl w-[calc(100vw-2rem)] max-w-[350px] sm:w-[350px] overflow-hidden mb-2"
                    >
                        {/* Header */}
                        <div className="bg-[#0f3c2f] p-6 text-white relative">
                            <button
                                onClick={() => setActiveFloating(null)}
                                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                                aria-label="Close WhatsApp"
                            >
                                <FaTimes size={14} />
                            </button>
                            <h3 className="font-semibold text-xl mb-1">RealtyGenie</h3>
                            <p className="text-xs text-white/80">Typically replies within minutes</p>
                        </div>

                        {/* Body */}
                        <div className="bg-[#e4ddd4] p-6 min-h-[200px] relative">
                            <div className="bg-white rounded-r-xl rounded-bl-xl p-4 shadow-sm max-w-[85%] text-sm text-gray-800">
                                Any questions related to RealtyGenie?
                                <span className="block text-[10px] text-gray-400 text-right mt-1">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white text-center">
                            <a
                                href="https://wa.me/+17787922220"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-3 rounded-full transition-colors shadow-md mb-3"
                            >
                                <FaWhatsapp size={20} />
                                WhatsApp Us
                            </a>
                            <p className="text-[10px] text-gray-400">
                                Online | Privacy policy
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!hidden && (
                    <motion.button
                        key="wa-fab"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setActiveFloating(isOpen ? null : "whatsapp")}
                        className="bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                        aria-label="Open WhatsApp chat"
                    >
                        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}
