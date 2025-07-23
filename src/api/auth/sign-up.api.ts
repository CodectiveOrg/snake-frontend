import type { SignUpRequestDto } from "@/dto/request/sign-up.request.dto.ts";
import type { ResponseDto } from "@/dto/response/response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function signUpApi(dto: SignUpRequestDto): Promise<ResponseDto> {
  return await richFetch("/auth/sign-up", {
    method: "POST",
    body: JSON.stringify(dto),
  });
}
