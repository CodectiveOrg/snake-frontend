import type { EditSettingsRequestDto } from "@/dto/request/edit-settings.dto";
import type { ResponseDto } from "@/dto/response/response.dto";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function editSettingsApi(
  dto: EditSettingsRequestDto,
): Promise<ResponseDto> {
  return await richFetch("/settings", {
    method: "POST",
    body: JSON.stringify(dto),
  });
}
