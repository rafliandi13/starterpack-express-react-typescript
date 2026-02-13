import type { Request, Response } from "express";

import { healthService } from "../services/health.service.js";

export const getHealthStatus = (_req: Request, res: Response): void => {
  res.status(200).json(healthService.getStatus());
};
