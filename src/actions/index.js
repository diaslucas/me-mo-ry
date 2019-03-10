import { FLIP_CARD, SET_CURRENT_PLAYER, SET_LAST_CARD_FLIPPED, ADD_POINT } from '../constants';

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

export const addPoint = playerId => ({
  type: ADD_POINT,
  payload: playerId,
});
