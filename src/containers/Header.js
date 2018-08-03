import { connect } from 'react-redux'

import Header from '../components/Header/Header'
import { startNewGame } from '../actions/index'

const mapDispatchToProps = (dispatch, ownProps) => ({
	startNewGame: () => dispatch(startNewGame())
});

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);