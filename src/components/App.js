// React/Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CSS
import './App.css';

// Bootstrap components
import Button from 'react-bootstrap/Button';

// Actions
import { changeQuote } from '../actions/changeQuote';
import { initialiseQuotes } from '../actions/initialiseQuotes';


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
   * @summary handles fetch & refresh
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
    console.log(quoteCandidate.text);

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
            <div className="quoteTextBox"><p className="quoteText">{this.props.quote.text}</p></div>
            <div className="closingQuote"><svg id="svgQuotes" height="50" viewBox="0 0 409.294 409.294" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m233.882 29.235v175.412h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412z"/><path d="m0 204.647h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412h-175.412z"/></svg></div>
            <p className="quoteAuthor">{this.props.quote.author}</p>
          </div>
          <div className="QuoteFooter">
            <Button variant="outline-secondary" onClick={this.handleQuoteRefresh}>Inspire me!</Button>{' '}
            <Button variant="outline-secondary" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="{this.props.quote.text}" data-url="http://neperiana.github.io/random_quote_project" data-hashtags="react-app" data-show-count="false">Tweet</Button><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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