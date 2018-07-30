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
    // this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
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
          onChange={this.handleOnChange}
          name="duration"
          placeholder="be honest"
          value={this.state.duration}
          />
          </div>
          <div>
          <label htmlFor="location">location:</label>
          <input
          type="text"
          onChange={this.handleOnChange}
          name="location"
          placeholder="neverland"
          value={this.state.location}
          />
          </div>
          <div>
          <label htmlFor="muscle_group">muscle group:</label>
          <input
          type="text"
          onChange={this.handleOnChange}
          name="muscle_group"
          placeholder="glutes"
          value={this.state.muscle_group}
          />
          </div>
          <div>
          <label htmlFor="sets">sets:</label>
          <input
          type="number"
          onChange={this.handleOnChange}
          name="sets"
          placeholder="be honest"
          value={this.state.sets}
          />
          </div>
          <div>
          <label htmlFor="reps">reps:</label>
          <input
          type="number"
          onChange={this.handleOnChange}
          name="reps"
          placeholder="be honest"
          value={this.state.reps}
          />
          </div>
          <div>
          <label htmlFor="weight">weight:</label>
          <input
          type="number"
          onChange={this.handleOnChange}
          name="weight"
          placeholder="be honest"
          value={this.state.weight}
          />
          </div>
          <div>
          <label htmlFor="cardio">cardio:</label>
          <input
          type="checkBox"
          onChange={this.handleOnChange}
          name="cardio"
          value={this.state.cardio}
          />
          </div>
          <div>
          <label htmlFor="resistance">resistance training?:</label>
          <input
          type="checkBox"
          onChange={this.handleOnChange}
          name="resistance"
          value={this.state.resistance}
          />
          </div>
          <button className="button" type="submit">breakaway</button>
        </form>
      </div>
    )
  }
}

  const mapStateToProps = (state, ownProps) => {
    const workout = state.workouts.find(workout => workout.id === parseInt(ownProps.match.params.workoutId))
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
