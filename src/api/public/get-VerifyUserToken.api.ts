import type { VerifyDto } from "@/dto/verify.dto";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function getVerifyUserTokenApi(): Promise<VerifyDto> {
  const data = await richFetch<VerifyDto>("/auth/verify");

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
