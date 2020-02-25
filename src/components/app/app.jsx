import React from 'react';
import Main from '../main/main.jsx';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import OfferCardDetail from '../offer-card-details/offer-card-details.jsx';
import PropTypes from 'prop-types';
import {cardPropTypes} from '../../utils/utils';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(newProps) => <Main {...props} {...newProps} />} />
        <Route
          exact
          path="/offer/:id"
          render={(newProps) => <OfferCardDetail cards={props.cards} {...newProps} />}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};
App.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired
};
export default App;
