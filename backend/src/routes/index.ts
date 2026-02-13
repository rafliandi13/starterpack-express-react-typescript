import { Router } from "express";

import { healthRoute } from "./health.route.js";

export const apiRouter = Router();

apiRouter.use(healthRoute);
