import type { GetLeaderboardResponseDto } from "@/dto/response/get-leaderboard.response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function getLeaderboardApi(): Promise<
  GetLeaderboardResponseDto[]
> {
  const data = await richFetch<GetLeaderboardResponseDto[]>(
    "/history/leaderboard",
  );

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
