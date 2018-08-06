import strings from '../utils/strings';
import winCheck from '../utils/winCheck';

// @improvement would be to extend the cells state such that cells can be highlighted when a win is made
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

/* validate that n is a valid positive int between 2 and 16 */
const validateCellsWideInput = (n) => {
	let inRange = (n >= 2 && n <= 16);
	let validPosInt = 0 === n % (!isNaN(parseFloat(n)) && 0 <= ~~n);
	return inRange && validPosInt;
};

/* return name and state value for user based on passed move number */
const whosMove = (moveNum) => {
	return (moveNum % 2) ? { name: 'X', value: playerMarkValues.X } : { name: 'O', value: playerMarkValues.O };
};

const gamePlay = (state, action) => {
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
				// cell is out of bounds, we have an error state
				return {
					...state,
					status: strings.OPPS
				}
			}

			// apply the move
			let nextCellsState = state.cells.slice();
			nextCellsState[action.r][action.c] = currentMove.value;

			// check for the draw, win or continue
			const gameResult = winCheck(nextCellsState, action.r, action.c, state.moveNumber, currentMove);
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
			} else {
				// move was valid and did not result in a win or draw, continue game
				return {
					moveNumber: nextMoveNum,
					status: strings.PLAYER_UP(whosMoveNext.name),
					cells: nextCellsState
				};
			}
		case 'START_NEW_GAME':
			let cellsWide;
			let prompt = strings.CELL_COUNT_PROMPT;
			let firstPrompt = true;

			// @improvement would be to use component driven modals instead of window.confirm and window.alert

			// if action already has cellsWide then don't prompt the user
			if(typeof(action.cellsWide) === 'number') {
				return {
					cells: setUpGameGrid(action.cellsWide),
					status: strings.PLAYER_UP(whosMove(0).name),
					moveNumber: 0
				};
			}

			// @improvement refactor here to include area below in test coverage, currently is skipped when cellsWide is supplied in action

			// validate and prompt if a game is in progress
			if(state.moveNumber !== -1) {
				if(!window.confirm('A game is currently in progress are you sure you want to reset?')) {
					return state;
				}
			}

			// keep asking until we get a valid number
			while(!validateCellsWideInput(cellsWide)) {
				cellsWide = parseInt(window.prompt(firstPrompt ? prompt : strings.CELL_COUNT_ERROR + prompt), 10);
				firstPrompt = false;
			}

			// all good start a new game
			return {
				cells: setUpGameGrid(cellsWide),
				status: strings.PLAYER_UP(whosMove(0).name),
				moveNumber: 0
			};
		default:
			return initialState;
	}
};

export { gamePlay, initialState, playerMarkValues };
