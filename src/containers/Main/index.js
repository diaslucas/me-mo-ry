import React from 'react';
import './main.scss';
import Card from '../../components/Card';
import store from '../../store';
import { flipCard, setLastCardFlipped } from '../../actions';
import { unflipCards, changeCurrentPlayer } from '../../helpers';

const Main = ({ cards }) => {
  const handleClick = (card, index) => {
    const state = store.getState();
    const lastCardFlipped = state.game.lastCard;
    const { name, isFlipped } = card;

    if (!isFlipped) {
      store.dispatch(flipCard(index));

      if (lastCardFlipped.card === null) {
        store.dispatch(setLastCardFlipped(card, index));
      } else {
        if (lastCardFlipped.card.name === name) {
          console.log('point');
        } else {
          setTimeout(() => {
            unflipCards(store, index, lastCardFlipped);
            changeCurrentPlayer(store);
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
