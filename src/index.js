import React from "react";
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const ADSCOUNT = 312;

ReactDOM.render(
    <App adscount={ADSCOUNT}/>,
    document.querySelector(`#root`)
);
