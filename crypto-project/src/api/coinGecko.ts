import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { CoinDetails, CoinMarketData } from "../types/dataTypes";

const BASE_URL = "https://api.coingecko.com/api/v3";

const fetchCryptos = async (): Promise<CoinMarketData[]> => {
  const response = await fetch(
    `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cryptos");
  }
  return await response.json();
};

const fetchCoinDataAndChart = async (
  id: string,
): Promise<CoinDetails> => {
  const coinDataPromise = fetch(
    `${BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
  );

  const chartDataPromise = fetch(
    `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`,
  );

  const [res1, res2] = await Promise.all([coinDataPromise, chartDataPromise]);

  if (!res1.ok || !res2.ok) {
    throw new Error("Failed to fetch Coin data from CoinGecko");
  }

  const [coin, chart] = await Promise.all([res1.json(), res2.json()]);

  return { coin, chart };
};

export const useCryptos = () => {
  return useQuery({
    queryKey: ["cryptos"],
    queryFn: fetchCryptos,
    refetchInterval: 30000, // 30 seconds
    staleTime: 30000, // Data is fresh for 30 seconds
  });
};

export const useCoinDetails = (id: string) => {
  return useQuery({
    queryKey: ["coinDetails", id],
    queryFn: () => fetchCoinDataAndChart(id),
    refetchInterval: 30000, // 30 seconds
    staleTime: 30000, // Data is fresh for 30 seconds
    enabled: !!id, // Only fetch if id exists
  });
};

// Manual refresh function
export const useRefreshData = () => {
  const queryClient = useQueryClient();

  return {

    refreshCryptos: () =>
      queryClient.invalidateQueries({ queryKey: ["cryptos"] }),

    refreshCoinDetails: (id: string) =>
      queryClient.invalidateQueries({ queryKey: ["coinDetails", id] })

  };
};
