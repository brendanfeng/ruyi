export const fetchProject = id => {
  return $.ajax({
    method: "GET",
    url: `/api/projects/${id}`
  });
};

export const createProject = project => {
  return $.ajax({
    method: "POST",
    url: "/api/projects",
    data: {project}
  });
};

export const updateProject = project => {
  return $.ajax({
    method: "PATCH",
    url: `/api/projects/${project.id}`,
    data: {project}
  });
};

export const deleteProject = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/projects/${id}`
  });
};

export const fetchIndex = category => {
  return $.ajax({
    method: "GET",
    url: `/api/homepage/${category}`
  });
};

export const searchIndex = ({query, category}) => {
  return $.ajax({
    method: "GET",
    url: `/api/search`,
    data: {query, category}
  });
};
