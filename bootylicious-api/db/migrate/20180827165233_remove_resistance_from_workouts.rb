class RemoveResistanceFromWorkouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :workouts, :resistance, :boolean
  end
end
