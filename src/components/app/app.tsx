import * as React from 'react';
import Main from '../main/main';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import OfferCardDetail from '../offer-card-details/offer-card-details';
import SignIn from "../sign-in/sign-in";
import withForm from "../../hocs/withForm";
import OffersFavorites from "../offer-favorites/offer-favorites";
import PrivateRoute from "../private-route/private-route";

const SignInWithForm = withForm(SignIn);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/offer/:id" component={OfferCardDetail}/>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={SignInWithForm}/>
        <PrivateRoute exact path="/favorite" render={() => <OffersFavorites/>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
