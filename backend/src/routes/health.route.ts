import { Router } from "express";

import { getHealthStatus } from "../controllers/health.controller.js";

export const healthRoute = Router();

healthRoute.get("/health", getHealthStatus);
