import { resetWorkoutForm } from './workoutForm';

const API_URL = process.env.REACT_APP_API_URL;


//  ** Action Creators **
const setWorkouts = workouts => {
  return {
    type: 'GET_WORKOUTS_SUCCESS',
      workouts
  }
}

const addWorkout = workout => {
  return {
    type: 'CREATE_WORKOUT_SUCCESS',
    workout
  }
}

const updateWorkout = workout => {
  return {
    type: 'EDIT_WORKOUT',
    workout
  }
}

//  ** Workout Async Actions **
export const getWorkouts = () => {
  return dispatch => {
    return fetch(`${API_URL}/workouts`)
      .then(response => response.json())
      .then(workouts => dispatch(setWorkouts(workouts)))
      .catch(error => console.log(error));
  }
}


export const createWorkout = workout => {
  return dispatch => {
    return fetch(`${API_URL}/workouts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({workout: workout})
    })
    .then(response => response.json())
    .then(workout => {
      dispatch(addWorkout(workout))
      dispatch(resetWorkoutForm())
    })
    .catch(error => console.log(error))
  }
}

export const editWorkout = workout => {
  return dispatch => {
    return fetch(`${API_URL}/workouts/${workout.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({workout: workout})
    })
    .then(response => response.json())
    .then(workout => {
      dispatch(updateWorkout(workout))
    })
    .catch(error => console.log(error))
  }
}
