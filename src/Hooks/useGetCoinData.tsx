import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetCoinData() {
  return useQuery({
    queryKey: ["coin"],
    queryFn: async () =>
      await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false",
        {}
      ),
    staleTime: 5 * 60 * 1000,
  });
}
