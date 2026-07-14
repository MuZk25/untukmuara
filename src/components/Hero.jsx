import React from "react";
import { motion } from "framer-motion";

export default function Hero({ onOpenVideo }) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video - replace /placeholder.mp4 with your video in /public */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/placeholder.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Judul Keren — Transformasi dalam Sekejap
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-white/90"
        >
          Contoh deskripsi singkat yang menarik perhatian, pas untuk hero.
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex items-center gap-4 justify-center"
        >
          <button
            onClick={onOpenVideo}
            className="btn-primary flex items-center gap-3"
            aria-label="Lihat demo"
          >
            Tonton Demo
          </button>

          <a href="#products" className="bg-white px-4 py-2 rounded-md shadow-md text-sm">
            Lihat Produk
          </a>
        </motion.div>
      </div>
    </div>
  );
}
