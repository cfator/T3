const GAME_STATUS = {
	CELL_COUNT_PROMPT: 'How many cells wide do you want to make the game board (from 2 to 16)?',
	CELL_COUNT_ERROR: 'That was not a number in range.',
	GAME_ISA_DRAW: 'Game is a draw.',
	OPPS: 'Well that didn\'t go as planned',
	PLAYER_UP: playerId => `${playerId} make your next move.`,
	PLAYER_WINS: playerId => `${playerId} FOR THE WIN!`,
	START_NEW_GAME: 'Click the "Start New Game" button to play.',
	TITLE: 'Tic-Tac-Toe',
};

export default GAME_STATUS;
