import type { VerifyResponseDto } from "@/dto/response/verify.response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function verifyTokenApi(): Promise<VerifyResponseDto> {
  const data = await richFetch<VerifyResponseDto>("/auth/verify");

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
