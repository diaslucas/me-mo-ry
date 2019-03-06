import React from 'react';
import { uid } from 'react-uid';
import _ from 'lodash';
import './main.scss';
import Card from '../../components/Card';
import store from '../../store';

const Main = () => {
  const state = store.getState();
  const cards = _.values(state.cards);
  return (
    <main className="main">
      {cards.map((card, index) => (
        <Card name={card.name} color={card.color} key={uid(card.name, index)} />
      ))}
    </main>
  );
};

export default Main;
