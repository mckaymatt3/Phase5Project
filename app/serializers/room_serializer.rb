class RoomSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :is_private
  # need to add in messages or rooms here
end