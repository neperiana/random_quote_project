/*
 src/reducers/quoteReducer.js
*/
import types from './../actions/types';

const quoteReducer = (state = {}, action) => {  
  switch (action.type) {
    case types.NEW:
      console.log('I did a NEW');
      console.log(action);
      return action.quote;
    default:
      return state;
  }
};

export default quoteReducer