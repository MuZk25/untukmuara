import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModalVideo({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-black rounded-md max-w-3xl w-full mx-4 overflow-hidden"
          >
            <div className="relative pb-[56.25%]">
              <video
                src="/placeholder.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                controls
                autoPlay
              />
            </div>

            <div className="p-4 flex justify-end">
              <button onClick={onClose} className="px-4 py-2 bg-white rounded">Tutup</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
