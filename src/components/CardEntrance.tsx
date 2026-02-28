import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface CardEntranceProps {
  children: ReactNode;
}

export default function CardEntrance({ children }: CardEntranceProps) {
  return (
    <motion.div
      initial={{ y: '100vh', opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}
