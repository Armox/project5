import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
    render() {
      return (
        <Map/>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

// apikey: "fc7bda90e297088c088bd9cd062288e4",
