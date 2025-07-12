import { DOM } from "../../utils/dom.utils.ts";
import { navigate } from "../../utils/route.utils.ts";

export function initIntroPage(): void {
  DOM.introForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(DOM.introForm);

    const username = (formData.get("username") as string) || "Lazy User!";
    localStorage.setItem("username", username);

    navigate("game", [username]);
  });
}
