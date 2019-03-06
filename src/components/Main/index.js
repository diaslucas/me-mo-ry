import React from 'react';
import { uid } from 'react-uid';
import _ from 'lodash';
import './main.scss';
import Card from '../Card';
import cardList from '../../cardList';

const Main = () => {
  const cards = _.values(cardList);
  return (
    <main className="main">
      {cards.map((card, index) => (
        <Card name={card.name} color={card.color} key={uid(card.name, index)} />
      ))}
    </main>
  );
};

export default Main;
