import type { User } from "@/entities/user.ts";

export type UserPublicInfoDto = Pick<User, "username" | "email" | "picture">;
