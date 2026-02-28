import type { GiftCardData } from '../types/gift';

export const CARD_BACK_IMAGE = '/images/card-back.png';

// ============================================
// EDIT YOUR GIFTS HERE
// Just change the image paths and titles!
// Drop images into public/images/
// ============================================

export const gifts: Record<string, GiftCardData> = {
  '1': {
    id: '1',
    image: '/images/gift-1.png',
    title: '$50 Amazon Gift Card',
  },
  '2': {
    id: '2',
    image: '/images/gift-2.png',
    title: '$75 Nike Gift Card',
  },
  '3': {
    id: '3',
    image: '/images/gift-3.png',
    title: '$80 Uber Eats Gift Card',
  },
};
