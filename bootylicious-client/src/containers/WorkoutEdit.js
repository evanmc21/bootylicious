import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editWorkout } from '../actions/workouts';
import { bindActionCreators } from 'redux';

class WorkoutEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.workout.id,
      location: this.props.workout.location,
      duration: this.props.workout.duration,
      muscle_group: this.props.workout.muscle_group,
      cardio: this.props.workout.cardio,
      resistance: this.props.workout.resistance,
      sets: this.props.workout.sets,
      reps: this.props.workout.reps,
      weight: this.props.workout.weight
    };
    this.handleChange = this.handleChange.bind(this)
    // this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { editWorkout } = this.props;
    editWorkout(this.state);
  }

  render(){
    return (
      <div>
        <h3>take a risk, take a chance, make a change:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div>
          <label htmlFor="duration">duration (minutes):</label>
          <input
          type="number"
          name="duration"
          placeholder="be honest"
          defaultValue={this.state.duration}
          onChange={this.handleOnChange}
          />
          </div>
          <div>
          <label htmlFor="location">location:</label>
          <input
          type="text"
          name="location"
          placeholder="neverland"
          defaultValue={this.state.location}
          onChange={this.handleOnChange}
          />
          </div>
          <div>
          <label htmlFor="muscle_group">muscle group:</label>
          <input
          type="text"
          name="muscle_group"
          placeholder="glutes"
          defaultValue={this.state.muscle_group}
          onChange={this.handleOnChange}
          />
          </div>
          <div>
          <label htmlFor="sets">sets:</label>
          <input
          type="number"
          name="sets"
          placeholder="be honest"
          defaultValue={this.state.sets}
          onChange={this.handleOnChange}
          />
          </div>
          <div>
          <label htmlFor="reps">reps:</label>
          <input
          type="number"
          name="reps"
          placeholder="be honest"
          defaultValue={this.state.reps}
          onChange={this.handleOnChange}
          />
          </div>
          <div>
          <label htmlFor="weight">weight:</label>
          <input
          type="number"
          name="weight"
          placeholder="be honest"
          defaultValue={this.state.weight}
          onChange={this.handleOnChange}
          />
          </div>
          <div>
          <label htmlFor="cardio">cardio:</label>
          <input
          type="checkBox"
          name="cardio"
          defaultValue={this.state.cardio}
          onChange={this.handleOnChange}
          />
          </div>
          <div>
          <label htmlFor="resistance">resistance training?:</label>
          <input
          type="checkBox"
          name="resistance"
          defaultValue={this.state.resistance}
          onChange={this.handleOnChange}
          />
          </div>
          <button className="button" type="submit">breakaway</button>
        </form>
      </div>
    )
  }
}

  const mapStateToProps = (state, ownProps) => {
    const workout = state.workouts.find(workout => workout.id)
    if (workout) {
      return {workout: workout}
    } else {
      return { workout: {}};
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      editWorkout: editWorkout
    }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutEdit);
