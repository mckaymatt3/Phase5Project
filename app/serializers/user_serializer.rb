class UserSerializer
  # add in status below
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :username, :password, :email
  attribute :rooms do |user|
    user.rooms.uniq
  end
end
