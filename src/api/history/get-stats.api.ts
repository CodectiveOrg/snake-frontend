import type { GetStatsResponseDto } from "@/dto/response/get-stats.response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function getStatsApi(): Promise<GetStatsResponseDto> {
  const data = await richFetch<GetStatsResponseDto>("/history/stats");

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
