import type { GetProfileResponseDto } from "@/dto/response/get-profile.response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function getProfileApi(): Promise<GetProfileResponseDto> {
  const data = await richFetch<GetProfileResponseDto>("/profile");

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
