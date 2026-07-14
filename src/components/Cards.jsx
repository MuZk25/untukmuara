import React from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, title: "Produk A", desc: "Deskripsi singkat", img: "/thumb1.jpg" },
  { id: 2, title: "Produk B", desc: "Deskripsi singkat", img: "/thumb2.jpg" },
  { id: 3, title: "Produk C", desc: "Deskripsi singkat", img: "/thumb3.jpg" }
];

export default function Cards() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Produk Unggulan
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img src={p.img} alt={p.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
              <div className="flex items-center justify-between">
                <button className="btn-primary">Beli</button>
                <button className="text-sm text-primary underline">Detail</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
