import React, { Component } from 'react';

import CountryList from '../components/CountryList';
import SearchBar from '../components/SearchBar';
import SearchBox from '../components/SearchBox';
import RegionFilter from '../components/RegionFilter';
import CountrySort from '../components/CountrySort';

import './App.css';

class App extends Component {

   constructor() {
    super();
    this.state = {
      countries: [],
      searchField: '',
      regionField: '',
      sortField: 'name'
    }
   }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(countries => this.setState({countries: countries})
    );
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  onRegionChange = (event) => {
    this.setState({regionField: event.target.value});
  }

  onSortChange = (event) => {
    this.setState({sortField: event.target.value});
  }

  render() {
    const {countries, searchField, regionField, sortField} = this.state;
    const filteredCountries = this.state.countries
      .filter(country => {
        if ( regionField !== '') {
          return country.name.toLowerCase().includes(searchField.toLowerCase()) && country.region === regionField  
        } else {
          return country.name.toLowerCase().includes(searchField.toLowerCase())
        }      
      }).sort((a, b) => {
        switch (sortField) {
          case 'area':
            return a.area < b.area;
          case 'population':
            return a.population < b.population;
          case 'name':
            return a.name > b.name;
          default:
            return 0;
        }      
     }
    );

    return !countries.length ?
    
    <h1>Loading...</h1> :
    (<div >
        <SearchBar>
          <SearchBox searchChange={ this.onSearchChange }/>
          <RegionFilter regionChange={ this.onRegionChange }/>
          <CountrySort sortChange={ this.onSortChange }/>
        </SearchBar>
        <CountryList countries={ filteredCountries }/>
    </div>);      
  }  

  
}

export default App;
