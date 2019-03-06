function getRandomColor() {
  const colors = ['green', 'blue', 'red', 'orange', 'yellow', 'purple', 'ocean', 'pink'];
  const max = 8;
  const randomIndex = Math.floor(Math.random() * Math.floor(max));

  return colors[randomIndex];
}

const cardList = {
  1: { name: 'dragon', color: getRandomColor() },
  2: { name: 'crow', color: getRandomColor() },
  3: { name: 'feather', color: getRandomColor() },
  4: { name: 'horse-head', color: getRandomColor() },
  5: { name: 'kiwi-bird', color: getRandomColor() },
  6: { name: 'paw', color: getRandomColor() },
  7: { name: 'cat', color: getRandomColor() },
  8: { name: 'horse', color: getRandomColor() },
  9: { name: 'hippo', color: getRandomColor() },
  10: { name: 'dog', color: getRandomColor() },
  11: { name: 'dove', color: getRandomColor() },
  12: { name: 'frog', color: getRandomColor() },
  13: { name: 'spider', color: getRandomColor() },
  14: { name: 'fish', color: getRandomColor() },
  15: { name: 'egg', color: getRandomColor() },
  16: { name: 'bone', color: getRandomColor() },
};

export default cardList;
