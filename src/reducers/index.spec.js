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
	it('should handle START_NEW_GAME', () => {
		expect(
			gamePlay(initialState, {
				type: 'START_NEW_GAME',
				cellsWide: 3
			})
		).toEqual({
			cells: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
			status: strings.PLAYER_UP('O'),
			moveNumber: 0
		});
	});

	it('should handle CELL_CLICK', () => {
		expect(
			gamePlay({
				cells: [[0,0,0],[0,0,0],[0,0,0]],
				status: strings.PLAYER_UP('O'),
				moveNumber: 0
			}, {
				type: 'CELL_CLICK',
				r: 0,
				c: 0
			})
		).toEqual({
			cells: [[1,0,0],[0,0,0],[0,0,0]],
			status: strings.PLAYER_UP('X'),
			moveNumber: 1
		});

		expect(
			gamePlay({
				cells: [[1,0,0],[0,0,0],[0,0,0]],
				status: strings.PLAYER_UP('X'),
				moveNumber: 1
			}, {
				type: 'CELL_CLICK',
				r: 1,
				c: 0
			})
		).toEqual({
			cells: [[1,0,0],[-1,0,0],[0,0,0]],
			status: strings.PLAYER_UP('O'),
			moveNumber: 2
		});

		expect(
			gamePlay({
				cells: [[1,0,0],[-1,0,0],[0,0,0]],
				status: strings.PLAYER_UP('O'),
				moveNumber: 2
			}, {
				type: 'CELL_CLICK',
				r: 0,
				c: 1
			})
		).toEqual({
			cells: [[1,1,0],[-1,0,0],[0,0,0]],
			status: strings.PLAYER_UP('X'),
			moveNumber: 3
		});

		expect(
			gamePlay({
				cells: [[1,1,0],[-1,0,0],[0,0,0]],
				status: strings.PLAYER_UP('X'),
				moveNumber: 3
			}, {
				type: 'CELL_CLICK',
				r: 2,
				c: 2
			})
		).toEqual({
			cells: [[1,1,0],[-1,0,0],[0,0,-1]],
			status: strings.PLAYER_UP('O'),
			moveNumber: 4
		});

		expect(
			gamePlay({
				cells: [[1,1,0],[-1,0,0],[0,0,-1]],
				status: strings.PLAYER_UP('O'),
				moveNumber: 4
			}, {
				type: 'CELL_CLICK',
				r: 0,
				c: 2
			})
		).toEqual({
			cells: [[1,1,1],[-1,0,0],[0,0,-1]],
			status: strings.PLAYER_WINS('O'),
			moveNumber: -1
		});
	});
});
