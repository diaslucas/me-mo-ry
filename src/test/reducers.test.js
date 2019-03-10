/* eslint-disable no-undef */

import cards from '../reducers/cards';
import game from '../reducers/game';
import players from '../reducers/players';

describe('Testing Reducers', () => {
  describe('Cards Reducer', () => {
    test('should return the initial state', () => {
      expect(cards).toMatchSnapshot();
    });
  });

  describe('Game Reducer', () => {
    test('should return the initial state', () => {
      expect(game).toMatchSnapshot();
    });
  });

  describe('Players Reducer', () => {
    test('should return the initial state', () => {
      expect(players).toMatchSnapshot();
    });
  });
});
