	import React from 'react';
import './BusinessList.css';
//The point of the <BusinessList /> component is to simulate what a
//returned list of businesses would look like in Ravenous (after querying the Yelp API,
//for example). To help this simulation, <BusinessList /> will make use of the <Business />
//component repeatedly. To use the <Business /> component, you'll have to import it.

import Business from '../Business/Business';

class BusinessList extends React.Component {
	render () {

		//When the mybusinesses prop is set in the BusinessList
		//component, there should be some functionality behind it. Specifically,
			//it should iterate through the businesses array.
			//access the businesses prop and call the .map() method on it.
			//Inside of the map() method, pass a callback function with one parameter called business.
			//The callback function should return a <Business /> component.
			//The returned <Business /> should have a property called business.
			//Set the property equal to the parameter of the callback function.

			// {this.props.myBusinesses.map(business => {
			// 		<Business business={this.props.business} /> // built functionality for BusinessList component to iterate through the array and return Business components
			// })};
		return (
			<div className="BusinessList">
				{this.props.myBusinesses.map(function(business) {  //gets list of businesses from app.js
			 			return <Business business={business} /> //instantiating my cookie cutter from business.js
						// built functionality for BusinessList component to iterate through the array and return Business components
		 		})};

			</div>
		)
	}

}

export default BusinessList;
