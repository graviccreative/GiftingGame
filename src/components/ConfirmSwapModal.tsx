import { motion } from 'motion/react';
import './ConfirmSwapModal.css';

interface ConfirmSwapModalProps {
  onKeep: () => void;
  onGamble: () => void;
}

export default function ConfirmSwapModal({ onKeep, onGamble }: ConfirmSwapModalProps) {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="modal-panel"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
      >
        <h2 className="modal-title">Feeling Lucky?</h2>
        <p className="modal-body">
          Are you sure? You can't get this gift back if you don't like the new one.
        </p>
        <div className="modal-buttons">
          <button className="cta-button" onClick={onGamble}>
            I'm sure, gamble!
          </button>
          <button className="cta-button secondary" onClick={onKeep}>
            Keep this gift
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
