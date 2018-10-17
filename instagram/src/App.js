import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './PostContainer';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <div className="App">
      <SearchBar/>
        <PostsContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;