
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/yelp.js';

// REMOVE HARD-CODED Businesses INFO:
// let business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }
//
// const businesses = [
//   business, business, business, business, business, business
// ];


class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       businesses: []
     };
     this.searchYelp = this.searchYelp.bind(this);
}


 searchYelp(term, location, sortBy) {
   Yelp.search(term, location, sortBy).then(businessPromise => {
     this.setState({businesses: businessPromise});  // check why I need this.state
   });
 }

  render()
  { //Add a searchYelp property to the SearchBar component
    return (
      <div className="App">
          <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList myBusinesses={this.state.businesses} />  // check why i need this.state.business
      </div>
    );
  }
}

export default App;
