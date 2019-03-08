import { FLIP_CARD } from '../constants';
import cardList from '../cardList';

export default (state = cardList, action) => {
  switch (action.type) {
    case FLIP_CARD: {
      const index = action.payload;
      return [
        ...state.slice(0, index),
        { ...state[index], isFlipped: !state[index].isFlipped },
        ...state.slice(index + 1),
      ];

    }

    default:
      return state;
  }
};
