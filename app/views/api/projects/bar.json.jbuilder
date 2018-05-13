json.array! @projects do |project|
  json.id project.id
  json.title project.title
  json.img_url project.img_url
  json.goal project.goal
  json.pledged_amount project.pledged_amount
end
