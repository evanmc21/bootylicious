export default (state = [], action) => {
  switch(action.type) {
    case 'GET_WORKOUTS_SUCCESS':
      return action.workouts;

    case 'CREATE_WORKOUT_SUCCESS':
      return state.concat(action.workout);

    case 'RESET_WORKOUT_FORM':
      return state;

    case 'EDIT_WORKOUT':
      state.workouts.map((workout) => {
      if (workout.id === action.workout.id) {
        workout.location = action.workout.location
        workout.duration = action.workout.duration
        workout.sets = action.workout.sets
        workout.reps = action.workout.reps
        workout.muscle_group = action.workout.muscle_group
        workout.weight = action.workout.weight
      }
    })
    return {...state, workout: action.workout};

      default:
        return state;
  }
}
