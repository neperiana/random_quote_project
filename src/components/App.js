import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeQuote } from '../actions/changeQuote';
import { initialiseQuotes } from '../actions/initialiseQuotes';

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
    let random_index = this.getRandomInt(this.props.quotes.length);
    let quoteCandidate = this.props.quotes[random_index];

    if(! quoteCandidate.author) {
      quoteCandidate.author = 'Anonymous';
    }; 

    this.props.refreshQuote(quoteCandidate);
  }

  componentDidMount() {
    this.handleQuotesFetch();
  }

  render() {
    return (
      <div className="App">
        <div className="Container">
          <div className="Quote">
          <div className="openingQuote"><svg id="svgQuotes" height="50" viewBox="0 0 409.294 409.294" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m0 204.647v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941v-58.471c-96.728 0-175.412 78.684-175.412 175.412z"/><path d="m409.294 87.706v-58.471c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412v-175.412h-116.941c0-64.48 52.461-116.941 116.941-116.941z"/></svg></div>
            <p className="quoteText">"{this.props.quote.text}"</p>
            <div className="closingQuote"><svg id="svgQuotes" height="50" viewBox="0 0 409.294 409.294" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m233.882 29.235v175.412h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412z"/><path d="m0 204.647h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412h-175.412z"/></svg></div>
            <p className="quoteAuthor">{this.props.quote.author}</p>
          </div>
          <div className="QuoteFooter">
            <button className="btn-default" onClick={this.handleQuoteRefresh}>Refresh</button>
          </div>
        </div>
        <div className="Footer">
          <p>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        </div>
      </div>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Container);
export default App