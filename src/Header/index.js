import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HeaderApp = () => {
	return (
		<Header>
			<ul>
				<li>
					<Link to='/'>Login</Link>
				</li>
				<li>
					<Link to='/costs'>CostCompare</Link>
				</li>
			</ul>
		</Header>
	)
}

export default HeaderApp;