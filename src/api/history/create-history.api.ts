import type { CreateHistoryRequestDto } from "@/dto/request/create-history.request.dto.ts";
import type { ResponseDto } from "@/dto/response/response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function createHistoryApi(
  dto: CreateHistoryRequestDto,
): Promise<ResponseDto> {
  return await richFetch("/history", {
    method: "POST",
    body: JSON.stringify(dto),
  });
}
