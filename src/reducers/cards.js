import { FLIP_CARD } from '../constants';
import cardList from '../cardList';

export default (state = cardList, action) => {
  switch (action.type) {
    case FLIP_CARD: {
      const { id, index } = action.payload;
      const isFlipped = !state[index].isFlipped;
      const newState = [
        ...state.map((card) => {
          if (card.id === id) {
            return Object.assign({}, card, { isFlipped });
          }
          return card;
        }),
      ];
      return newState;
    }

    default:
      return state;
  }
};
