import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term:'',
      location:'',
      sortBy:'best_match'};
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch =  this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {  // check if this.state.sortBy is the right way to call the value
      return 'active';
    } else {
      return '';
    };
    }

  handleSortByChange(sortByOption){
    this.setState({sortBy:sortByOption }); // how does program know that i refer to state mentioned above
  }

  handleTermChange(event){
    this.setState({term: event.target.value});
  }


  handleLocationChange(event){
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption] //Add a className attribute to the <li> element.
        //Set it equal to
        //the return value of the getSortByClass() method. Pass in sortByOptionValue
        //as the argument.This will conditionally style each sort by option,
        //displaying to the user which sorting option is currently selected.
      return <li className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} key={sortByOptionValue}> {sortByOption} </li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
             {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange}  placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
        <a onClick={this.handleSearch}>Lets Go</a>
          </div>
        </div>
    )
  }
}

export default SearchBar;
