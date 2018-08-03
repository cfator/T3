import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

import './Status.css';

class Status extends PureComponent {
	render() {
		return <div className="status">{this.props.display}</div>;
	}
}

export default connect()(Status);
