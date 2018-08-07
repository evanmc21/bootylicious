const initialState = {
  location: '',
  duration: 0,
  sets: 0,
  reps: 0,
  muscle_group: '',
  weight: 0,
  cardio: '',
  resistance: ''
}

export default (state = initialState, action) => {
  debugger

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.workoutFormData

      default:
        return state;
  }
}
