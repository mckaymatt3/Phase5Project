class RoomsChannel < ApplicationCable::Channel
  # when a user is subscribed it means that they have loaded the relevant page and are viewing it
    
    def subscribed
      # stream_from "some_channel"
      # my subscriptions are being created on the RoomsWebSocket component from the frontend
      @room = Room.find_by(id: params[:room])
      @user = User.find_by(id: params[:user])
      stream_for @room
      # appear
    end

    # the second argument to braodcast_to matches the information that i am getting from the frontend 
    def received(data)
      RoomsChannel.broadcast_to(@room, {room: @room, users: @room.users, messages: @room.messages})
    end

    # def appear
    #   @user.update(status: "online")
    #   RoomsChannel.broadcast_to(@room, {
    #     room: RoomSerializer.new(@room),
    #     users: UserSerializer.new(@room.users),
    #     messages: @room.messages
    # })
    # end
    
    # def disappear
    #   @user.update(status: "offline")
    #   RoomsChannel.broadcast_to(@room, {
    #     room: RoomSerializer.new(@room),
    #     users: UserSerializer.new(@room.users),
    #     messages: @room.messages
    # })
    # end
    
    def unsubscribed
      # any cleanup action needed when channel is unsubscribed
      # disappear
    end
  end