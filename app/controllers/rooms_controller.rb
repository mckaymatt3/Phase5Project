class RoomsController < ApplicationController
  # before_action :authenticate_user!

  def index
    # applying two scopes we created
    @rooms = Room.all

    # @users = User.all_except(current_user)
    #     @room = Room.new

    render json: RoomSerializer.new(@rooms), status: :ok
  end

  def show
    @room = Room.find(params[:id])
    render json: RoomSerializer.new(@room), status: :ok 
  end

  # create room below
  def create
    # binding.pry
    @new_room = Room.create(room_params)
    @user = User.find(params[:user_id]);
    # if @new_room
    #     render json: RoomSerializer.new(@new_room), status: :created
    # end
    if @new_room.save
      render json: RoomSerializer.new(@new_room), status: :created
    else
      render json: @new_room.errors.full_messages, status: :unprocessable_entity
    end
end

private

def room_params
  params.permit(:name, :id)
end


end
