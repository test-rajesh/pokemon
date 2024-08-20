export const applyEdgeMiddleware = (router) => {
  router.use((req, params, next) => {
    console.log("reaching!");
    return next();
  });

  return router;
};
