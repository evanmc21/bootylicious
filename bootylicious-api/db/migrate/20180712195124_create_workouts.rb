class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :location
      t.string :muscle_group
      t.integer :duration
      t.integer :sets
      t.integer :reps
      t.integer :weight
      t.boolean :cardio
      t.boolean :resistance

      t.timestamps
    end
  end
end
