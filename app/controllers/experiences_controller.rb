class ExperiencesController < ApplicationController

  def new
    @destination = Destination.find(params[:destination_id])
    @experience = @destination.experiences.build
  end

  def create
    @experience = Experience.new(experience_params)
    #binding.pry
    @experience.save
    redirect_to destination_path(@experience.destination)

  end

  def show
    @experience = Experience.find(params[:id])
  end

  def destroy
  end

  private

  def experience_params
    params.require(:experience).permit(:name, :price, :paid, :location, :time, :destination_id)
  end
end
