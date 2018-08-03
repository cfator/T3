import React from 'react'
import { connect } from 'react-redux'

// @improvement would be to create aliases for top level folders via webpack config
import CellValue from '../CellValue/CellValue'
import Status from '../Status/Status'

import './GameBoard.css';

const GameBoard = ({ cells, status, cellClick }) => {
	var dim = 100/cells.length;

	return (
		<div className="game-board">
			<Status display={status}/>
			{cells.map((row, r) =>
				<div key={r} className='row'>
					{row.map((cellValue, c) =>
						<div key={c} style={{width: dim+'%'}} className="cell" onClick={() => cellClick(r,c)}>
							<CellValue value={cellValue} />
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default connect()(GameBoard);
