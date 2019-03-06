import React from 'react';
import './app.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Aside from './components/Aside';

const App = () => (
  <React.Fragment>
    <Navbar />
    <div className="container-fluid app-content">
      <Aside />
      <Main />
    </div>
  </React.Fragment>
);

export default App;
