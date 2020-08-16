/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';
import quotesReducer from './quotesReducer';

const rootReducer = combineReducers({
    quotes: quotesReducer,
    quote: quoteReducer
});

export default rootReducer