import { connect } from 'react-redux'

import Header from '../components/Header/Header'
import { startNewGame } from '../actions/index'

const mapDispatchToProps = (dispatch, ownProps) => ({
	startNewGame: (cellsWide) => dispatch(startNewGame(cellsWide))
});

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);