# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroy Database"

User.destroy_all
Room.destroy_all
Message.destroy_all

puts "🏕 Seeding rooms..."
room1 = Room.create(name: "Brooklyn Rap")
room2 = Room.create(name: "NYC Indie")
room3 = Room.create(name: "NYC Rock")
room4 = Room.create(name: "Rap")
room5 = Room.create(name: "Indie")
room6 = Room.create(name: "Rock")
room7 = Room.create(name: "EDM")


puts "🏕 Seeding users..."
user1 = User.create!(name: "John Doe", username: "Johnny D", email:"john@doe.com", password: 'abc123')
user2 = User.create!(name: "Miami Heat", username: "Miami", email: "miami@heat.com", password: 'abc123')

puts "🏕 Seeding messages..."
Message.create(user_id: user1.id, room_id: room1.id, body: 'Check out this new ish')
Message.create(user_id: user2.id, room_id: room2.id, body: 'Lets get it')
Message.create(user_id: user2.id, room_id: room1.id, body: 'Ayoooo')
Message.create(user_id: user1.id, room_id: room3.id, body: '🎉')

puts "The end..."
