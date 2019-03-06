import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';

function fancyLog() {
  console.log('%c Rendered with 👉 👉👇', 'background: purple; color: #FFF');
  console.log(store.getState());
}

const render = () => {
  fancyLog();
  // eslint-disable-next-line react/no-render-return-value
  return ReactDOM.render(<App />, document.getElementById('root'));
};

render();
store.subscribe(render);
