import { motion } from 'motion/react';
import './OpenEnvelope.css';

export default function OpenEnvelope() {
  return (
    <div className="open-envelope">
      <motion.div
        className="envelope-icon"
        animate={{
          y: [0, -8, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span>&#9993;</span>
      </motion.div>
      <motion.h1
        className="envelope-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Open another envelope!
      </motion.h1>
      <motion.p
        className="envelope-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.6 }}
      >
        Grab a new envelope, scan the QR code, and see what you get!
      </motion.p>
    </div>
  );
}
