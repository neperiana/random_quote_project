/*
 src/actions/changeQuote.js
*/
import types from './types';

export const changeQuote = (quote) => dispatch => {
    dispatch({
        type: types.NEW,
        quote: quote
    })
}