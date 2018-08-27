// import { REHYDRATE } from 'redux-persist/constants'
const initialState = {
  location: '',
  duration: 0,
  sets: 0,
  reps: 0,
  muscle_group: '',
  weight: 0,
  note: '',
  date: '',
  exercise: ''
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'UPDATED_DATA':
      return action.workoutFormData

      default:
        return state;
  }
}
