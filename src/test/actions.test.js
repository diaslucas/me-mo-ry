/* eslint-disable no-undef */
import { flipCard, setLastCardFlipped, setCurrentPlayer, addPoint, setPlayerName } from '../actions';

describe('Testing Actions', () => {
  describe('Cards Actions', () => {
    test('should handle flipCard', () => {
      expect(flipCard(1)).toMatchSnapshot();
    });
  });

  describe('Game Actions', () => {
    test('should handle setLastCardFlipped', () => {
      expect(setLastCardFlipped({ id: 30, name: 'fish', color: 'pink', isFlipped: false }, 2)).toMatchSnapshot();
    });

    test('should handle setCurrentPlayer', () => {
      expect(setCurrentPlayer(1)).toMatchSnapshot();
    });
  });

  describe('Players Actions', () => {
    test('should handle addPoint', () => {
      expect(addPoint(1)).toMatchSnapshot();
    });

    test('should handle setPlayerName', () => {
      expect(setPlayerName(1, 'Lucas')).toMatchSnapshot();
    });
  });
});
