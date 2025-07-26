import type { User } from "@/entities/user.ts";

export type GetProfileResponseDto = Pick<
  User,
  "username" | "email" | "gender" | "picture"
>;
