import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./config/env.js";
import { errorHandler } from "./middleware/error-handler.js";
import { notFoundHandler } from "./middleware/not-found.js";
import { apiRouter } from "./routes/index.js";

export const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.FRONTEND_ORIGIN
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Backend API is running",
    docs: "/api/health"
  });
});

app.use("/api", apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);
