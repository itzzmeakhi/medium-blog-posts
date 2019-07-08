import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactComponent from'./ReactComponent/ReactComponent';


class App extends Component {

  state = {
    style : [
      { backgroundColor: '#ffffff' }
    ]

  }

  render() {
    return(
      <div className="App">
        <header>
          <h1 class="App-header"> ReactApp </h1>
        </header>
        
        <ReactComponent />
     
      </div>
    );
  }
}



export default App;
