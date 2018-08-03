import { connect } from 'react-redux'

import GameBoard from '../components/GameBoard/GameBoard'
import { cellClick } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
	cellClick: (r, c) => dispatch(cellClick(r, c))
});

const mapStateToProps = state => ({
	cells:  state.cells,
	status: state.status,
	moveNumber: state.moveNumber
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameBoard);