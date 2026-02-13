import { useEffect, useState } from "react";

import { apiClient } from "../../lib/api";
import type { HealthResponse } from "../../types/api";

export default function ApiStatusCard() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const loadHealth = async () => {
      try {
        const result = await apiClient.getHealth();
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Unknown error");
          setData(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadHealth();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Backend API Status</p>
      {isLoading ? (
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Checking connection...</p>
      ) : error ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">Unavailable: {error}</p>
      ) : (
        <div className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
          <p>
            Status: <span className="font-semibold text-green-600 dark:text-green-400">{data?.status}</span>
          </p>
          <p>Service: {data?.service}</p>
          <p>Environment: {data?.env}</p>
        </div>
      )}
    </div>
  );
}
