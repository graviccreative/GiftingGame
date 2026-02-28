import { useParams, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { gifts } from '../config/gifts';
import { useGiftState } from '../hooks/useGiftState';
import GiftCard from '../components/GiftCard';
import FloatingCard from '../components/FloatingCard';
import CardReveal from '../components/CardReveal';
import CardThrowAway from '../components/CardThrowAway';
import ConfirmSwapModal from '../components/ConfirmSwapModal';
import OpenEnvelope from '../components/OpenEnvelope';
import FiestaBackground from '../components/FiestaBackground';

/** Wrapper that forces re-mount when the gift ID changes */
export default function GiftPage() {
  const { id } = useParams<{ id: string }>();

  if (!id || !gifts[id]) {
    return <Navigate to="/404" replace />;
  }

  return <GiftPageInner key={id} id={id} />;
}

function GiftPageInner({ id }: { id: string }) {
  const giftData = gifts[id];
  const {
    flowState,
    getDoneVariant,
    openGift,
    onRevealComplete,
    tryAgain,
    keepGift,
    gamble,
    onThrowComplete,
    gambleFromLock,
    keepFromLock,
  } = useGiftState(id);

  const doneVariant = flowState === 'DONE' ? getDoneVariant() : null;

  return (
    <div className="gift-page">
      <FiestaBackground />
      {flowState === 'LANDING' && (
        <>
          <FloatingCard>
            <GiftCard face="back" />
          </FloatingCard>
          <motion.button
            className="cta-button"
            onClick={openGift}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
          >
            Open Gift!
          </motion.button>
        </>
      )}

      {flowState === 'MUST_GAMBLE' && (
        <>
          <FloatingCard>
            <GiftCard face="back" />
          </FloatingCard>
          <motion.p
            style={{
              fontFamily: "'Rye', serif",
              fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
              color: 'var(--gold)',
              textAlign: 'center',
              zIndex: 1,
              maxWidth: '280px',
              lineHeight: 1.5,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            If you want to open this gift, you need to gamble
          </motion.p>
          <motion.button
            className="cta-button"
            onClick={gambleFromLock}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
          >
            Gamble!
          </motion.button>
          <motion.button
            className="cta-button secondary"
            onClick={keepFromLock}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4, ease: 'easeOut' }}
          >
            Keep my gift
          </motion.button>
        </>
      )}

      {flowState === 'REVEALING' && (
        <>
          <CardReveal data={giftData} onComplete={onRevealComplete} />
          {/* Invisible spacer to reserve button space so card doesn't jump on transition */}
          <div className="cta-button" style={{ visibility: 'hidden' }}>.</div>
        </>
      )}

      {flowState === 'REVEALED' && (
        <>
          <GiftCard face="front" data={giftData} />
          <motion.button
            className="cta-button secondary"
            onClick={tryAgain}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}
          >
            Gamble Gift
          </motion.button>
        </>
      )}

      {flowState === 'CONFIRM_SWAP' && (
        <>
          <GiftCard face="front" data={giftData} />
          <ConfirmSwapModal onKeep={keepGift} onGamble={gamble} />
        </>
      )}

      {flowState === 'THROWING' && (
        <CardThrowAway onComplete={onThrowComplete}>
          <GiftCard face="front" data={giftData} />
        </CardThrowAway>
      )}

      {flowState === 'OPEN_ENVELOPE' && (
        <OpenEnvelope />
      )}

      {flowState === 'DONE' && doneVariant === 'thrown' && (
        <div className="done-thrown">
          <div className="thrown-card-wrapper">
            <GiftCard face="front" data={giftData} />
            <div className="thrown-stamp">
              <span>THROWN OUT</span>
            </div>
          </div>
        </div>
      )}

      {flowState === 'DONE' && doneVariant === 'missed' && (
        <div className="done-missed">
          <GiftCard face="front" data={giftData} />
          <p className="missed-text">See what you could have won?</p>
        </div>
      )}

      {flowState === 'DONE' && doneVariant === 'normal' && (
        <GiftCard face="front" data={giftData} />
      )}

      {flowState === 'DONE' && doneVariant === 'post-gamble' && (
        <GiftCard face="front" data={giftData} />
      )}
    </div>
  );
}
