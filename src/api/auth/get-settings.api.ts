import type { GetSettingsResponseDto } from "@/dto/response/get-settings.dto";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function getSettingsApi(): Promise<GetSettingsResponseDto[]> {
  const data = await richFetch<GetSettingsResponseDto[]>("/settings");

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
