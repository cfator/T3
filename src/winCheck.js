/**
 * Returns true in a win condition, returns false in a win condition, returns undefined in a draw condition.
 * Based on the approach from https://stackoverflow.com/questions/1056316/algorithm-for-determining-tic-tac-toe-game-over
 *
 * @param {Array<Array>} cells - 2D cell grid for the tic-tac-tow game.
 * @param {number} moveRowI - Row index of the most recent move.
 * @param {number} moveColI - Column index of the most recent move.
 * @param {number} moveNum - Number of moves in the game so far, used to evaluate a draw condition.
 *
 * @returns {boolean || undefined}
 *
 */
const winCheck = (cells, moveRowI, moveColI, moveNum) => {
	// the value of the cell that was changed is the play we're win check'n for
	const playerMoveValue = cells[moveRowI][moveColI];
	const cellsWide = cells.length;

	// col check
	for(let i = 0; i < cellsWide; i++) {
		if(cells[moveRowI][i] != playerMoveValue) {
			break;
		} else if(i == cellsWide - 1) {
			return true;
		}
	}

	// row check
	for(let i = 0; i < cellsWide; i++) {
		if(cells[i][moveColI] !== playerMoveValue)
			break;
		if(i == cellsWide-1) {
			return true;
		}
	}

	// diagonal check
	if(moveRowI === moveColI) {
		for(let i = 0; i < cellsWide; i++) {
			if(cells[i][i] != playerMoveValue) {
				break;
			} else if(i === cellsWide - 1) {
				return true;
			}
		}
	}

	// anti diagonal
	if(moveRowI + moveColI === cellsWide - 1) {
		for(let i = 0; i < cellsWide; i++) {
			if(cells[i][(cellsWide-1)-i] !== playerMoveValue) {
				break;
			} else if(i === cellsWide-1) {
				return true;
			}
		}
	}

	// draw check
	if(moveNum === (Math.pow(cellsWide, 2) - 1)) {
		return undefined;
	} else {
		return false;
	}
};

export default winCheck;
