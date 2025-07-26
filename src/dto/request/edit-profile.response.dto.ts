import type { User } from "@/entities/user.ts";

export type EditProfileRequestDto = Pick<
  User,
  "username" | "email" | "gender" | "password" | "picture"
>;
