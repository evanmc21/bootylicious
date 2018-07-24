import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateWorkoutFormData } from '../actions/workoutForm';
import { createWorkout } from '../actions/workouts';

class WorkoutForm extends Component {

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentWorkoutFormData = Object.assign({}, this.props.workoutFormData, {
      [name]: value
    })
    this.props.updateWorkoutFormData(currentWorkoutFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createWorkout(this.props.workoutFormData)
  }
  render(){
    const { duration, location, muscle_group, sets, reps, weight, cardio, resistance } = this.props.workoutFormData;

    return(
      <div className="workoutForm">
        add a workout!
        <form onSubmit={this.handleOnSubmit}>
          <div>
          <label htmlFor="duration">duration (minutes):</label>
          <input
          type="number"
          onChange={this.handleOnChange}
          name="duration"
          placeholder="be honest"
          value={duration}
          />
          </div>
          <div>
          <label htmlFor="location">location:</label>
          <input
          type="text"
          onChange={this.handleOnChange}
          name="location"
          placeholder="neverland"
          value={location}
          />
          </div>
          <div>
          <label htmlFor="muscle_group">muscle group:</label>
          <input
          type="text"
          onChange={this.handleOnChange}
          name="muscle_group"
          placeholder="glutes"
          value={muscle_group}
          />
          </div>
          <div>
          <label htmlFor="sets">sets:</label>
          <input
          type="number"
          onChange={this.handleOnChange}
          name="sets"
          placeholder="be honest"
          value={sets}
          />
          </div>
          <div>
          <label htmlFor="reps">reps:</label>
          <input
          type="number"
          onChange={this.handleOnChange}
          name="reps"
          placeholder="be honest"
          value={reps}
          />
          </div>
          <div>
          <label htmlFor="weight">weight:</label>
          <input
          type="number"
          onChange={this.handleOnChange}
          name="weight"
          placeholder="be honest"
          value={weight}
          />
          </div>
          <div>
          <label htmlFor="cardio">cardio:</label>
          <input
          type="checkBox"
          onChange={this.handleOnChange}
          name="cardio"
          value={cardio}
          />
          </div>
          <div>
          <label htmlFor="resistance">resistance training?:</label>
          <input
          type="checkBox"
          onChange={this.handleOnChange}
          name="resistance"
          value={resistance}
          />
          </div>
          <button className="button" type="submit">add workout</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    workoutFormData: state.workoutFormData
  }
}
export default connect(mapStateToProps, {
  updateWorkoutFormData,
  createWorkout
})(WorkoutForm);
