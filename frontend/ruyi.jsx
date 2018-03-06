import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

// START_TESTING!!!!
let store = configureStore();
window.getState = store.getState;
window.dispatch = store.dispatch;
// TESTING_END

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>RUYI</h1>, root);
});
