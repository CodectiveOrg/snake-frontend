import { useQuery } from "@tanstack/react-query";

import { getVerifyUserTokenApi } from "@/api/public/get-VerifyUserToken.api.ts";

export default function useVerifyQuery() {
  return useQuery({
    queryKey: ["verify"],
    queryFn: getVerifyUserTokenApi,
    retry: 1,
  });
}
