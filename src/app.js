import React from 'react';
import _ from 'lodash';
import './app.scss';
import Navbar from './components/Navbar';
import Main from './containers/Main';
import Aside from './components/Aside';
import store from './store';

const App = () => {
  const state = store.getState();
  const { cards } = state;
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid app-content">
        <Aside />
        <Main cards={cards} />
      </div>
    </React.Fragment>
  );
};

export default App;
