/*
 src/actions/refreshQuotes.js
*/
import types from './types';
import CSVToArray from '../extras/readCSVtoArray';

const quotes = CSVToArray('../quotes.csv',',');
const MAX_QUOTES = quotes.length;

const getNewQuote = () => {
    random_index = Math.floor(Math.random() * MAX_QUOTES);
    return(quotes[random_index]);
}

export const refreshQuote = (message) => dispatch => {
    dispatch({
        type: types.REFRESH,
        message: getNewQuote()
    })
}