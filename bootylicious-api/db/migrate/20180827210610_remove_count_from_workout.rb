class RemoveCountFromWorkout < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :count, :integer
  end
end
