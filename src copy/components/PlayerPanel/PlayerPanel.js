import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

import './PlayerPanel.css';

let yourTurn = true;
const PlayerPanel = ({ dispatch }) => {
	return (
		<div className="player-panel">
		</div>
	)
};

export default connect()(PlayerPanel);
