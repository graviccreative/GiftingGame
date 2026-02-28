import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
}

export default function FloatingCard({ children }: FloatingCardProps) {
  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotateZ: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
      <motion.div
        style={{
          width: '70%',
          height: 20,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.4)',
          filter: 'blur(8px)',
          margin: '12px auto 0',
        }}
        animate={{
          scaleX: [1, 0.85, 1],
          opacity: [0.4, 0.25, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
