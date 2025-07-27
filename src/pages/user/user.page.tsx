import type { ReactNode } from "react";

import { useParams } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { getUserPublicInfoApi } from "@/api/public/get-user-public-info";

import ButtonComponent from "@/components/button/button.component";
import PaneComponent from "@/components/pane/pane.component";

import StatsComponent from "@/pages/user/components/stats/stats.component.tsx";

import styles from "./user.module.css";

export default function UserPage(): ReactNode {
  const params = useParams();
  const username = params.username!;

  const { data, isPending, isError, error } = useQuery({
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
        <img
          src={data.picture ?? "/images/user-picture-placeholder.webp"}
          alt="User's Profile Picture"
        />
        <div className={styles.writings}>
          <StatsComponent stats={data} />
          <ButtonComponent asType="link" to="/">
            {"<-"} Back
          </ButtonComponent>
        </div>
      </PaneComponent>
    </div>
  );
}
