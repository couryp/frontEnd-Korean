import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/header'
import SplashpageBody from './components/SplashpageBody'
import Learn from './components/learn'
import Login from './components/Login'
import Quiz from './components/quiz'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={SplashpageBody} />
          <Route path="/learn" component={Learn} />
          <Route exact path="/login" component={Login} />
          <Route path="/quiz" component={Quiz} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
