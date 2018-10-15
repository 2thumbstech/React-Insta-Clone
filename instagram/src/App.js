import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from  './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer/'
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      post: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
