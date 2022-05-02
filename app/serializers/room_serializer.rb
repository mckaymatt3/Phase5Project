class RoomSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :is_private, :messages
  # has_many :messages
end