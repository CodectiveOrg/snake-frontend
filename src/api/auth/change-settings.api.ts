import type { GetSettingsRequestDto } from "@/dto/request/get-settings.dto";
import type { ChangeSettingsResponseDto } from "@/dto/response/change-settings.dto";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function changeSettingsApi(
  payload: GetSettingsRequestDto,
): Promise<ChangeSettingsResponseDto> {
  const data = await richFetch<ChangeSettingsResponseDto>("/settings", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
