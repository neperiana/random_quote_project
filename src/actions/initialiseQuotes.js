/*
 src/actions/initialiseQuotes.js
*/
import types from './types';

export const initialiseQuotes = (quotes) => dispatch => {
    console.log('dispatching quotes');
    console.log(quotes);
    dispatch({
        type: types.FETCH,
        quotes: quotes
    })
}