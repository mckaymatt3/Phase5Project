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

puts "🏕 Seeding rooms..."
room1 = Room.create(name: "Brooklyn Rap")
room2 = Room.create(name: "NYC Indie")
room3 = Room.create(name: "Rap")
room4 = Room.create(name: "Indie")


puts "🏕 Seeding users..."
# user1 = User.create!(email:"john@doe.com", password: 'password', password_confirmation: 'password')
# user2 = User.create!(email:"miami@heat.com", password: 'abc123', password_confirmation: 'abc123')

