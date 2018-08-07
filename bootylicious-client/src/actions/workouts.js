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

const setComments = comments => {
  return {
    type: 'GET_COMMENTS',
    comments
  }
}

const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
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

export const editWorkout = (workout, routerHistory) => {
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

export const getComments = (workoutId) => {
  return dispatch => {
    return fetch(`${API_URL}/workouts/${workoutId}/comments`, {
      method: "GET",
    })
    .then(response => response.json())
    .then(comments => {
      dispatch(setComments(comments))
    })
    .catch(error => console.log(error));
  }
}

export const createComment = comment => {
  return dispatch => {
    return fetch(`${API_URL}/workouts/${comment.workoutId}/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment})
    })
    .then(response => response.json())
    .then(comment => dispatch(addComment(comment)))
    .catch(error => console.log(error))
  }
}
