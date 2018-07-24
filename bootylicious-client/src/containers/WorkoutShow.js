import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editWorkout } from '../actions/workouts';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class WorkoutShow extends Component {
  render() {
    const { workout } = this.props;
      return (

        <div className="workoutShow-card">
        <h1>{workout.muscle_group}</h1>
        <p>location: {workout.location}</p>
        <p> duration (minutes): {workout.duration}</p>
        <p> weight (lbs): {workout.weight} </p>
        <p> sets: {workout.sets}</p>
        <p> reps: {workout.reps}</p>
        <h4> make an edit to your bootylicious workout </h4>
        <Link key={workout.id} to={`/workouts/${workout.id}/edit`}>
        <button type="button"> edit workout </button>
          </Link>
        </div>
      )
  }
}

  const mapStateToProps = (state, ownProps) => {
    const id = +ownProps.match.params.workoutId
    const workout = state.workouts.workouts.find(workout => workout.id === id) || {}
    return ({
      workout: workout
    })
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      editWorkout
    }, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(WorkoutShow);
