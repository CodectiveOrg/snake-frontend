import type { FormEvent, ReactNode } from "react";
import styles from "./intro.module.css";
import { useNavigate } from "react-router";

export default function IntroPage(): ReactNode {
  const navigate = useNavigate();

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = (formData.get("username") as string) || "Lazy User!";
    localStorage.setItem("username", username);

    navigate("game");
  };

  return (
    <div className={styles.intro}>
      <form onSubmit={formSubmitHandler}>
        <label>
          لطفا نام خود را وارد کنید
          <input type="text" name="username" />
        </label>
        <button>ارسال</button>
      </form>
    </div>
  );
}
