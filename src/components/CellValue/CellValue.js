import React, {PureComponent} from 'react'

import './CellValue.css';

import x from '../../images/x.svg';
import o from '../../images/o.svg';
import empty from '../../images/empty.svg';

class CellValue extends PureComponent {
	render() {
		let img, cls;
		switch(this.props.value) {
			case 0:
			default:
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

		return <img alt={cls} className={"cell-value "+cls} src={img} />;
	}
}

export default CellValue;
