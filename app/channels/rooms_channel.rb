class RoomsChannel < ApplicationCable::Channel
    
    def subscribed
      @room = Room.find_by(id: params[:room])
      @user = User.find_by(id: params[:user])
      stream_for @room
      appear
    end

    def appear
      @user.update(status: "online")
      RoomsChannel.broadcast_to(@room, {
        room: RoomSerializer.new(@room),
        users: UserSerializer.new(@room.users),
        messages: @room.messages
    })
    end
    
    def disappear
      @user.update(status: "offline")
      RoomsChannel.broadcast_to(@room, {
        room: RoomSerializer.new(@room),
        users: UserSerializer.new(@room.users),
        messages: @room.messages
    })
    end
    
    def unsubscribed
      disappear
    end
  end