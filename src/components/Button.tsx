import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, href = '#', w = 'w-32 ' }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-foodie-orange hover:bg-foodie-dark-orange text-white px-5 py-2 rounded-full font-medium flex items-center transition-colors ${w}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}