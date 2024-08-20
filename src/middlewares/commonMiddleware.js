export const applyCommonMiddleware = (router) => {
  router.use((req, res, next) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const queryParams = new URLSearchParams(url.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());
    req.query = queryParamsObject;
    return next();
  });

  return router;
};
