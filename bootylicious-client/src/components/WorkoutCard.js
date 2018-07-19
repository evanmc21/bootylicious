import React from 'react';

const WorkoutCard = ({ workout }) => (
  <div key={workout.id} className="WorkoutCard">
    <h3>muscle group: {workout.muscle_group}</h3>
      <p>location: {workout.location}</p>
      <p> duration (minutes): {workout.duration}</p>
      <p> weight (lbs): {workout.weight} </p>
      <p> sets: {workout.sets}</p>
      <p> reps: {workout.reps}</p>
      <p> cardio?: {workout.cardio}</p>
      <p> resistance training?: {workout.resistance}</p>
  </div>
)

export default WorkoutCard;
