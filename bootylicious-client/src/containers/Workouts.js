import React, { Component } from 'react';
import { connect } from 'react-redux';
import WorkoutCard from '../components/WorkoutCard';
// import WorkoutForm from './WorkoutForm';
import { getWorkouts } from '../actions/workouts';
import '../styles/Workouts.css';

class Workouts extends Component {

  componentDidMount() {
    this.props.getWorkouts()
  }


  render(){
    return (
      <div className="WorkoutContainer">
        <h1>Workouts</h1>
        {this.props.workouts.map(workout => <WorkoutCard key={workout.id} workout=
        {workout}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    workouts: state.workouts
  })
}

export default connect(mapStateToProps, { getWorkouts })(Workouts);
