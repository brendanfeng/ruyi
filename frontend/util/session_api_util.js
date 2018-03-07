export const login = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/session'
  });
};

export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};
export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};
