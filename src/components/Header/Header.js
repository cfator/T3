import React from 'react'
import { connect } from 'react-redux'

import strings from '../../strings';

import './Header.css';

const Header = ({ startNewGame }) => {
	return (
		<header className="header">
			<span className="title">
				{strings.TITLE}
			</span>
			<button className="start-button" onClick={startNewGame}>
				Start New Game
			</button>
		</header>
	)
};

export default connect()(Header);
