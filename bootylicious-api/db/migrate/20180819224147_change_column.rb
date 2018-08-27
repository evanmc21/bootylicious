class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
  change_column  :workouts, :count, :integer, :default => 0
  end
end
