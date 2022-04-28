class RoomSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :is_private
  has_many :messages
end