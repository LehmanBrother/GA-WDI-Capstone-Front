import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react';
import getCookie from 'js-cookie';
import apiUrl from '../apiUrl';

class AgSelectContainer extends Component {
	constructor(){
		super();
		this.state = {
			allAgencies: []
		}
	}
	getAgencies = async () => {
		const csrfCookie = getCookie('csfrtoken');
		const agencies = await fetch(apiUrl + 'costs/agencies/', {
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
			console.log(this.state, 'ag state');
		}).catch((err) => {
			console.log(err);
		})
	}
	render(){
		const agencyOptions = this.state.allAgencies.map(el => ({
			key: el.agency_id,
			value: el.amount,
			text: el.name
		}))
		return(
			<Dropdown placeholder='Select Agency' fluid search selection options={agencyOptions} onChange={this.props.updateSelection}/>
		)
	}
}

export default AgSelectContainer