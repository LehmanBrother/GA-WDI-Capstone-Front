import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../App.css';

const HeaderApp = (props) => {
	return (
		<Header className='header'>
			<div className="siteLogo">
				<h1>CostCompare</h1>
			</div>
			<Link to='/costs'>Main Page</Link>
			<Link to='/register'>Register</Link>
			<Link to='/'>Login</Link>
			<Link to='/' onClick={props.logOut}>Logout</Link>
		</Header>
	)
}

export default HeaderApp;