import React, { Component } from 'react';
import { Form, Label, Button } from 'semantic-ui-react';
import getCookie from 'js-cookie';
import './style.css';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		const csrfCookie = getCookie('csrftoken');
		const loginResponse = await fetch('http://localhost:8000/users/login/', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'X-CSRFToken': csrfCookie,
				'Content-Type': 'application/json'
			}
		});
		const parsedResponse = await loginResponse.json();
		if(parsedResponse.data === 'login successful'){
			console.log('successful login');
			this.props.history.push('/costs');
		}
	}
	render(){
		return (
			<Form onSubmit={this.handleSubmit}>
				<Label>Username</Label>
				<Form.Input type='text' name='username' onChange={this.handleChange} />
				<Label>Password</Label>
				<Form.Input type='password' name='password' onChange={this.handleChange} />
				<Button type='Submit' color='blue'>Login</Button>
			</Form>
		)
	}
}

export default Login;