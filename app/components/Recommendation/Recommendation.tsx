"use client";

import { motion } from "framer-motion";

export default function Recommendation() {
  const videoEmbed = "https://www.instagram.com/reel/Cz3uVjWgL6s/embed";

  return (
    <section className="w-full py-28 bg-[#F4EFEA] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute w-72 h-72 bg-[#c8a58b] rounded-full blur-3xl opacity-30 -top-10 -left-10"></div>
        <div className="absolute w-96 h-96 bg-[#ffe8d6] rounded-full blur-3xl opacity-40 bottom-0 right-0"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#63250E] text-center mb-12"
        >
          O que dizem sobre nós
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-xl aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border border-[#d7c8bd] bg-black"
          >
            <iframe
              src={videoEmbed}
              className="w-full h-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </motion.div>

          <motion.a
            href="https://www.instagram.com/duportcafeteria_oficial/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="px-8 py-3 bg-[#63250E] text-white rounded-full shadow-lg 
              border border-[#3a1609] text-lg font-medium
              hover:bg-[#4e1d0b] hover:shadow-2xl transition-all"
          >
            Ver nos conhecer no Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
