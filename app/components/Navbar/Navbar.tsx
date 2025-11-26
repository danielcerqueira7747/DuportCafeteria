'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <motion.button
          className="lg:hidden text-[#63250E] z-50 relative"
          onClick={() => setOpen(!open)}
          animate={open ? "open" : "closed"}
          variants={{
            open: { rotate: 90 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute left-1/2 transform -translate-x-1/2"
        >
          <a href="#home">
            <img
              src="/logo.avif"
              alt="Logo da Duport Cafeteria"
              className="h-10 w-auto object-contain cursor-pointer"
            />
          </a>
        </motion.div>

        <div className="w-7 lg:hidden"></div>

        <nav className="hidden lg:flex items-center gap-8 font-medium ml-auto">
          {links.map((item) => (
            <motion.a
              key={item.label}
              whileHover={{ scale: 1.05 }}
              href={item.href}
              className="text-[#63250E] hover:opacity-70 transition"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg lg:hidden pt-24 z-40"
          >
            <nav className="flex flex-col gap-6 px-8 py-4 text-2xl font-semibold">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[#63250E] hover:opacity-70 transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
