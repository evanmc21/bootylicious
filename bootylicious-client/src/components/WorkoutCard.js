import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WorkoutCard extends Component {


  render(){
    const {workout} = this.props
    return(
    <div key={workout.id} className="WorkoutCard">
        <h3> date: {workout.date}</h3>
        <p>location: {workout.location}</p>
        <p> exercise: {workout.exercise}</p>
        <p>muscle group: {workout.muscle_group}</p>
        <p> duration (minutes): {workout.duration}</p>
        <p> weight (lbs): {workout.weight} </p>
        <p> sets: {workout.sets}</p>
        <p> reps: {workout.reps}</p>
        <p> notes: {workout.note}</p>
        <Link key={workout.id} to={`/workouts/${workout.id}`}>
        <button className="button" type="button"> view workout </button>
          </Link>
    </div>
    )
  }
}


export default WorkoutCard;
