import { combineReducers } from 'redux';
import cards from './cards';
import game from './game';
import players from './players';

export default combineReducers({
  cards,
  players,
  game,
});
