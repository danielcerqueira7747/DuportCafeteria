"use client";

import { motion } from "framer-motion";
import { Dog, Car, Wifi, Snowflake } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="heroSection relative w-full overflow-hidden bg-white" id="home">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2 }}
        className="hero-blob"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <img src="/logo.avif" alt="Logo da Duport" className="w-32 mb-4" />

          <h1 className="text-5xl md:text-6xl font-bold text-[#63250E] leading-tight mb-6">
            Café & Bistrô
          </h1>

          <p className="text-lg text-[#63250E] opacity-90 leading-relaxed mb-6 max-w-md">
            Procurando um local agradável para um café em família ou bate-papo
            entre amigos? Conheça nossa cafeteria, a uma quadra da praia.
          </p>

          <div className="flex flex-col gap-3 text-[#63250E] mb-8">
            <div className="flex items-center gap-3">
              <Dog className="w-6 h-6" /> Pet-friendly
            </div>
            <div className="flex items-center gap-3">
              <Car className="w-6 h-6" /> Estacionamento cortesia
            </div>
            <div className="flex items-center gap-3">
              <Wifi className="w-6 h-6" /> Wi-Fi gratuito
            </div>
            <div className="flex items-center gap-3">
              <Snowflake className="w-6 h-6" /> Ar-condicionado
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://www.google.com/maps/place/Duport+Bistr%C3%B4+e+Caf%C3%A9/data=!4m2!3m1!1s0x0:0xf178f8c6bf059df0?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-[#F26922] text-white font-medium shadow-lg hover:bg-[#d85815] transition-all"
            >
              GOOGLE MAPS
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-[#63250E] text-white font-medium shadow-lg hover:bg-[#4c1b0a] transition-all"
            >
              SABER MAIS
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="video-wrapper">
            <video
              className="video-card"
              src="/cafe.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>

          {/* SELO GOOGLE */}
          <div className="absolute bottom-6 right-6 text-center">
            <img src="/award.avif" alt="Selo" className="w-24 mx-auto" />
            <p className="text-[#63250E] text-xl font-bold flex items-center justify-center gap-1">
              4,9 ⭐
            </p>
            <p className="text-sm text-[#63250E] opacity-80">322 avaliações</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
