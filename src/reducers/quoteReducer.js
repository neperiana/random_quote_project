/*
 src/reducers/quoteReducer.js
*/
import types from './../actions/types';

const quoteReducer = (state = {}, action) => {  
  switch (action.type) {
    case types.NEW:
      return action.quote;
    default:
      return state;
  }
};

export default quoteReducer