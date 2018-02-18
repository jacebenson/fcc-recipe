import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header.js';
import RecipeList from './RecipeList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RecipeList />
      </div>
    );
  }
}

export default App;
