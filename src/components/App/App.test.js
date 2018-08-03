import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {gamePlay, initialState} from '../../reducers'

const store = createStore(gamePlay, initialState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		div
	);
});

