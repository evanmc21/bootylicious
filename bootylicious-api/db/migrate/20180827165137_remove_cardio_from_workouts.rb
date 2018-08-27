class RemoveCardioFromWorkouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :cardio, :boolean
  end
end
