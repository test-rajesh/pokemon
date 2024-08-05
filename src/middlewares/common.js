import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { createRouter, expressWrapper } from "next-connect";

export const applyCommonMiddleware = () => {
  const router = createRouter();

  router.use(cors());
  router.use(helmet());
  router.use(compression());

  return router;
};
