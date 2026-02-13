export type HealthResponse = {
  status: "ok";
  service: string;
  env: string;
  uptimeSeconds: number;
  timestamp: string;
};
