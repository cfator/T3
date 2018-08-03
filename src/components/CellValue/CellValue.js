import React, {PureComponent} from 'react'

import { playerMarkValues } from '../../reducers'

import './CellValue.css';

import x from '../../images/x.svg';
import o from '../../images/o.svg';
import blank from '../../images/blank.svg';

class CellValue extends PureComponent {
	render() {
		let img, cls;
		switch(this.props.value) {
			case playerMarkValues.X:
				img = x;
				cls = 'x';
				break;
			case playerMarkValues.O:
				img = o;
				cls = 'o';
				break;
			case playerMarkValues.blank:
			default:
				img = blank;
				cls = 'blank';
				break;
		}

		return <img alt={cls} className={"cell-value "+cls} src={img} />;
	}
}

export default CellValue;
