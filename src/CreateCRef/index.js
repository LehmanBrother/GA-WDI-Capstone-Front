import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateCRef extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			price: 0
		}
	}
	updateCRef = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	render(){
		return (
			<Segment>
				<h4>Add Consumer Reference</h4>
				<Form onSubmit={this.props.addCRef.bind(null, this.state)}>
					<Label>Name:</Label>
					<Form.Input type='text' name='name' value={this.state.name} onChange={this.updateCRef}/>
					<Label>Price:</Label>
					<Form.Input type='number' name='price' value={this.state.price} onChange={this.updateCRef}/>
					<Button color='blue' type='Submit'>Submit</Button>
				</Form>
			</Segment>
		)
	}
}

export default CreateCRef