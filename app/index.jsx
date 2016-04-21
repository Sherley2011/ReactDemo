import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store'

import App from './containers/app'

const store = configureStore()

const app = document.createElement('div');
document.body.appendChild(app);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
)
