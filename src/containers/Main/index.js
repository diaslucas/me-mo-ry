import React from 'react';
import './main.scss';
import Card from '../../components/Card';
import store from '../../store';
import { flipCard, setLastCardFlipped } from '../../actions';


const Main = ({ cards }) => {
  const state = store.getState();
  const lastCardFlipped = state.game.lastCard;

  const handleClick = (card, index) => {
    const { id, name, isFlipped } = card;

    if (!isFlipped) {
      store.dispatch(flipCard(id, index));

      if (lastCardFlipped.card === null) {
        store.dispatch(setLastCardFlipped(card, index));
      } else {
        if (lastCardFlipped.card.name === name) {
          console.log('point');
        } else {
          setTimeout(() => {
            store.dispatch(flipCard(id, index));
            store.dispatch(flipCard(lastCardFlipped.card.id, lastCardFlipped.index));
          }, 1000);
        }
        store.dispatch(setLastCardFlipped(null, null));
      }
    }
  };

  return (
    <main className="main">
      {cards.map((card, index) => (
        <Card
          name={card.name}
          color={card.color}
          isFlipped={card.isFlipped}
          onClick={() => handleClick(card, index)}
          key={card.id}
        />
      ))}
    </main>
  );
};

export default Main;
