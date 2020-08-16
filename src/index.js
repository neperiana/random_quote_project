import React from 'react';
import ReactDOM from 'react-dom';
import App from './react_components/App';
import './css/index.css';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
