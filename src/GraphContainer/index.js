import React, {Component} from 'react';

class GraphContainer extends Component {
	constructor(){
		super();
		this.state = {
			column1Total: 0,
			column2Total: 0,
			column3Total: 0
		}
	}
	render(){
		//may eventually need to change column totals to come from this.props
		return(
			<div>
				<h3>Graph will go here</h3>
				<p>{this.state.column1Total}</p>
				<p>{this.state.column2Total}</p>
				<p>{this.state.column3Total}</p>
			</div>
		)
	}
}

export default GraphContainer