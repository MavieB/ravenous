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



		/*
		Here's what myBusinesses looks like:

		[
			{
			   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
			   name: 'MarginOtto Pizzeria',
			   address: '1010 Paddington Way',
			   city: 'Flavortown',
			   state: 'NY',
			   zipCode: '10101',
			   category: 'Italian',
			   rating: 4.5,
			   reviewCount: 90
			},
			{
			   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
			   name: 'Balthazar Steakhouse',
			   address: '21 Spring St',
			   city: 'Soho',
			   state: 'NY',
			   zipCode: '10001',
			   category: 'Delicious',
			   rating: 10,
			   reviewCount: 10000
			},
		]
		*/
		console.log(this.props.myBusinesses)
		return (
			<div className="BusinessList">
				{this.props.myBusinesses.map(function(businessObject) {  //businessObject is ONE object. gets list of businesses from app.js
			 			return <Business key={businessObject.id} business={businessObject} /> //instantiating my cookie cutter from business.js
						// feeding it to a new prop called business
						// built functionality for BusinessList component to iterate through the array and return Business components
		 		})};

			</div>
		)
	}

}

export default BusinessList;
