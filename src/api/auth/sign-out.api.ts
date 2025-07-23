import type { ResponseDto } from "@/dto/response/response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function signOutApi(): Promise<ResponseDto> {
  return await richFetch("/auth/sign-out", { method: "DELETE" });
}
