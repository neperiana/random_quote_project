/*
 src/actions/initialiseQuotes.js
*/
import types from './types';

export const initialiseQuotes = (quotes) => dispatch => {
    dispatch({
        type: types.FETCH,
        quotes: quotes
    })
}