import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import type { FlowState, GiftPersistence } from '../types/gift';

const GAMBLE_KEY = 'gift-gambled';
const THROWN_KEY = 'gift-thrown-id';
const POST_GAMBLE_KEY = 'gift-post-gamble-id';

export type DoneVariant = 'normal' | 'thrown' | 'post-gamble' | 'missed';

export function useGiftState(giftId: string) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Handle ?reset=true synchronously before computing initial state
  const isReset = searchParams.get('reset') === 'true';
  if (isReset) {
    localStorage.removeItem(`gift-${giftId}`);
    localStorage.removeItem(GAMBLE_KEY);
    localStorage.removeItem(THROWN_KEY);
    localStorage.removeItem(POST_GAMBLE_KEY);
  }

  // Clean up the URL param after reset
  useEffect(() => {
    if (isReset) {
      setSearchParams({}, { replace: true });
    }
  }, [isReset, setSearchParams]);

  const hasGambled = (): boolean => {
    try {
      return localStorage.getItem(GAMBLE_KEY) === 'true';
    } catch {
      return false;
    }
  };

  const getThrownId = (): string | null => {
    try {
      return localStorage.getItem(THROWN_KEY);
    } catch {
      return null;
    }
  };

  const getPostGambleId = (): string | null => {
    try {
      return localStorage.getItem(POST_GAMBLE_KEY);
    } catch {
      return null;
    }
  };

  const getInitialState = (): FlowState => {
    if (isReset) return 'LANDING';

    // If this gift was already opened, go to DONE
    try {
      const raw = localStorage.getItem(`gift-${giftId}`);
      if (raw) {
        const data: GiftPersistence = JSON.parse(raw);
        if (data.opened) return 'DONE';
      }
    } catch {
      // ignore corrupt localStorage
    }

    if (hasGambled()) {
      // The thrown gift always goes to DONE
      if (getThrownId() === giftId) return 'DONE';
      // If a post-gamble gift was already opened, remaining gifts are "missed"
      if (getPostGambleId()) return 'DONE';
      // Otherwise this could be the second gift to open — show LANDING
    }

    return 'LANDING';
  };

  const [flowState, setFlowState] = useState<FlowState>(getInitialState);

  // Determine what variant of DONE to show
  const getDoneVariant = (): DoneVariant => {
    const thrownId = getThrownId();
    if (thrownId === giftId) return 'thrown';

    if (hasGambled()) {
      // If this gift was opened (not thrown), it's the post-gamble gift
      try {
        const raw = localStorage.getItem(`gift-${giftId}`);
        if (raw) {
          const data: GiftPersistence = JSON.parse(raw);
          if (data.opened) return 'post-gamble';
        }
      } catch {
        // ignore
      }
      return 'missed';
    }

    return 'normal';
  };

  const persist = (data: GiftPersistence) => {
    try {
      localStorage.setItem(`gift-${giftId}`, JSON.stringify(data));
    } catch {
      // localStorage might be full or blocked
    }
  };

  const openGift = useCallback(() => {
    if (flowState === 'LANDING') setFlowState('REVEALING');
  }, [flowState]);

  const onRevealComplete = useCallback(() => {
    if (flowState === 'REVEALING') {
      persist({ opened: true });
      if (hasGambled()) {
        // Mark this as the post-gamble gift
        try {
          localStorage.setItem(POST_GAMBLE_KEY, giftId);
        } catch {
          // ignore
        }
        setFlowState('DONE');
      } else {
        setFlowState('REVEALED');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flowState]);

  const tryAgain = useCallback(() => {
    if (flowState === 'REVEALED') setFlowState('CONFIRM_SWAP');
  }, [flowState]);

  const keepGift = useCallback(() => {
    if (flowState === 'CONFIRM_SWAP') setFlowState('DONE');
  }, [flowState]);

  const gamble = useCallback(() => {
    if (flowState === 'CONFIRM_SWAP') {
      try {
        localStorage.setItem(GAMBLE_KEY, 'true');
        localStorage.setItem(THROWN_KEY, giftId);
      } catch {
        // ignore
      }
      setFlowState('THROWING');
    }
  }, [flowState, giftId]);

  const onThrowComplete = useCallback(() => {
    if (flowState === 'THROWING') setFlowState('OPEN_ENVELOPE');
  }, [flowState]);

  return {
    flowState,
    getDoneVariant,
    openGift,
    onRevealComplete,
    tryAgain,
    keepGift,
    gamble,
    onThrowComplete,
  };
}
