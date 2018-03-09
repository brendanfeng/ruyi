json.project do
  json.partial! "/api/projects/project", project: @project
end

json.creator @project.creator, partial: 'api/users/user', as: :user
