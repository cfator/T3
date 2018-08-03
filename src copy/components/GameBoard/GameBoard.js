import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

import './GameBoard.css';

let boardSize = 4;

const GameBoard = ({ dispatch }) => {
	let size = this.props.size;
	return (
		<div className="game-board">
			<div class="cell">size</div>
			<div class="cell">B</div>
			<div class="cell">C</div>
			<div class="cell">D</div>
			<div class="cell">E</div>
			<div class="cell">F</div>
			<div class="cell">D</div>
			<div class="cell">E</div>
			<div class="cell">F</div>
		</div>
	)
};

export default connect()(GameBoard);
