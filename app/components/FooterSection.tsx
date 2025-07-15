'use client';
import { motion } from "framer-motion";
export const FooterSection = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © 2025 Abhit Yadav. Built with React + NextJs, Framer Motion & Three.js.
        </motion.p>
      </div>
    </footer>
  );
};
