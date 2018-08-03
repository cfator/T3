export const cellClick = (r, c) => ({
  type: 'CELL_CLICK',
  r,
	c
});

export const startNewGame = (cellsWide) => ({
	type: 'START_NEW_GAME',
	cellsWide: cellsWide
});
