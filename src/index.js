import React from 'react';
import ReactDOM from 'react-dom';
import {createStore}  from 'redux';
import {Provider}  from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './store/reducer/rootreducer';

const store=createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store} ><App  /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

