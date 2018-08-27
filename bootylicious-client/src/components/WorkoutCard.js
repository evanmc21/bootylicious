import React, { Component } from 'react';
import { Persist } from 'react-persist';

class WorkoutCard extends Component {
  constructor(props){
  super(props);

  this.state = {
    count: this.props.workout.count
  }
}

onClick = event => {

const API_URL = process.env.REACT_APP_API_URL;
const workout = this.props.workout
const updateWorkout = workout => {
  return {
    workout
  }
}
  fetch(`${API_URL}/workouts/${workout.id}`, {
    method: "PATCH",
    headers: {'Content-Type': 'application/json'},
    //body: JSON.stringify({workout: Object.assign(...workout, {count: this.state.count + 1})})
  })
  .then(response => response.json())
  // .then(workout => (updateWorkout(workout))
  // )
  .then(workout => (this.setState({count: this.state.count + 1})))
  .catch(error => console.log(error))
  }

  render(){
    const {workout} = this.props
    return(
    <div key={workout.id} className="WorkoutCard">
      <h3>muscle group: {workout.muscle_group}</h3>
        <p>location: {workout.location}</p>
        <p> duration (minutes): {workout.duration}</p>
        <p> weight (lbs): {workout.weight} </p>
        <p> sets: {workout.sets}</p>
        <p> reps: {workout.reps}</p>
        <p> cardio?: {workout.cardio}</p>
        <p> resistance training?: {workout.resistance}</p>
        <p> notes: {workout.note}</p>
        <p>{this.state.count}</p>
        <button className="button" onClick={this.onClick}>like</button>
        <Persist
        name="workout"
        data={this.state}
        debounce={500}
        onMount={data => this.setState(data)}
        />
    </div>
    )
  }
}


export default WorkoutCard;
