import { env } from "../config/env.js";

type HealthStatus = {
  status: "ok";
  service: string;
  env: string;
  uptimeSeconds: number;
  timestamp: string;
};

class HealthService {
  getStatus(): HealthStatus {
    return {
      status: "ok",
      service: "backend-api",
      env: env.NODE_ENV,
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString()
    };
  }
}

export const healthService = new HealthService();
