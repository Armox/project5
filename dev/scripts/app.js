import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map';
import Main from './components/main';
import countriesArr from './api_terms';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    phase: 1,
    cuisineSelected: '',
    beers: {}
    }
    this.setStateCuisine = this.setStateCuisine.bind(this);
    this.getBeer = this.getBeer.bind(this);
  }
  
  setStateCuisine(e){
    e.preventDefault();
    console.log(e.target.value);
    this.getBeer(e.target.value);
    this.setState({
      cuisineSelected: e.target.value,
      phase: 2
    });
  }

  getBeer (cuisine){
    const countryName = countriesArr.map((countryObj)=>{
      console.log(countryObj.cuisineType)
      if(countryObj.cuisineType === cuisine){
        return countryObj.lcbo
      }
    });
    axios.get('http://lcboapi.com/products', {
      params: {
        access_key: 'MDowZTRkM2RjYy0yZDZmLTExZTgtOWE5ZC1iMzZjYmI4MWYzOWE6YzlOMEFQdzF3TTFFSjZsWFA5ejd3Tzg5bzc1Rnd4Z0E0UWhN',
        q: `beer ${countryName}`,
        dataType: 'json'
      }
    })
    .then((res)=>{
      this.setState({
        beers: res
      });
    })
  }

  getResto() {
    axios.get()
  }

  render() {
    
    return (
      <div>
        <Map/>
        <div className='main-wrapper'>
          <Main 
            phase={this.state.phase}
            showResultsBox={this.state.showResultsBox} 
            setStateCuisine={this.setStateCuisine}
            countryList={countriesArr}
            getBeer={this.getBeer} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

// apikey: "fc7bda90e297088c088bd9cd062288e4",
