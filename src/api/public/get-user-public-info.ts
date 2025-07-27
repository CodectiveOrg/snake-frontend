import type { GetUserPublicInfoResponseDto } from "@/dto/response/get-user-public-info.response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function getUserPublicInfoApi(
  username: string,
): Promise<GetUserPublicInfoResponseDto> {
  const data = await richFetch<GetUserPublicInfoResponseDto>(
    `/user/${username}`,
  );

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
