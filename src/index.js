import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware, compose} from "redux";
import {reducer} from "./reducer/reducer.jsx";
import {Provider} from 'react-redux';
import {createApi} from './api';
import thunk from "redux-thunk";
import {ActionCreator} from "./reducer/reducer.jsx";

const api = createApi();


const store = createStore(reducer, compose(applyMiddleware(thunk.withExtraArgument(api)), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f));

store.dispatch(ActionCreator.getOffersFromApi());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector(`#root`));


