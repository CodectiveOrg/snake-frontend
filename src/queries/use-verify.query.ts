import { useQuery } from "@tanstack/react-query";

import { verifyTokenApi } from "@/api/auth/verify-token.api.ts";

export default function useVerifyQuery() {
  return useQuery({
    queryKey: ["verify"],
    queryFn: verifyTokenApi,
    retry: 0,
    staleTime: 300_000,
    refetchOnWindowFocus: false,
  });
}
