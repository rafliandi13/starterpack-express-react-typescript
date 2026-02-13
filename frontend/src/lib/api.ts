import { appEnv } from "./env";
import type { HealthResponse } from "../types/api";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${appEnv.apiBaseUrl}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {})
    },
    ...init
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as T;
}

export const apiClient = {
  getHealth: (): Promise<HealthResponse> => request<HealthResponse>("/health")
};
