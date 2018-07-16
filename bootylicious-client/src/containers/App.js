import React, { Component } from 'react';
import Workouts from './Workouts';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workouts: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/workouts`)
    .then(response => response.json())
    .then(workouts => this.setState({ workouts }))
  }
  render() {
    return (
      <div className="App">
        <Workouts workouts={this.state.workouts}/>
      </div>
    );
  }
}

export default App;
