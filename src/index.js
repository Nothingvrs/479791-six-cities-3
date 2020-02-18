import React from "react";
import ReactDOM from 'react-dom';
import cards from './mocks/offers';
import App from './components/app/app.jsx';

const onCardHover = () => {};

const data = {
  ADSCOUNT: 312,
  cards,
  onCardHover
};

ReactDOM.render(<App {...data} />, document.querySelector(`#root`));
