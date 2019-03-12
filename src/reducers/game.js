import { SET_LAST_CARD_FLIPPED, SET_CURRENT_PLAYER, ADD_POINT, TOGGLE_SOUND } from '../constants';
import { numberOfPairs } from '../cardList';

const initialState = {
  isOver: false,
  currentPlayer: 1,
  cardsGuessed: 0,
  lastCardFlipped: { card: null, index: null },
  isSoundOn: true,
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

    case ADD_POINT: {
      const cardsGuessed = state.cardsGuessed + 1;
      const isOver = cardsGuessed === numberOfPairs;
      return {
        ...state,
        isOver,
        cardsGuessed,
      };
    }

    case TOGGLE_SOUND: {
      const isSoundOn = !state.isSoundOn;
      return {
        ...state,
        isSoundOn,
      };
    }

    default:
      return state;
  }
};
