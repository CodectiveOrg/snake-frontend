import type { User } from "@/entities/user.ts";

export type ProfileDto = Pick<User, "username" | "email" | "picture">;
