"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import "./WppButton.css";

export default function WppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/*<motion.div
        className="bg-white text-black text-sm md:text-base px-4 py-2 rounded-xl shadow-lg font-medium relative after:content-[''] after:absolute after:-right-2 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-8 after:border-b-8 after:border-l-8 after:border-transparent after:border-l-white"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Olá, que tal pedir um lanche no ifood?
      </motion.div>*/}

      <motion.a
        href="https://wa.me/551338774083"
        target="_blank"
        rel="noopener noreferrer"
        className="wpp-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        id="wpp-fixed"
      >
        <MessageCircle size={26} className="text-white" />
      </motion.a>
    </motion.div>
  );
}
