import strings from '../strings';

/* return an array of arrays representing the game board cells */
const setUpGameGrid = (cellsWide) => {
	let grid = [];
	for(let r = 0; r < cellsWide; r++) {
		grid.push(new Array(cellsWide).fill(0));
	}

	return grid;
};

/* validate that n is a valid positive int between 2 and 42 */
const validateCellsWideInput = (n) => {
	let inRange = (n >= 2 && n <= 16);
	let validPosInt = 0 === n % (!isNaN(parseFloat(n)) && 0 <= ~~n);
	return inRange && validPosInt;
};

const gamePlay = (state = [], action) => {
	switch (action.type) {
		case 'CELL_CLICK':
			let nextMoveNum = state.moveNumber+1;

			// mutate cell

			// check for the win

			return {
				moveNumber: nextMoveNum,
				status: (nextMoveNum % 2) ? strings.PLAYER_UP('X') : strings.PLAYER_UP('O'),
				cells: state.cells
			};
			break;
		case 'START_NEW_GAME':
			let cellsWide;
			let prompt = strings.CELL_COUNT_PROMPT;
			let firstPrompt = true;
			let result;

			while(!validateCellsWideInput(cellsWide)) {
				result = window.prompt(firstPrompt ? prompt : strings.CELL_COUNT_ERROR + prompt);
				cellsWide = parseInt(result);
				firstPrompt = false;
			}

			return {
				cells: setUpGameGrid(cellsWide),
				status: strings.PLAYER_UP(state.moveNumber),
				moveNumber: 0
			};
			break;
		default:
			return state;
			break;
	}
};

export default gamePlay;
