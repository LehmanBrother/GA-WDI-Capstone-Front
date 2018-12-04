import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { VictorySharedEvents, VictoryBar, VictoryPie, VictoryLabel } from 'victory';

class GraphContainer extends Component {
	constructor(){
		super();
		this.state = {
			column1Total: 0,
			column2Total: 0,
			column3Total: 0,
			testData: [
				{quarter: 1, earnings: 13000},
				{quarter: 2, earnings: 16500},
				{quarter: 3, earnings: 14250},
				{quarter: 4, earnings: 19000}
			]
		}
	}
	render(){
		console.log(this.props.selection1, 'gc selection1');
		console.log(this.props.selection2, 'gc selection2');
		console.log(this.props.selection3, 'gc selection3');
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
									{x: "a", y: Math.round(this.props.selection1.amount)},
									{x: "b", y: Math.round(this.props.selection2.amount)},
									{x: "c", y: Math.round(this.props.selection3.amount)}
								]}
								labels={["a","b","c"]}
								labelComponent={<VictoryLabel y={280}/>}
							/>
						</g>
						<g transform={"translate(0, -75)"}>
							<VictoryPie name="pie"
								width={250}
								standalone={false}
								style={{labels: {fontSize: 12, padding: 10}}}
								data={[
									{x: "a", y: Math.round(this.props.selection1.amount)},
									{x: "b", y: Math.round(this.props.selection2.amount)},
									{x: "c", y: Math.round(this.props.selection3.amount)}
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