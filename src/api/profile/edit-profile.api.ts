import type { EditProfileRequestDto } from "@/dto/request/edit-profile.response.dto.ts";
import type { ResponseDto } from "@/dto/response/response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function editProfileApi(
  dto: EditProfileRequestDto,
): Promise<ResponseDto> {
  return await richFetch("/profile", {
    method: "PATCH",
    body: JSON.stringify(dto),
  });
}
