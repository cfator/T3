import {gamePlay, initialState} from './index'
import strings from '../utils/strings';

// @improvement more rigorous testing would have this in a loop and run all for different size game grids

describe('index reducer', () => {
  it('should handle initial state', () => {
		expect(
			gamePlay(undefined, {})
    ).toEqual(initialState)
  });

	// game play
	const endStateNewGame = {
		cells: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
		status: strings.PLAYER_UP('O'),
		moveNumber: 0
	};

	it('should handle START_NEW_GAME', () => {
		expect(
			gamePlay(initialState, {
				type: 'START_NEW_GAME',
				cellsWide: 3
			})
		).toEqual(endStateNewGame);
	});

	it('should handle CELL_CLICK', () => {
		const endStateClick1 = {
			cells: [[1,0,0],[0,0,0],[0,0,0]],
			status: strings.PLAYER_UP('X'),
			moveNumber: 1
		};

		expect(
			gamePlay(endStateNewGame, {
				type: 'CELL_CLICK',
				r: 0,
				c: 0
			})
		).toEqual(endStateClick1);

		const endStateClick2 = {
			cells: [[1,0,0],[-1,0,0],[0,0,0]],
			status: strings.PLAYER_UP('O'),
			moveNumber: 2
		};

		expect(
			gamePlay(endStateClick1, {
				type: 'CELL_CLICK',
				r: 1,
				c: 0
			})
		).toEqual(endStateClick2);

		const endStateClick3 = {
			cells: [[1,1,0],[-1,0,0],[0,0,0]],
			status: strings.PLAYER_UP('X'),
			moveNumber: 3
		};

		expect(
			gamePlay(endStateClick2, {
				type: 'CELL_CLICK',
				r: 0,
				c: 1
			})
		).toEqual(endStateClick3);

		const endStateClick4 = {
			cells: [[1,1,0],[-1,0,0],[0,0,-1]],
			status: strings.PLAYER_UP('O'),
			moveNumber: 4
		};

		expect(
			gamePlay(endStateClick3, {
				type: 'CELL_CLICK',
				r: 2,
				c: 2
			})
		).toEqual(endStateClick4);

		const endStateClick5 = {
			cells: [[1,1,1],[-1,0,0],[0,0,-1]],
			status: strings.PLAYER_WINS('O'),
			moveNumber: -1
		};

		expect(
			gamePlay(endStateClick4, {
				type: 'CELL_CLICK',
				r: 0,
				c: 2
			})
		).toEqual(endStateClick5);
	});
});
