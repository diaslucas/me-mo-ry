import React from 'react';
import _ from 'lodash';
import './app.scss';
import Navbar from './components/Navbar';
import Main from './containers/Main';
import PlayersSidebar from './containers/PlayersSidebar';
import store from './store';
import Winner from './components/Winner';
import { getWinner } from './helpers';

const App = () => {
  const state = store.getState();
  const { cards, game, players } = state;
  const player = game.isOver ? getWinner(players) : { name: '', points: '' };

  return (
    <React.Fragment>
      <Navbar />
      <Winner player={player} visible={game.isOver} />
      <div className="app-content">
        <PlayersSidebar players={_.values(players)} currentPlayer={game.currentPlayer} />
        <Main cards={cards} />
      </div>
    </React.Fragment>
  );
};

export default App;
