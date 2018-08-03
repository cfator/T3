import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers'
import strings from './strings';

import './index.css';

const store = createStore(
	rootReducer,
	// default state
	{
		cells:  [],
		status: strings.START_NEW_GAME,
		moveNumber: 0
	}
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
