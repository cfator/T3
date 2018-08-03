import React from 'react'
import { connect } from 'react-redux'

import CellValue from '../CellValue/CellValue'
import Status from '../Status/Status'

import './GameBoard.css';

const GameBoard = ({ dispatch }) => {
	var cells = [[1,0,0,0],[0,1,0,-1],[0,-1,1,0],[-1,0,0,0]];
	var len = 4;
	var dim = 100/len;
	var status = 'X make your next move.';

	return (
		<div className="game-board">
			<Status display={status}/>
			{cells.map((row, r) =>
				<div key={r} className='row'>
					{row.map((cellValue, c) =>
						<div key={c} style={{width: dim+'%'}} className="cell">
							<CellValue value={cellValue} />
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default connect()(GameBoard);
