import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import configureStore from './store';
import { Provider } from 'react-redux';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
