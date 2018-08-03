import React, { Component } from 'react';
import Workouts from './Workouts';
import { connect } from 'react-redux'
// import Comment from '../components/Comment';
import './App.css';
import { editWorkout } from '../actions/workouts';
import { getWorkouts } from '../actions/workouts';
import { createWorkout } from '../actions/workouts';
import { bindActionCreators } from 'redux';
import WorkoutShow from './WorkoutShow';
import WorkoutEdit from './WorkoutEdit';
import WorkoutForm from './WorkoutForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar'

class App extends Component {

  render() {
    return (
      <div className="Navbar">
        <Navbar />

      <Router>
      <div className="App">
      <Switch>
      <Route exact path='/workouts' component = {Workouts} />
      <Route exact path='/workouts/new' component = {WorkoutForm} />
      <Route exact path='/workouts/:workoutId' component = {WorkoutShow} />
      <Route exact path='/workouts/:workoutId/edit' component = {WorkoutEdit} />
      </Switch>
      </div>
      </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    workouts: state.workouts
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editWorkout, getWorkouts, createWorkout
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
