import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import { VictorySharedEvents, VictoryBar, VictoryPie, VictoryLabel } from 'victory';

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
		console.log(this.props.selection1, 'gc selection1');
		console.log(this.props.selection2, 'gc selection2');
		console.log(this.props.selection3, 'gc selection3');
		let mult1 = parseInt(this.props.mult1);
		let mult2 = parseInt(this.props.mult2);
		let mult3 = parseInt(this.props.mult3);
		//may eventually need to change column totals to come from this.props
		return(
			<div>
				<svg viewBox="0 0 450 350">
					<VictorySharedEvents
						events={[{
							childName: ["pie", "bar"],
							target: "data",
							eventHandlers: {
								onMouseOver: () => {
									return [{
										childName: ["pie","bar"],
										mutation: (props) => {
											return {
												style: Object.assign({}, props.style, {fill: "tomato"})
											};
										}
									}];
								},
								onMouseOut: () => {
									return [{
										childName: ["pie","bar"],
										mutation: () => {
											return null;
										}
									}];
								}
							}
						}]}
					>
						<g transform={"translate(150,50)"}>
							<VictoryBar name="bar"
								width={300}
								standalone={false}
								style={{
									data: {width: 20},
									labels: {fontSize: 12}
								}}
								data={[
									{x: "a", y: Math.round(this.props.selection1.amount*mult1)},
									{x: "b", y: Math.round(this.props.selection2.amount*mult2)},
									{x: "c", y: Math.round(this.props.selection3.amount*mult3)}
								]}
								labels={(d) => '$' + d.y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
								labelComponent={<VictoryLabel y={280}/>}
							/>
						</g>
						<g transform={"translate(0, -75)"}>
							<VictoryPie name="pie"
								width={250}
								standalone={false}
								style={{labels: {fontSize: 12, padding: 10}}}
								data={[
									{x: "a", y: Math.round(this.props.selection1.amount*mult1)},
									{x: "b", y: Math.round(this.props.selection2.amount*mult2)},
									{x: "c", y: Math.round(this.props.selection3.amount*mult3)}
								]}
							/>
						</g>
					</VictorySharedEvents>
				</svg>
			</div>
		)
	}
}

export default GraphContainer