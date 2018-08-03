import React, {PureComponent} from 'react'

import './CellValue.css';

import x from '../../imgs/x.svg';
import o from '../../imgs/o.svg';
import empty from '../../imgs/empty.svg';

class CellValue extends PureComponent {
	render() {
		let img, cls;
		switch(this.props.value) {
			case 0:
				img = empty;
				cls = 'empty';
				break;
			case -1:
				img = x;
				cls = 'x';
				break;
			case 1:
				img = o;
				cls = 'o';
				break;
		}

		return <img className={"cell-value "+cls} src={img} />;
	}
}

export default CellValue;
