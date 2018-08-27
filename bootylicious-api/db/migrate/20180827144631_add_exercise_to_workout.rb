class AddExerciseToWorkout < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :exercise, :string
  end
end
