import React from 'react';
import _ from 'lodash';
import './app.scss';
import Navbar from './components/Navbar';
import Main from './containers/Main';
import PlayersSidebar from './containers/PlayersSidebar';
import store from './store';

const App = () => {
  const state = store.getState();
  const { cards, game, players } = state;
  return (
    <React.Fragment>
      <Navbar />
      <div className="app-content">
        <PlayersSidebar players={_.values(players)} currentPlayer={game.currentPlayer} />
        <Main cards={cards} />
      </div>
    </React.Fragment>
  );
};

export default App;
