class RoomSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :is_private, :messages
  # has_many :messages
  attribute :users do |room|
    UserSerializer.new(room.users.uniq)
  end
end