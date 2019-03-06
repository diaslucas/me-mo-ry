function getRandomColor() {
  const colors = ['green', 'blue', 'red', 'orange', 'yellow', 'purple', 'ocean', 'pink'];
  const max = 8;
  const randomIndex = Math.floor(Math.random() * Math.floor(max));

  return colors[randomIndex];
}

const cardList = {
  1: { name: 'dragon', color: getRandomColor(), isFliped: false },
  2: { name: 'crow', color: getRandomColor(), isFliped: false },
  3: { name: 'feather', color: getRandomColor(), isFliped: false },
  4: { name: 'horse-head', color: getRandomColor(), isFliped: false },
  5: { name: 'kiwi-bird', color: getRandomColor(), isFliped: false },
  6: { name: 'paw', color: getRandomColor(), isFliped: false },
  7: { name: 'cat', color: getRandomColor(), isFliped: false },
  8: { name: 'horse', color: getRandomColor(), isFliped: false },
  9: { name: 'hippo', color: getRandomColor(), isFliped: false },
  10: { name: 'dog', color: getRandomColor(), isFliped: false },
  11: { name: 'dove', color: getRandomColor(), isFliped: false },
  12: { name: 'frog', color: getRandomColor(), isFliped: false },
  13: { name: 'spider', color: getRandomColor(), isFliped: false },
  14: { name: 'fish', color: getRandomColor(), isFliped: false },
  15: { name: 'egg', color: getRandomColor(), isFliped: false },
  16: { name: 'bone', color: getRandomColor(), isFliped: false },
};

// const store = {
//   cards: {},
// eslint-disable-next-line max-len
//   players: { 1: { id: 1, name: 'Player 1', points: 0 }, 2: { id: 2, name: 'Player 2', points: 0 } },
//   gameStatus: { isOver: false, winner: null, nextPlayer: 1 },

// };

export default cardList;
