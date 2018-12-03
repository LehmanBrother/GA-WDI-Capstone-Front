import React, {Component} from 'react';
import { Dropdown, Grid, Input } from 'semantic-ui-react';
import AccSelectContainer from '../AccSelectContainer';
import AgSelectContainer from '../AgSelectContainer';
import CRefSelectContainer from '../CRefSelectContainer';

class SelectionContainer extends Component {
	constructor(){
		super();
		this.state = {
			typeSelector1: 'Account',
			typeSelector2: 'Agency',
			typeSelector3: 'Consumer Reference',
			selection1: {},
			selection2: {},
			selection3: {}
		}
	}
	updateTypeSelector = (e, e2) => {
		this.setState({
			[e2.name]: e2.value
		});
	}
	updateSelection = (e, e2, e3) => {
		let amount = e3.value;
		let name = e3.options.filter(el => el.value === e3.value)[0].text;
		this.setState({
			[e]: {
				name: name,
				amount: amount
			}
		})
	}
	render(){
		console.log(this.state);
		const costTypes = [
			{
				text: 'Account',
				value: 'Account'
			},
			{
				text: 'Agency',
				value: 'Agency'
			},
			{
				text: 'Consumer Reference',
				value: 'Consumer Reference'
			}
		]
		let typeSelectorModal1;
		if(this.state.typeSelector1 === 'Account'){
			typeSelectorModal1 = <AccSelectContainer updateSelection={this.updateSelection.bind(null, "selection1")} />
		} else if(this.state.typeSelector1 === 'Agency'){
			typeSelectorModal1 = <AgSelectContainer updateSelection={this.updateSelection.bind(null, "selection1")} />
		} else if(this.state.typeSelector1 === 'Consumer Reference'){
			typeSelectorModal1 = <CRefSelectContainer />
		}
		let typeSelectorModal2;
		if(this.state.typeSelector2 === 'Account'){
			typeSelectorModal2 = <AccSelectContainer updateSelection={this.updateSelection.bind(null, "selection2")} />
		} else if(this.state.typeSelector2 === 'Agency'){
			typeSelectorModal2 = <AgSelectContainer updateSelection={this.updateSelection.bind(null, "selection2")} />
		} else if(this.state.typeSelector2 === 'Consumer Reference'){
			typeSelectorModal2 = <CRefSelectContainer />
		}
		let typeSelectorModal3;
		if(this.state.typeSelector3 === 'Account'){
			typeSelectorModal3 = <AccSelectContainer updateSelection={this.updateSelection.bind(null, "selection3")} />
		} else if(this.state.typeSelector3 === 'Agency'){
			typeSelectorModal3 = <AgSelectContainer updateSelection={this.updateSelection.bind(null, "selection3")} />
		} else if(this.state.typeSelector3 === 'Consumer Reference'){
			typeSelectorModal3 = <CRefSelectContainer />
		}
		return(
			<Grid columns={4} divided>
				<Grid.Row>
					<Grid.Column>
						Cost Type
					</Grid.Column>
					<Grid.Column>
						<Dropdown name='typeSelector1' placeholder='Select Cost Type' fluid selection options={costTypes} onChange={this.updateTypeSelector}/>
					</Grid.Column>
					<Grid.Column>
						<Dropdown name='typeSelector2' placeholder='Select Cost Type' fluid selection options={costTypes} onChange={this.updateTypeSelector}/>
					</Grid.Column>
					<Grid.Column>
						<Dropdown name='typeSelector3' placeholder='Select Cost Type' fluid selection options={costTypes} onChange={this.updateTypeSelector}/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						Current Selection
					</Grid.Column>
					<Grid.Column>
						{typeSelectorModal1}
					</Grid.Column>
					<Grid.Column>
						{typeSelectorModal2}
					</Grid.Column>
					<Grid.Column>
						{typeSelectorModal3}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						Multiplier
					</Grid.Column>
					<Grid.Column>
						<Input type='number' />
					</Grid.Column>
					<Grid.Column>
						<Input type='number' />
					</Grid.Column>
					<Grid.Column>
						<Input type='number' />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

export default SelectionContainer