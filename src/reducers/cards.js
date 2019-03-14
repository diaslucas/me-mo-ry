import _ from 'lodash';
import { FLIP_CARD, RESET_GAME } from '../constants';
import cardList from '../cardList';

const initialState = _.shuffle(cardList);

export default (state = initialState, action) => {
  switch (action.type) {
    case FLIP_CARD: {
      const index = action.payload;
      return [
        ...state.slice(0, index),
        { ...state[index], isFlipped: !state[index].isFlipped },
        ...state.slice(index + 1),
      ];
    }

    case RESET_GAME: {
      return [
        ..._.shuffle(initialState),
      ];
    }

    default:
      return state;
  }
};
