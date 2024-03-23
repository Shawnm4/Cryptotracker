import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetCoinData(param: string) {
  return useQuery({
    queryKey: [param],
    queryFn: async () =>
      await axios.get(`https://api.coingecko.com/api/v3/coins/${param}`, {}),
    staleTime: 5 * 60 * 1000,
  });
}
