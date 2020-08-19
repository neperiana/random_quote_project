/*
 src/reducers/quotesReducer.js
*/
import types from './../actions/types';

const quotesReducer = (state = {}, action) => {  
  switch (action.type) {
    case types.FETCH:
      return action.quotes;
    default:
      return state;
  }
};

export default quotesReducer