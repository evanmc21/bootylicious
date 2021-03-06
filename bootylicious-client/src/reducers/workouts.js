export default (state = [], action) => {
  switch(action.type) {
    case 'GET_WORKOUTS_SUCCESS':
      return action.workouts;

    case 'CREATE_WORKOUT_SUCCESS':
      return state.concat(action.workout);

    case 'RESET_WORKOUT_FORM':
      return state;

    case 'EDIT_WORKOUT':
    return state.concat(action.workout);

      default:
        return state;
  }
}
