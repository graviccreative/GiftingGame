import { useState, useCallback, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { gifts } from '../config/gifts';
import type { FlowState, GiftPersistence } from '../types/gift';

const GAMBLE_KEY = 'gift-gambled';
const THROWN_KEY = 'gift-thrown-id';
const POST_GAMBLE_KEY = 'gift-post-gamble-id';

export type DoneVariant = 'normal' | 'thrown' | 'post-gamble' | 'missed';

/** Check if a specific gift has been opened */
function isGiftOpened(id: string): boolean {
  try {
    const raw = localStorage.getItem(`gift-${id}`);
    if (raw) {
      const data: GiftPersistence = JSON.parse(raw);
      return data.opened;
    }
  } catch {
    // ignore
  }
  return false;
}

/** Find the first opened gift that isn't the given ID */
function findOtherOpenedGift(currentId: string): string | null {
  for (const id of Object.keys(gifts)) {
    if (id !== currentId && isGiftOpened(id)) {
      return id;
    }
  }
  return null;
}

export function useGiftState(giftId: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

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

  // Track which gift was already opened (for MUST_GAMBLE screen)
  const [lockedByGiftId] = useState<string | null>(() => {
    if (isReset) return null;
    return findOtherOpenedGift(giftId);
  });

  const getInitialState = (): FlowState => {
    if (isReset) return 'LANDING';

    // If this gift was already opened, go to DONE
    if (isGiftOpened(giftId)) return 'DONE';

    if (hasGambled()) {
      // The thrown gift always goes to DONE
      if (getThrownId() === giftId) return 'DONE';
      // If a post-gamble gift was already opened, remaining gifts are "missed"
      if (getPostGambleId()) return 'DONE';
      // Otherwise this could be the second gift to open — show LANDING
      return 'LANDING';
    }

    // Check if another gift is already opened — lock this one
    if (lockedByGiftId) {
      return 'MUST_GAMBLE';
    }

    return 'LANDING';
  };

  const [flowState, setFlowState] = useState<FlowState>(getInitialState);

  // Determine what variant of DONE to show
  const getDoneVariant = (): DoneVariant => {
    const thrownId = getThrownId();
    if (thrownId === giftId) return 'thrown';

    if (hasGambled()) {
      if (isGiftOpened(giftId)) return 'post-gamble';
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

  // MUST_GAMBLE actions: user scanned a new gift but already opened another
  const gambleFromLock = useCallback(() => {
    if (flowState === 'MUST_GAMBLE' && lockedByGiftId) {
      try {
        localStorage.setItem(GAMBLE_KEY, 'true');
        localStorage.setItem(THROWN_KEY, lockedByGiftId);
      } catch {
        // ignore
      }
      setFlowState('REVEALING');
    }
  }, [flowState, lockedByGiftId]);

  const keepFromLock = useCallback((mode?: 'peek') => {
    if (flowState === 'MUST_GAMBLE') {
      if (mode === 'peek') {
        // Show what they missed — go to DONE with missed variant
        setFlowState('DONE');
      } else if (lockedByGiftId) {
        navigate(`/gift/${lockedByGiftId}`);
      }
    }
  }, [flowState, lockedByGiftId, navigate]);

  return {
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
    lockedByGiftId,
  };
}
