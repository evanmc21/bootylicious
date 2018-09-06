import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWorkouts } from '../actions/workouts';

class WorkoutShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      workout: {}
    }
  }
  componentDidMount() {
    this.props.getWorkouts();
  }


  render() {
    const { workout } = this.props;
      return (

        <div className="workoutShow-card">
        <h1> date: {workout.date}</h1>
        <p>location: {workout.location}</p>
        <p> exercise: {workout.exercise}</p>
        <p>{workout.muscle_group}</p>
        <p> duration (minutes): {workout.duration}</p>
        <p> weight (lbs): {workout.weight} </p>
        <p> sets: {workout.sets}</p>
        <p> reps: {workout.reps}</p>
        <p> note: {workout.note}</p>
        <h4> make an edit to your workout </h4>
        <Link key={workout.id} to={`/workouts/${workout.id}/edit`}>
        <button className="button"> edit workout </button>
          </Link>

        </div>
      )
  }
}

  const mapStateToProps = (state, ownProps) => {
    const id = +ownProps.match.params.workoutId
    const workout = state.workouts.find(workout => workout.id === id) || {}
    return ({
      workout: workout
    })
  }

  export default connect(mapStateToProps, { getWorkouts })(WorkoutShow);
