import { createEdgeRouter } from "next-connect";
import compression from "compression";
export const applyCommonMiddleware = () => {
  const router = createEdgeRouter();
  //   router.use(compression());
  router.use((req, params, next) => {
    console.log("reaching!");
    return next();
  });

  return router;
};
