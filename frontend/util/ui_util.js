export const fetchHeader = () => {
  return $.ajax({
    method: "GET",
    url: "/api/header"
  });
};

export const searchLimited = query => {
  return $.ajax({
    method: "GET",
    url: `/api/searchlimited`,
    data: {query: query}
  });
};
