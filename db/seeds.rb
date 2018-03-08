# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


## User Seeds
user_list = [
  ["user", "password"],
  ["DarrenBuffet", "allyoucaneat"],
  ["BobGates", "fences"]
]

user_list.each do |username, password|
  User.create(username: username, password: password)
end

## Project Seeds

proj_list = [
  ["Test", "http://www.gstatic.com/webp/gallery/1.jpg", "test", "test", "Games", "10", "2", true, 2]
]

proj_list.each do |title, img_url, blurb, story, category, goal, pledged_amount, public, creator_id|
  User.create(
    title: title, img_url: img_url, blurb: blurb, story: story, category: category,
    goal: goal, pledged_amount: pledged_amount, public: public, creator_id: creator_id
  )
end
