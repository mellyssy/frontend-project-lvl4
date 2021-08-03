import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store.js';
import App from './components/App.jsx';
import '../assets/application.scss';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const container = document.querySelector('#chat');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);
