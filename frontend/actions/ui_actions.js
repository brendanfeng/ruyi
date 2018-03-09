export const UPDATE_CURRENT_PROJECT = "UPDATE_CURRENT_PROJECT";

export const updateCurrentProject = (currentProject) => {
  return {
    type: UPDATE_CURRENT_PROJECT,
    currentProject
  };
};
