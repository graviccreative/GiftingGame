import { motion } from 'motion/react';
import FiestaBackground from '../components/FiestaBackground';

export default function HomePage() {
  return (
    <div className="gift-page">
      <FiestaBackground />

      <motion.h1
        style={{
          fontFamily: "'Rye', serif",
          fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
          color: 'var(--gold)',
          textAlign: 'center',
          textShadow: '0 2px 12px rgba(255, 215, 0, 0.4)',
          zIndex: 1,
        }}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Welcome to the gifting game
      </motion.h1>

      <motion.p
        style={{
          fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
          color: 'var(--text-light)',
          opacity: 0.7,
          textAlign: 'center',
          zIndex: 1,
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
      >
        Open one of your envelopes to start
      </motion.p>
    </div>
  );
}
