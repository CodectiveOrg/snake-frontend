import type { UserRankDto } from "@/dto/user-rank.dto";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function getUserRankApi(): Promise<UserRankDto> {
  const data = await richFetch<UserRankDto>("/history/rank");

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
