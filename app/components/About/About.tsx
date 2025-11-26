"use client";

import './About.css'
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full py-24 about-section-bg" id='about'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#63250E]/20 rounded-full blur-2xl"></div>
          <Image
            src="/casal.avif"
            alt="Sobre nós"
            width={800}
            height={600}
            className="rounded-2xl shadow-xl object-cover border-4 border-white/40"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#63250E] leading-tight drop-shadow-sm">
            Um espaço perfeito<br />para quem ama café
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 bg-white/60 p-4 rounded-xl shadow">
            A Duport é um sonho dos empresários Jurema e Maurício Ibelli. "Idealizamos esse espaço para acolher famílias, casais e amigos que procuram curtir momentos felizes, uma boa comida e cafés especiais." Venha nos fazer uma visita ou solicite uma reserva para a sua reunião. 
          </p>

          <div className="flex items-center gap-6 mt-8">
            <motion.a
              href="https://wa.me/551338774083"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-[#25D366] text-white text-lg font-semibold shadow-lg hover:shadow-xl transition"
              id='wpp-about'
            >
              Nosso WhatsApp
            </motion.a>

            <motion.img
              src="/logo.avif"
              alt="Logo Duport"
              width={80}
              height={80}
              whileHover={{ scale: 1.12 }}
              className="rounded-full shadow-lg border border-white/40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
