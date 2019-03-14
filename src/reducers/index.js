import { combineReducers } from 'redux';
import cards from './cards';
import game from './game';
import players from './players';

const appReducer = combineReducers({
  cards,
  players,
  game,
});

export default appReducer;
