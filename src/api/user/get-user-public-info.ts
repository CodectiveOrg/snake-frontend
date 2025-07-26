import type { User } from "@/entities/user";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function getUserPublicInfoApi(username: string): Promise<User> {
  const data = await richFetch<User>(`/user/username=${username}`);

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
