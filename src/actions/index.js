import { FLIP_CARD, SET_CURRENT_PLAYER, SET_LAST_CARD_FLIPPED } from '../constants';

export const flipCard = index => ({
  type: FLIP_CARD,
  payload: index,
});

export const setCurrentPlayer = id => ({
  type: SET_CURRENT_PLAYER,
  payload: id,
});

export const setLastCardFlipped = (card, index) => ({
  type: SET_LAST_CARD_FLIPPED,
  payload: { card, index },
});
