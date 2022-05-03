class MessagesController < ApplicationController

    def index
        @messages = Message.all
        render json: MessageSerializer.new(@messages), status: :ok
    end

    def create
        message = Message.new(message_params)
        room = Room.find(params[:room_id])
        # binding.pry
        if message.save
            puts "successfully saved a message!"
            RoomsChannel.broadcast_to(room, {
                room: RoomSerializer.new(room),
                users: UserSerializer.new(room.users),
                messages: room.messages
            })
        end
        render json: MessageSerializer.new(message)
    end

    private

    def message_params
        params.permit(:body, :user_id, :room_id)
    end

end