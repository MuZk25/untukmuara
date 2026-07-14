import React from "react";
import { motion } from "framer-motion";

const items = [
  { title: "Cepat", desc: "Implementasi cepat & responsive." },
  { title: "Ringan", desc: "Bundle kecil, performa baik." },
  { title: "Animasi", desc: "Transisi halus & menarik." }
];

export default function Features() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Fitur Utama
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2">{it.title}</h3>
            <p className="text-sm text-gray-600">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
