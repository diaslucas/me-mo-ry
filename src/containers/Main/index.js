import React from 'react';
import { uid } from 'react-uid';
import './main.scss';
import Card from '../../components/Card';
import store from '../../store';
import { flipCard, setLastCardFlipped } from '../../actions';


const Main = ({ cards }) => {
  const state = store.getState();
  const lastCardFlipped = state.game.lastCard;

  const handleClick = (card) => {
    const { id, name, isFlipped } = card;

    if (!isFlipped) {
      store.dispatch(flipCard(id));

      if (lastCardFlipped === null) {
        store.dispatch(setLastCardFlipped(card));
      } else {
        if (lastCardFlipped.name === name) {
          console.log('point');
        } else {
          setTimeout(() => {
            store.dispatch(flipCard(id));
            store.dispatch(flipCard(lastCardFlipped.id));
          }, 1000);
        }
        store.dispatch(setLastCardFlipped(null));
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
          onClick={() => handleClick(card)}
          key={uid(card.name, index)}
        />
      ))}
    </main>
  );
};

export default Main;
