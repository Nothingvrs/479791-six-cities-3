import React, {PureComponent} from 'react';
import Main from '../main/main.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import OfferCardDetail from '../offer-card-details/offer-card-details.jsx';
import PropTypes from 'prop-types';
import {cardPropTypes} from "../../utils/utils";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: -1
    };
    this._renderCards = this._renderCards.bind(this);
    this._cardHeaderClickHandler = this._cardHeaderClickHandler.bind(this);
  }

  _renderCards() {
    const {cards} = this.props;
    if (this.state.cardNumber === -1 || this.state.cardNumber > cards.length) {
      return <Main {...this.props} onHeaderClick = {this._cardHeaderClickHandler}/>;
    } else {
      return <OfferCardDetail card={cards[this.state.cardNumber]} onHeaderClick={this._cardHeaderClickHandler}/>;
    }
  }

  _cardHeaderClickHandler(id) {
    this.setState({
      cardNumber: id
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">{this._renderCards()}</Route>
            <Route exact path="/dev-offer-detail">
              <OfferCardDetail card={this.props.cards[0]} onHeaderClick={this._cardHeaderClickHandler}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired
};

export default App;
