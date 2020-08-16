/*
 * src/store.js
 * With initialState
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


function configureStore(initialState = {message: ['hola']}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};

export default configureStore