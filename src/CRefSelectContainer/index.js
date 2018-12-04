import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react';
import getCookie from 'js-cookie';

class CRefSelectContainer extends Component {
	constructor(){
		super();
		this.state = {
			allCrefs: []
		}
	}
	getCRefs = async () => {
		const csrfCookie = getCookie('csrftoken');
		const crefs = await fetch('http://localhost:8000/costs/crefs/', {
			credentials: 'include',
			headers: {
				'X-CSRFToken': csrfCookie
			}
		});
		const crefsParsedJSON = await crefs.json();
		return crefsParsedJSON
	}
	render(){
		const crefOptions = this.props.crefs.map(el => ({
			key: el.id,
			value: el.price,
			text: el.name
		}))
		return(
			<Dropdown placeholder='Select Consumer Reference' fluid search selection options={crefOptions} onChange={this.props.updateSelection} />
		)
	}
}

export default CRefSelectContainer