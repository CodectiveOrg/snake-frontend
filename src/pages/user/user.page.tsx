import type { ReactNode } from "react";

import { useParams } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { getUserPublicInfoApi } from "@/api/user/get-user-public-info";

import ButtonComponent from "@/components/button/button.component";
import PaneComponent from "@/components/pane/pane.component";

import RowComponent from "./components/row/row.component";

import styles from "./user.module.css";

export default function UserPage(): ReactNode {
  const params = useParams();
  const username = params.username!;

  const {
    data: userData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["user-public-info", username],
    queryFn: () => getUserPublicInfoApi(username),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.user}>
      <PaneComponent
        shade
        className={styles.pane}
        contentClassName={styles.content}
        title="Player"
      >
        <div>
          <img
            className={styles.img}
            src="/images/user-picture-placeholder.webp"
            alt="Profile"
          />
        </div>

        <div>
          <RowComponent
            title="name"
            value={userData.username}
            className={styles.bold}
          />
          <RowComponent title="ranking" value="43" />
          <RowComponent title="total score" value="808" />
          <RowComponent
            title="gender"
            value={userData.gender}
            className={styles.bold}
          />

          <ButtonComponent className={styles.button}>
            {" "}
            &lt;- Back
          </ButtonComponent>
        </div>
      </PaneComponent>
    </div>
  );
}
