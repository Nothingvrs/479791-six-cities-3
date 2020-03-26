import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducer/reducer.jsx";
import {Provider} from 'react-redux';
import {createApi} from './api';
import thunk from "redux-thunk";
import {UserOperation} from "./reducer/user/user-reducer";
import {ActionCreator} from "./reducer/data/data-reducer";

const api = createApi();

const store = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument(api)), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f));

store.dispatch(ActionCreator.getOffersFromApi());
store.dispatch(UserOperation.authUser());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector(`#root`));


