import React, { Component } from 'react';
import './App.css';
import { ArticlesGrid } from './ArticlesGrid'
import { Header } from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArticlesGrid />
      </div>
    );
  }
}

export default App;
