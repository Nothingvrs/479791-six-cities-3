import React from 'react';
import Main from '../main/main.jsx';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import OfferCardDetail from '../offer-card-details/offer-card-details.jsx';
import SignIn from "../sign-in/sign-in.jsx";
import withForm from "../../hocs/withForm";
import OffersFavorites from "../offer-favorites/offer-favorites.jsx";

const SignInWithForm = withForm(SignIn);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/offer/:id" component={OfferCardDetail}/>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={SignInWithForm}/>
        <Route exact path="/favorite" component={OffersFavorites}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
