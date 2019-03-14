import React from 'react';
import './main.scss';
import Card from '../../components/Card';
import store from '../../store';
import { flipCard, setLastCardFlipped, addPoint } from '../../actions';
import { unflipCards, changeCurrentPlayer, playAudio } from '../../helpers';
import coinSound from '../../sounds/coin.wav';
import yoshiSwallowSound from '../../sounds/yoshi_swallow.wav';

const Main = ({ cards }) => {
  const audioSuccess = new Audio(coinSound);
  const audioFail = new Audio(yoshiSwallowSound);

  const handleClick = (card, index) => {
    const state = store.getState();
    const { game } = state;
    const { currentPlayer, lastCardFlipped } = game;
    const { name, isFlipped } = card;

    if (!isFlipped) {
      store.dispatch(flipCard(index));

      if (lastCardFlipped.card === null) {
        store.dispatch(setLastCardFlipped(card, index));
      } else {
        if (lastCardFlipped.card.name === name) {
          store.dispatch(addPoint(currentPlayer));
          playAudio(audioSuccess);
        } else {
          playAudio(audioFail);
          setTimeout(() => {
            unflipCards(store, index, lastCardFlipped);
            changeCurrentPlayer(store);
          }, 800);
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
