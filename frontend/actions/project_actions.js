import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const RECEIVE_INDEX = 'RECEIVE_INDEX';

export const receiveIndex = (payload) => {
  console.log(payload)
return {
  type: RECEIVE_INDEX,
  projects: payload.projects,
  users: payload.users,
  ranks: payload.ranks
  };
};

export const receiveProject = (payload) => {
  return {
    type: RECEIVE_PROJECT,
    project: payload.project,
    creator: payload.creator
  };
};

export const removeProject = (payload) => {
  return {
    type: REMOVE_PROJECT,
    projectId: payload.project.id
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  };
};

export const fetchIndex = (category) => dispatch => {
  return APIUtil.fetchIndex(category).then(payload => {
    return dispatch(receiveIndex(payload));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const searchIndex = (query) => dispatch => {
  return APIUtil.searchIndex(query).then(payload => {
    return dispatch(receiveIndex(payload));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const fetchProject = id => dispatch => {
  return APIUtil.fetchProject(id).then(payload => {
    return dispatch(receiveProject(payload));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const createProject = proj => dispatch => {
  return APIUtil.createProject(proj).then(payload => {
    return dispatch(receiveProject(payload));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const updateProject = proj => dispatch => {
  return APIUtil.updateProject(proj).then(payload => {
    return dispatch(receiveProject(payload));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};

export const deleteProject = id => dispatch => {
  return APIUtil.deleteProject(id).then(payload => {
    return dispatch(removeProject(payload));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};
