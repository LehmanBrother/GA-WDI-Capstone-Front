import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react';
import getCookie from 'js-cookie';
import apiUrl from '../apiUrl';

class AccSelectContainer extends Component {
	constructor(){
		super();
		this.state = {
			allAccounts: []
		}
	}
	getAccounts = async () => {
		const csrfCookie = getCookie('csrftoken');
		const accounts = await fetch(apiUrl + 'costs/accounts/', {
			credentials: 'include',
			headers: {
				'X-CSRFToken': csrfCookie
			}
		});
		const accountsParsedJSON = await accounts.json();
		return accountsParsedJSON
	}
	componentDidMount(){
		//call route to get all accounts from cost_compare_federal_account_raw and populate state with them
		this.getAccounts().then((accounts) => {
			this.setState({allAccounts: accounts.data})
			console.log(this.state, 'acc state');
		}).catch((err) => {
			console.log(err);
		})
	}
	render(){
		const accountOptions = this.state.allAccounts.map(el => ({
			key: el.account_id,
			value: el.amount,
			text: el.name
		}))
		return(
			// potentially change this one to plain search to reduce lag
			<Dropdown placeholder='Select Account' fluid search selection options={accountOptions} onChange={this.props.updateSelection} />
		)
	}
}

export default AccSelectContainer