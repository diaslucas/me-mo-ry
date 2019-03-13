import {
  FLIP_CARD, SET_CURRENT_PLAYER, SET_LAST_CARD_FLIPPED, ADD_POINT,
  SET_PLAYER_NAME, TOGGLE_SOUND, RESET_GAME } from '../constants';

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

export const setPlayerName = (playerId, name) => ({
  type: SET_PLAYER_NAME,
  payload: { playerId, name },
});

export const toggleSound = () => ({
  type: TOGGLE_SOUND,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
