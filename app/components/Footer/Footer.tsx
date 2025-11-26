"use client";
import './Footer.css'
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full text-white"
      style={{ backgroundColor: '#63250E' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold tracking-wide">Duport Bistrô & Café</h2>
          <p className="text-sm leading-relaxed opacity-90">
            Cafés especiais, bolos frescos e culinária caseira servidos em um ambiente acolhedor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold">Contato</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="flex items-center gap-2"><Phone size={16} /> (13) 3877-4083</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Rua Oswaldo Cruz, 500, Boquerirão - Santos/SP</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold">Horário de Funcionamento</h3>
          <ul className="text-sm opacity-90 space-y-1">
            <li>Segunda a Sábado: 09h - 19h</li>
            <li>Domingos: Fechado</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold">Siga-nos</h3>
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/duportcafeteria_oficial/"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              target='_blank'
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/people/Duport-Cafeteria/100087085041887"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              target='_blank'
            >
              <Facebook size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="border-t border-white/20 mt-8 py-4 text-center text-sm opacity-80"
      >
        © {new Date().getFullYear()} Desenvolvido por Agência Brazu.
      </motion.div>
    </motion.footer>
  );
}
