import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './routes/index';
import store from './store/index';
import './assets/scss/style.scss';

const target = document.getElementById('app');

render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Router />
    </BrowserRouter>
  </Provider>,
  target,
);
