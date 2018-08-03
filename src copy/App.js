import React, { Component } from 'react';

import Game from './containers/Game'
import Header from './containers/Header'

import './App.css';

class App extends Component {
	render() {
    return (
			<div className="app">
				<Header />
				<content className="content">
					<Game />
				</content>
			</div>
    );
  }
}

export default App;
