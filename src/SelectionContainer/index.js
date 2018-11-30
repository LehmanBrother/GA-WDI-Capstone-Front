import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react';

class SelectionContainer extends Component {
	constructor(){
		super();
		this.state = {

		}
	}
	render(){
		// 4x4 table
			// top row is drop-downs to allow user to select agency, account, or consumer reference
			// second row is text input for user to search within chosen category--results will pop up on left, allowing user to select one
			// third row shows current selection
			// fourth row contains drop-downs to select multiplier
		return(
			<Grid columns={4} divided>
				<Grid.Row>
					<Grid.Column>
						hello
					</Grid.Column>
					<Grid.Column>
						hello
					</Grid.Column>
					<Grid.Column>
						hello
					</Grid.Column>
					<Grid.Column>
						hello
					</Grid.Column>
				</Grid.Row>

			</Grid>
		)
	}
}

export default SelectionContainer