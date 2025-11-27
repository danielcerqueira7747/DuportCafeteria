"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Smartphone, Send } from "lucide-react";

const heroImg = "cafeteria.webp";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const whatsappNumber = "551338774083";

  const validPhone = (p: string) => {
    const digits = p.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 13;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !validPhone(phone)) return;

    setSubmitting(true);
    const cleanPhone = phone.replace(/\D/g, "");
    const message = encodeURIComponent(
      `Olá! Quero aproveitar a promoção de primeira visita.\n\n*Nome:* ${name}\n*WhatsApp:* ${phone}`
    );
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setSubmitting(false);
      setName("");
      setPhone("");
    }, 500);
  };

  return (
    <section className="w-full bg-white/80 py-16 md:py-24 relative overflow-hidden" id="contact">

      <div className="pointer-events-none absolute -left-20 -top-10 w-72 h-72 bg-[#F0D7C2] rounded-full blur-3xl opacity-40"></div>
      <div className="pointer-events-none absolute -right-10 bottom-0 w-96 h-96 bg-[#FFEDE0] rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#63250E] leading-tight">
              Primeira Visita com <span className="text-[#EA6111]">Sabor Especial</span>
            </h2>

            <p className="text-lg text-[#5b3a2a] max-w-xl">
              Receba <strong>01 Cappuccino</strong> na sua primeira visita à nossa cafeteria.
              Esta é a nossa maneira de dizer <em>"bem-vindo"</em>! Preencha o cadastro e venha conhecer nossas delícias.
            </p>

            <div className="flex items-center gap-4">
              <img
                src={heroImg}
                alt="cafeteria"
                className="hidden md:block w-36 h-36 rounded-2xl object-cover shadow-lg border border-[#ecd4c3]"
              />

              <div className="flex flex-col">
                <span className="text-sm text-[#7a4a2d]">Atendimento rápido</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            id="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#FFF7F2] border border-[#f1ded3] rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <label className="block text-sm font-semibold text-[#5b3a2a]">Nome Completo</label>
                <div className="mt-2 relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b07b5b]" size={18} />
                  <input
                    className="pl-10 pr-4 w-full h-12 rounded-xl bg-white border border-[#ecd4c3] focus:ring-2 focus:ring-[#FFD8C2] outline-none"
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#5b3a2a]">WhatsApp *</label>
              <div className="mt-2 relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b07b5b]" size={18} />
                <input
                  className="pl-10 pr-4 w-full h-12 rounded-xl bg-white border border-[#ecd4c3] focus:ring-2 focus:ring-[#FFD8C2] outline-none"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <p className="text-xs text-[#8a6a57] mt-2">Usaremos este número para confirmar sua reserva/promoção via WhatsApp.</p>
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
              className={`w-full flex items-center justify-center gap-3 py-3 rounded-full text-white font-bold shadow-lg transition-all
                ${!name || !validPhone(phone) || submitting ? "bg-[#e0a07b] cursor-not-allowed" : "bg-[#EA6111] hover:bg-[#cf4f0d]"}`}
              disabled={!name || !validPhone(phone) || submitting}
            >
              <Send size={18} />
              <span>{submitting ? "Abrindo WhatsApp..." : "ENVIAR"}</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-xs text-[#9a6e53] text-center"
            >
              Ao enviar, você será redirecionado ao WhatsApp para confirmar sua solicitação.
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}