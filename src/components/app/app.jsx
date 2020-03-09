import React from 'react';
import Main from '../main/main.jsx';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import OfferCardDetail from '../offer-card-details/offer-card-details.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/offer/:id" component={OfferCardDetail}/>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

