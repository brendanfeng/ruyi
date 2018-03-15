export const fetchHeader = () => {
  return $.ajax({
    method: "GET",
    url: "/api/header",
  });
};
