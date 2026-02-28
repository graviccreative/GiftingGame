import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimationControls } from 'motion/react';
import { fireConfetti } from './ParticleExplosion';
import GiftCard from './GiftCard';
import type { GiftCardData } from '../types/gift';

interface CardRevealProps {
  data: GiftCardData;
  onComplete: () => void;
}

export default function CardReveal({ data, onComplete }: CardRevealProps) {
  const [showFront, setShowFront] = useState(false);
  const controls = useAnimationControls();
  const rotateY = useMotionValue(0);
  const hasFired = useRef(false);
  const hasCompleted = useRef(false);

  useEffect(() => {
    const unsubscribe = rotateY.on('change', (v) => {
      if (v >= 90 && !hasFired.current) {
        hasFired.current = true;
        setShowFront(true);
        fireConfetti();
      }
    });
    return unsubscribe;
  }, [rotateY]);

  useEffect(() => {
    const runAnimation = async () => {
      // Scale up + glow
      await controls.start({
        scale: 1.08,
        transition: { duration: 0.25, ease: 'easeOut' },
      });

      // Spin
      await controls.start({
        rotateY: 360,
        transition: { duration: 0.7, ease: 'easeInOut' },
      });

      // Settle
      await controls.start({
        scale: 1,
        transition: { duration: 0.3, ease: 'easeOut' },
      });

      if (!hasCompleted.current) {
        hasCompleted.current = true;
        onComplete();
      }
    };

    runAnimation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        animate={controls}
        style={{
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {showFront ? (
          <GiftCard face="front" data={data} />
        ) : (
          <GiftCard face="back" />
        )}
      </motion.div>
    </div>
  );
}
