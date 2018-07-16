import React from 'react';
import './Workouts.css';
const Workouts = (props) => (
  <div className="WorkoutContainer">
    <h1>Workouts</h1>
    {props.workouts.map(workout =>
      <div className="WorkoutCard">
      <h3>muscle group: {workout.muscleGroup}</h3>
      <p>location: {workout.location}</p>
      <p> duration (minutes): {workout.duration}</p>
      <p> weight (lbs): {workout.weight} </p>
      <p> sets: {workout.sets}</p>
      <p> reps: {workout.reps}</p>
      <p> cardio?: {workout.cardio}</p>
      <p> resistance training?: {workout.resistance}</p>

      </div>
    )}
  </div>
);

export default Workouts;
