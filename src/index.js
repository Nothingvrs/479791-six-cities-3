import React from "react";
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const headerClickHandler = () => {};

const data = {
  ADSCOUNT: 312,
  PLACES: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`],
  onHeaderCkick: headerClickHandler,
};

ReactDOM.render(
    <App {...data}/>,
    document.querySelector(`#root`)
);
