import React, { Component } from 'react';
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
	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Login}/>
					<Route exact path='/register' component={Registration}/>
					<Route exact path='/costs' component={App}/>
					<Route component={My404}/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Modal;