import React from 'react';
import Main from '../main/main.jsx';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import OfferCardDetail from '../offer-card-details/offer-card-details.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/offer/:id" component={OfferCardDetail}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
