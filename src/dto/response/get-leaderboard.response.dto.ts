export type GetLeaderboardResponseDto = {
  username: string;
  picture: string | null;
  todayHighScore: number;
  totalHighScore: number;
  rank: number;
};
