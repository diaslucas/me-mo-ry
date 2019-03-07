import _ from 'lodash';

function getRandomColor() {
  const colors = ['green', 'blue', 'red', 'orange', 'yellow', 'purple', 'ocean', 'pink'];
  const max = 8;
  const randomIndex = Math.floor(Math.random() * Math.floor(max));

  return colors[randomIndex];
}

const originalCards = [
  { id: 1, name: 'dragon', color: getRandomColor(), isFlipped: false },
  { id: 2, name: 'crow', color: getRandomColor(), isFlipped: false },
  { id: 3, name: 'feather', color: getRandomColor(), isFlipped: false },
  { id: 4, name: 'horse-head', color: getRandomColor(), isFlipped: false },
  { id: 5, name: 'kiwi-bird', color: getRandomColor(), isFlipped: false },
  { id: 6, name: 'paw', color: getRandomColor(), isFlipped: false },
  { id: 7, name: 'cat', color: getRandomColor(), isFlipped: false },
  { id: 8, name: 'horse', color: getRandomColor(), isFlipped: false },
  { id: 9, name: 'hippo', color: getRandomColor(), isFlipped: false },
  { id: 10, name: 'dog', color: getRandomColor(), isFlipped: false },
  { id: 11, name: 'dove', color: getRandomColor(), isFlipped: false },
  { id: 12, name: 'frog', color: getRandomColor(), isFlipped: false },
  { id: 13, name: 'spider', color: getRandomColor(), isFlipped: false },
  { id: 14, name: 'fish', color: getRandomColor(), isFlipped: false },
  { id: 15, name: 'egg', color: getRandomColor(), isFlipped: false },
  { id: 16, name: 'bone', color: getRandomColor(), isFlipped: false },
];

const copies = originalCards.map(card => (
  { id: card.id + 16, name: card.name, color: card.color, isFlipped: card.isFlipped }
));

const cardList = [...originalCards, ...copies];
const shuffledCardList = _.shuffle(cardList);


export default shuffledCardList;
