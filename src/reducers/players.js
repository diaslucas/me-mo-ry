import { ADD_POINT } from '../constants';

const initialState = { 1: { id: 1, name: 'Player 1', points: 0 }, 2: { id: 2, name: 'Player 2', points: 0 } };


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINT: {
      const player = action.payload;
      const { points } = state[player];
      return {
        ...state,
        [player]: {
          ...state[player],
          points: points + 1,
        },
      };
    }

    default:
      return state;
  }
};
