import React, { Component } from 'react';
import Header from './Header';
import App from './App';
import Login from './Login';
import Registration from './Registration';
import getCookie from 'js-cookie';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const My404 = () => {
  return (
      <div>
        what did you do
      </div>
    )
}

class Modal extends Component {
	constructor(){
		super();
		this.state = {

		}
	}
	getToken = async () => {
		const token = await fetch('http://localhost:8000/users/getToken/', {
			method: 'get',
			credentials: 'include',
			headers: {
        		'Content-Type': 'application/json'
			}
		});
		const tokenResponse = token.json();
		return tokenResponse;
	}
	logOut = async (e) => {
		console.log("LOG OUT IS RUNNING");
		e.preventDefault();
		const csrfCookie = getCookie('csrftoken');
		const loginResponse = await fetch('http://localhost:8000/users/logout/', {
			method: 'get',
			credentials: 'include',
			headers: {
				'X-CSRFToken': csrfCookie,
				'Content-Type': 'application/json'
			}
		});
		const parsedResponse = await loginResponse.json();
		console.log(parsedResponse, " what server said when we tried to log out");
		if(parsedResponse.data === 'logout successful'){
			console.log('successful logout');
			// console.log(this.props.history.push('/'), 'props');
		} else {
			console.log(parsedResponse.error);
		}
	}
	componentDidMount(){
		this.getToken();
	}
	render(){
		return (
			<BrowserRouter>
				<div>
					<Header logOut={this.logOut} />
					<Switch>
						<Route exact path='/' component={Login}/>
						<Route exact path='/register' component={Registration}/>
						<Route exact path='/costs' component={App}/>
						<Route component={My404}/>
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default Modal;