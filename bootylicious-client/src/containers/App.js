import React, { Component } from 'react';
import Workouts from './Workouts';
import { connect } from 'react-redux'
import '../styles/App.css';
import { editWorkout } from '../actions/workouts';
import { getWorkouts } from '../actions/workouts';
import { createWorkout } from '../actions/workouts';
import { getComments } from '../actions/workouts';
import { createComment } from '../actions/workouts';
// import { CommentForm } from './CommentForm';
import { updateWorkoutFormData } from '../actions/workoutForm';
import { bindActionCreators } from 'redux';
import WorkoutShow from './WorkoutShow';
import WorkoutEdit from './WorkoutEdit';
import WorkoutForm from './WorkoutForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <div className="Navbar">
          <Navbar />
        </div>

        <Switch>
          <Route exact path='/' component = {Home} />
          <Route exact path='/workouts' component = {Workouts} />
          <Route exact path='/workouts/new' component = {WorkoutForm} />
          <Route exact path='/workouts/:workoutId' component = {WorkoutShow} />
          <Route exact path='/workouts/:workoutId/edit' component = {WorkoutEdit} />
        </Switch>
        </div>
      </Router>
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
    editWorkout, getWorkouts, createWorkout, updateWorkoutFormData, getComments, createComment
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
