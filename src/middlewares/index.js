import { applyCommonMiddleware } from "./commonMiddleware";
import { applyEdgeMiddleware } from "./edgeMiddleware";
const { headers } = require("./middleware");

export { headers, applyEdgeMiddleware, applyCommonMiddleware };
