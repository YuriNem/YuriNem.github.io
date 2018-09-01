import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

import AppContainer from './containers/App.js';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
, root);
