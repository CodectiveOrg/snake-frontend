import { navigate } from "../utils/route.utils.ts";

function main(): void {
  const username = localStorage.getItem("username");

  if (!username) {
    navigate("intro", []);
  } else {
    navigate("game", [username]);
  }
}

main();
