import { SET_LAST_CARD_FLIPPED } from '../constants';

const initialState = {
  isOver: false,
  winner: null,
  currentPlayer: 1,
  lastCard: { card: null, index: null },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_CARD_FLIPPED: {
      const { card, index } = action.payload;
      return {
        ...state,
        lastCard: { card, index },
      };
    }

    default:
      return state;
  }
};
