export type FlowState =
  | 'LANDING'
  | 'REVEALING'
  | 'REVEALED'
  | 'CONFIRM_SWAP'
  | 'THROWING'
  | 'OPEN_ENVELOPE'
  | 'DONE';

export interface GiftCardData {
  id: string;
  image: string;
  title: string;
}

export interface GiftPersistence {
  opened: boolean;
}
