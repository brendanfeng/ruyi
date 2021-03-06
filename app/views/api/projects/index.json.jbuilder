ranks = []

@projects.each do |project|
  json.projects do
    json.set! project.id do
      json.partial! "/api/projects/project", project: project
    end
  end
  ranks << project.id
end

json.ranks ranks

@users.each do |user|
  json.users do
    json.set! user.id do
      json.partial! "/api/users/user", user: user
    end
  end
end
