export const queryParamsToObject = (searchParams) => {
  const params = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  console.log(params, "///////////");

  return params;
};
