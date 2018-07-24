import React, { Component } from 'react';
import Workouts from './Workouts';
import './App.css';
import WorkoutShow from './WorkoutShow';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar'

class App extends Component {

  render() {
    return (
      <div className="Navbar">
        <Navbar />

      <Router>
      <div className="App">
        <Workouts />
      <Switch>
      <Route exact path = '/workouts/:workoutId' component = {WorkoutShow} />
      </Switch>
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
