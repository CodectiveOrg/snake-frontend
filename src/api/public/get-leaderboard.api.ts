import type { LeaderboardItemDto } from "@/dto/leaderboard-item.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function getLeaderboardApi(): Promise<LeaderboardItemDto[]> {
  const data = await richFetch<LeaderboardItemDto[]>("/leaderboard");

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
