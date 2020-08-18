import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeQuote } from '../actions/changeQuote';
import { initialiseQuotes } from '../actions/initialiseQuotes';

import logo from '../logo.svg';
import './App.css';

const config = {
  apiUrl: 'https://type.fit/api/quotes',
}

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = (dispatch) => {
  return {
    refreshQuote: (quote) => dispatch(changeQuote(quote)),
    saveQuotes: (quotes) => dispatch(initialiseQuotes(quotes))
  }
};

/* 
 * mapStateToProps
*/
const mapStateToProps = (state) => {
  return {
    quote: state.quote,
    quotes: state.quotes
  }
};

/**
 * @class Container
 * @extends {Component}
 */
class Container extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */

  constructor(props) {
    super(props);

    this.handleQuoteRefresh = this.handleQuoteRefresh.bind(this);
    this.handleQuotesFetch = this.handleQuotesFetch.bind(this);
  }

  handleQuotesFetch() {
    // Call api and fetch results
    fetch(config.apiUrl).then(function(response) {
        return response.json();
    }).then(data => {
      console.log('fetched quotes');
      console.log(data[0]);
      this.props.saveQuotes(data);
      this.handleQuoteRefresh();
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleQuoteRefresh() {
    console.log('hANDLING refresh');
    console.log(this.props.quotes);
    let random_index = this.getRandomInt(this.props.quotes.length);
    this.props.refreshQuote(this.props.quotes[random_index]);
  }

  componentDidMount() {
    this.handleQuotesFetch();
  }

  render() {
    return (
      <div className="App">
        <p>"{this.props.quote.text}"</p>
        <p>{this.props.quote.author}</p>
        <button onClick={this.handleQuoteRefresh}>Refresh</button>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Container);
export default App