import { SET_LAST_CARD_FLIPPED } from '../constants';

const initialState = { isOver: false, winner: null, currentPlayer: 1, lastCard: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_CARD_FLIPPED: {
      const lastCard = action.payload;
      return {
        ...state,
        lastCard,
      };
    }

    default:
      return state;
  }
};
