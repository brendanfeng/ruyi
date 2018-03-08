json.project do
  json.partial! "/api/projects/project", project: @project
end

json.user @project.creator, partial: 'api/users/user', as: :user
