export const cellClick = (r, c) => ({
  type: 'CELL_CLICK',
  r,
	c
});

export const startNewGame = text => ({
	type: 'START_NEW_GAME',
	text
});
