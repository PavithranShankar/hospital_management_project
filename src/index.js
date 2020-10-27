import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import "./fonts/AvenirNextLTPro-Regular.woff2";
import "./fonts/AvenirNextLTPro-Regular.woff";
import "./fonts/AvenirNextLTPro-Bold.woff2";
import "./fonts/AvenirNextLTPro-Bold.woff";
import "./fonts/AvenirNextLTPro-It.woff2";
import "./fonts/AvenirNextLTPro-It.woff";



// import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
