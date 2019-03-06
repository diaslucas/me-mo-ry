/* eslint-disable radix */
import _ from 'lodash';

function getRandomColor() {
  const colors = ['green', 'blue', 'red', 'orange', 'yellow', 'purple', 'ocean', 'pink'];
  const max = 8;
  const randomIndex = Math.floor(Math.random() * Math.floor(max));

  return colors[randomIndex];
}

const cards1 = {
  1: { id: 1, name: 'dragon', color: getRandomColor(), isFlipped: false },
  2: { id: 2, name: 'crow', color: getRandomColor(), isFlipped: false },
  3: { id: 3, name: 'feather', color: getRandomColor(), isFlipped: false },
  4: { id: 4, name: 'horse-head', color: getRandomColor(), isFlipped: false },
  5: { id: 5, name: 'kiwi-bird', color: getRandomColor(), isFlipped: false },
  6: { id: 6, name: 'paw', color: getRandomColor(), isFlipped: false },
  7: { id: 7, name: 'cat', color: getRandomColor(), isFlipped: false },
  8: { id: 8, name: 'horse', color: getRandomColor(), isFlipped: false },
  9: { id: 9, name: 'hippo', color: getRandomColor(), isFlipped: false },
  10: { id: 10, name: 'dog', color: getRandomColor(), isFlipped: false },
  11: { id: 11, name: 'dove', color: getRandomColor(), isFlipped: false },
  12: { id: 12, name: 'frog', color: getRandomColor(), isFlipped: false },
  13: { id: 13, name: 'spider', color: getRandomColor(), isFlipped: false },
  14: { id: 14, name: 'fish', color: getRandomColor(), isFlipped: false },
  15: { id: 15, name: 'egg', color: getRandomColor(), isFlipped: false },
  16: { id: 16, name: 'bone', color: getRandomColor(), isFlipped: false },
};

let cards2 = _.mapKeys(cards1, (value, key) => parseInt(key) + 16);

cards2 = _.mapValues(cards2, (card) => {
  const id = parseInt(card.id) + parseInt(_.findLastKey(cards1, 'name'));
  return {
    ...card,
    id,
  };
});


const cardList = { ...cards1, ...cards2 };

// const store = {
//   cards: {},
// eslint-disable-next-line max-len
//   players: { 1: { id: 1, name: 'Player 1', points: 0 }, 2: { id: 2, name: 'Player 2', points: 0 } },

// };

export default cardList;
