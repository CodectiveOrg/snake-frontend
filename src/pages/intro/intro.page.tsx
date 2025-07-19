import type { FormEvent, ReactNode } from "react";

import { useNavigate } from "react-router";

import styles from "./intro.module.css";

export default function IntroPage(): ReactNode {
  const navigate = useNavigate();

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = (formData.get("username") as string) || "Lazy User!";
    localStorage.setItem("username", username);

    navigate("/game");
  };

  return (
    <div className={styles.intro}>
      <form onSubmit={formSubmitHandler}>
        <label>
          Username:
          <br />
          <input type="text" name="username" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
