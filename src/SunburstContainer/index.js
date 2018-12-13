import React, {Component} from 'react';

class SunburstContainer extends Component {
	constructor(){
		super();
		this.state = {

		}
	}
	render(){
		return(
			<div>
				<h3>What is <span className='title'>CostCompare</span>?</h3>
              	<p><span className='title'>CostCompare</span> is a platform designed to allow users to better understand the size of various spending programs of the US federal government by representing them graphically and numerically alongside familiar consumer reference points.</p>
              	<p>Use the drop-downs on the right to select a cost type*, and then select an assortment of items to populate graphs that will appear below. You can also enter numbers in the "Multiplier" inputs to see how many of one item it would take to equal the cost of another.</p>
              	<p>You can also register an account in order to be able to add your own consumer references using the form in the middle of the page.</p>
              	<p>* Cost types are defined as follows:</p>
              	<ul>
              		<li>Agency: Departments, commissions, and other top-level government entities. Example: US Department of Health and Human Services</li><br/>
              		<li>Federal Account: US Treasury budgetary accounts associated with specific purposes. Example: Bureau of Engraving and Printing Fund (Treasury)</li><br/>
              		<li>Consumer Reference: Any consumer good or service; added by the user</li>
              	</ul>
              	<p>US Spending data source: <a href='https://api.usaspending.gov/' target='_blank' rel='noopener noreferrer'>https://api.usaspending.gov/</a></p>
              	<a href='https://usaspending.gov' target='_blank' rel='noopener noreferrer'>More Information</a>
			</div>
		)
	}
}

export default SunburstContainer