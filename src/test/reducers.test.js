/* eslint-disable no-undef */
import cards from '../reducers/cards';
import game from '../reducers/game';
import players from '../reducers/players';


describe('Testing reducers', () => {
  describe('Cards Reducer', () => {
    test('Initial state match snapshot', () => {
      expect(cards).toMatchSnapshot();
    });
  });

  describe('Game Reducer', () => {
    test('Initial state match snapshot', () => {
      expect(game).toMatchSnapshot();
    });
  });

  describe('Players Reducer', () => {
    test('Initial state match snapshot', () => {
      expect(players).toMatchSnapshot();
    });
  });
});
