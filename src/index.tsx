import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducer/reducer";
import {Provider} from 'react-redux';
import {createApi} from './api';
import thunk from "redux-thunk";
import {UserOperation} from "./reducer/user/user-reducer";
import {ActionCreator} from "./reducer/data/data-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createApi();


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(ActionCreator.getOffersFromApi());
store.dispatch(UserOperation.authUser());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector(`#root`));
