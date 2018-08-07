import React, { Component } from 'react';
import { Persist } from 'react-persist';

class WorkoutCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

onClick = event => {
  this.setState({
    count: this.state.count + 1
  })
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
        <p>{this.state.count}</p>
        <button className="button" onClick={this.onClick}>Like</button>
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
