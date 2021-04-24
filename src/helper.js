export const modifiedData = function (searchdata) {
  const data = searchdata.split(" ").join("").toLowerCase();

  return data;
};
