class AddNoteToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :note, :string
  end
end
