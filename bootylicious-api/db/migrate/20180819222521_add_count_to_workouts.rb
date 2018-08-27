class AddCountToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :count, :integer
  end
end
