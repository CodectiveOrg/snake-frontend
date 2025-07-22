import type { SignInRequestDto } from "@/dto/request/sign-in.request.dto.ts";
import type { ResponseDto } from "@/dto/response/response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function signInApi(dto: SignInRequestDto): Promise<ResponseDto> {
  return await richFetch("/auth/sign-in", {
    method: "POST",
    body: JSON.stringify(dto),
  });
}
