import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react';
import getCookie from 'js-cookie';

class AgSelectContainer extends Component {
	constructor(){
		super();
		this.state = {
			allAgencies: []
		}
	}
	getAgencies = async () => {
		const csrfCookie = getCookie('csfrtoken');
		const agencies = await fetch('http://localhost:8000/costs/agencies/', {
			credentials: 'include',
			headers: {
				'X-CSRFToken': csrfCookie
			}
		});
		const agenciesParsedJSON = await agencies.json();
		console.log(agenciesParsedJSON);
		return agenciesParsedJSON
	}
	componentDidMount(){
		//call route to get all agencies from cost_compare_agency_raw and populate state with them
		this.getAgencies().then((agencies) => {
			this.setState({allAgencies: agencies.data})
			console.log(this.state, 'state');
		}).catch((err) => {
			console.log(err);
		})
	}
	render(){
		const agencyPlaceholder = [
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
		const agencyOptions = this.state.allAgencies.map(el => ({
			key: el.agency_id,
			value: el.name,
			text: el.name
		}))
		return(
			<Dropdown placeholder='Select Agency' fluid search selection options={agencyOptions} />
		)
	}
}

export default AgSelectContainer