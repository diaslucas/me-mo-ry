import { FLIP_CARD, SET_CURRENT_PLAYER, SET_LAST_CARD_FLIPPED } from '../constants';

export const flipCard = id => ({
  type: FLIP_CARD,
  payload: id,
});

export const setCurrentPlayer = id => ({
  type: SET_CURRENT_PLAYER,
  payload: id,
});

export const setLastCardFlipped = card => ({
  type: SET_LAST_CARD_FLIPPED,
  payload: card,
});
