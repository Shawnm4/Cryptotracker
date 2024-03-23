import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetCoinGraphData(date: number, id: string) {
  return useQuery({
    queryKey: [date, id],
    queryFn: async () =>
      await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${date}`,
        {}
      ),
    staleTime: 5 * 60 * 1000,
  });
}
