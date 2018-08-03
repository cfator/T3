import React from 'react'
import { connect } from 'react-redux'

import './Header.css';

const Header = ({ startNewGame }) => {
	return (
		<header className="header">
			<span className="title">
				Tic-Tac-Toe React/Redux Example
			</span>
			<button className="start-button" onClick={startNewGame}>
				Start New Game
			</button>
		</header>
	)
};

export default connect()(Header);
