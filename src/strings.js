const GAME_STATUS = {
	CELL_COUNT_PROMPT: 'How many cells wide do you want to make the game board (from 2 to 16)?',
	CELL_COUNT_ERROR: 'That was not a number in range.',
	START_NEW_GAME: 'Click the "Start New Game" button to play.',
	PLAYER_UP: playerId => `${playerId} make your next move.`,
	PLAYER_WINS: playerId => `${playerId} WINS!.`
}

export default GAME_STATUS;
