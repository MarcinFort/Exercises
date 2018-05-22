import React, { Component } from 'react';
import './App.css';
import { ArticlesGrid } from './ArticlesGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticlesGrid />
      </div>
    );
  }
}

export default App;
