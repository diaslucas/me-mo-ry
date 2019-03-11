import { ADD_POINT, SET_PLAYER_NAME } from '../constants';

const initialState = { 1: { id: 1, name: 'Player 1', points: 0 }, 2: { id: 2, name: 'Player 2', points: 0 } };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINT: {
      const playerId = action.payload;
      const playerState = state[playerId];
      const { points } = state[playerId];
      return {
        ...state,
        [playerId]: {
          ...playerState,
          points: points + 1,
        },
      };
    }

    case SET_PLAYER_NAME: {
      const { playerId, name } = action.payload;
      const playerState = state[playerId];
      return {
        ...state,
        [playerId]: {
          ...playerState,
          name,
        },
      };
    }

    default:
      return state;
  }
};
