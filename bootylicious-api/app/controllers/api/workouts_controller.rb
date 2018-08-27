class Api::WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :update, :destroy]
  def index
    render json: Workout.all
  end

  def show
    render json: Workout.find(params[:id])
  end

  def create
    workout = Workout.new(workout_params)
    if workout.save
      render json: workout
    else
      render json: { message: 'yikes. it looks like there was an error adding this workout. dust yourself off and try again.' }, status: 400
    end
  end

  def update
    if @workout.update(workout_params)
      render json: @workout
    else
      render json: { message: 'yikes. it looks like there was an error updating this workout. dust yourself off and try again.' }, status: 400
    end
  end

  def destroy
    if @workout.destroy
      render json: {message: 'you deleted this workout'}
    else
      render json: {message: 'yikes. it looks like there was an error deleting this workout. dust yourself off and try again.'}, status: 400
    end
  end

  private

  def set_workout
    @workout = Workout.find(params[:id])
  end

  def workout_params
    params.require(:workout).permit(:location, :duration, :reps, :sets, :muscle_group, :cardio, :resistance, :weight, :count, :note, :date, :exercise)
  end

end
