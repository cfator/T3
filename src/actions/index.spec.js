import * as actions from './index'

describe('todo actions', () => {
  it('cellClick should create CELL_CLICK action', () => {
    expect(actions.cellClick(0, 0)).toEqual({
      type: 'CELL_CLICK',
      r: 0,
			c: 0
    })
  });

  it('startNewGame should create START_NEW_GAME action', () => {
    expect(actions.startNewGame()).toEqual({
      type: 'START_NEW_GAME'
    })
  });
});
