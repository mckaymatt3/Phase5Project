class User < ApplicationRecord
    # :confirmable, :lockable, :timeoutable and :omniauthable
    #devise :database_authenticatable, :registerable,
    #:recoverable, :rememberable, :trackable, :validatable
    
    has_many :messages
    has_many :rooms, through: :messages
    has_secure_password 

    validates :username, uniqueness: true, presence: true
end
