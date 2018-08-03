import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import registerServiceWorker from './utils/registerServiceWorker';
import {gamePlay, initialState} from './reducers'

// @improvement would be to introduce sass
import './index.css';

const store = createStore(gamePlay, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
