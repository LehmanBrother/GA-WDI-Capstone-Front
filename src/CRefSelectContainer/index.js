import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react';

class CRefSelectContainer extends Component {
	constructor(){
		super();
		this.state = {

		}
	}
	render(){
		const crefOptions = [
			{
				key: 'ph1',
				value: 'ph1',
				text: 'Placeholder 1'
			},
			{
				key: 'ph2',
				value: 'ph2',
				text: 'Placeholder 2'
			},
			{
				key: 'ph3',
				value: 'ph3',
				text: 'Placeholder 3'
			}
		]
		return(
			<Dropdown placeholder='Select Consumer Reference' fluid search selection options={crefOptions} />
		)
	}
}

export default CRefSelectContainer