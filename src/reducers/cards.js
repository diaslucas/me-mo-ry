import { FLIP_CARD, BLOCK_CARD } from '../constants';
import cardList from '../cardList';

export default (state = cardList, action) => {
  switch (action.type) {
    case FLIP_CARD: {
      const id = action.payload;
      const cardState = state[id];
      const isFlipped = !cardState.isFlipped;
      return {
        ...state,
        [id]: {
          ...cardState,
          isFlipped,
        },
      };
    }

    default:
      return state;
  }
};
