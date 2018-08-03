import React from 'react'
import { connect } from 'react-redux'

import './Header.css';

const Header = ({ onClick }) => {
	return (
		<header className="header">
			<span className="title">
				Tic-Tac-Toe React/Redux Example
			</span>
			<button className="start-button" onClick={onClick}>
				Start Game
			</button>
		</header>
	)
};

export default connect()(Header);
