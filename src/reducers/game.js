import { SET_LAST_CARD_FLIPPED, SET_CURRENT_PLAYER } from '../constants';

const initialState = {
  isOver: false,
  winner: null,
  currentPlayer: 1,
  lastCardFlipped: { card: null, index: null },
  totalPlayers: 2,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_CARD_FLIPPED: {
      const { card, index } = action.payload;
      return {
        ...state,
        lastCardFlipped: { card, index },
      };
    }

    case SET_CURRENT_PLAYER: {
      return {
        ...state,
        currentPlayer: action.payload,
      };
    }

    default:
      return state;
  }
};
