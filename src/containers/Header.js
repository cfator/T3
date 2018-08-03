import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header/Header'
import { startGame } from '../actions/StartGame'

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(startGame())
});

export default connect(mapDispatchToProps)(Header);