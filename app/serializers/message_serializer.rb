class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :room_id, :body
  has_one :user
end
