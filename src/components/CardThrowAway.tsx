import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface CardThrowAwayProps {
  children: ReactNode;
  onComplete: () => void;
}

export default function CardThrowAway({ children, onComplete }: CardThrowAwayProps) {
  return (
    <motion.div
      initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
      animate={{
        x: -400,
        y: -150,
        rotate: -35,
        scale: 0.4,
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.36, 0, 0.66, -0.56],
      }}
      onAnimationComplete={onComplete}
    >
      {children}
    </motion.div>
  );
}
