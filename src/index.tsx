import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './firebase';

const history = createBrowserHistory();

// 1. Set up the browser history with the updated location
// (minus the # sign)
const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];

if (path) {
	history.replace(path);
}

// 2. Render our app
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