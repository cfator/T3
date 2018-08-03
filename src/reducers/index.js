import strings from '../strings';
import winCheck from '../winCheck';

const initialState = {
	cells:  [],
	status: strings.START_NEW_GAME,
	moveNumber: -1
};

const playerMarkValues = {
	X: -1,
	O: 1,
	blank: 0
};

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

/* return name and state value for user based on passed move number */
const whosMove = (moveNum) => {
	return (moveNum % 2) ? { name: 'X', value: playerMarkValues.X } : { name: 'O', value: playerMarkValues.O };
};

const gamePlay = (state = [], action) => {
	switch (action.type) {
		case 'CELL_CLICK':
			const currentMove = whosMove(state.moveNumber);
			const nextMoveNum = state.moveNumber+1;
			const whosMoveNext = whosMove(nextMoveNum);

			// some validation
			const target = state.cells[action.r][action.c];
			if(target !== 0 || state.moveNumber === -1) {
				// cell has already been marked by a prior move or game was won, do nothing
				return state;
			} else if(target === undefined) {
				// cell is out of bounds
				return {
					...state,
					status: strings.OPPS
				}
			}

			// apply the move
			let nextCellsState = state.cells.slice();
			nextCellsState[action.r][action.c] = currentMove.value;

			// check for the win
			const gameResult = winCheck(nextCellsState, action.r, action.c, state.moveNumber, currentMove);
debugger
			if(gameResult === undefined) {
				// we have a draw
				return {
					moveNumber: -1,  // signify the game is over
					status: strings.GAME_ISA_DRAW,
					cells: nextCellsState
				}
			} else if(gameResult) {
				// we have a win
				return {
					moveNumber: -1,  // signify the game is over
					status: strings.PLAYER_WINS(currentMove.name),
					cells: nextCellsState
				}
			}

			// move was valid and did not result in a win
			return {
				moveNumber: nextMoveNum,
				status: (nextMoveNum % 2) ? strings.PLAYER_UP(whosMoveNext.name) : strings.PLAYER_UP(whosMoveNext.name),
				cells: nextCellsState
			};
			break;
		case 'START_NEW_GAME':
			let cellsWide;
			let prompt = strings.CELL_COUNT_PROMPT;
			let firstPrompt = true;

			// validate and prompt if a game is in progress
			if(state.moveNumber !== -1) {
				if(!window.confirm('A game is currently in progress are you sure you want to reset?')) {
					return state;
				}
			}

			// keep asking until we get a valid number
			while(!validateCellsWideInput(cellsWide)) {
				cellsWide = parseInt(window.prompt(firstPrompt ? prompt : strings.CELL_COUNT_ERROR + prompt));
				firstPrompt = false;
			}

			return {
				cells: setUpGameGrid(cellsWide),
				status: strings.PLAYER_UP(whosMove(0).name),
				moveNumber: 0
			};
			break;
		default:
			return state;
			break;
	}
};

export {gamePlay, initialState, playerMarkValues};
