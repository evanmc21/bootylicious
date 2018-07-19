export const updateWorkoutFormData = workoutFormData => {
  return  {
    type: 'UPDATED_DATA',
    workoutFormData
  }
}

export const resetWorkoutForm = () => {
  return {
    type: 'RESET_WORKOUT_FORM'
  }
}
