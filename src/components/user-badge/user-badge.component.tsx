import type { ReactNode } from "react";

import UsernameFrameComponent from "@/components/user-badge/components/username-frame/username-frame.component.tsx";

import { useResizeObserverHook } from "@/hooks/use-resize-observer.hook.ts";

import styles from "./user-badge.module.css";

type Props = {
  username: string;
  picture: string | null;
};

export default function UserBadgeComponent({
  username,
  picture,
}: Props): ReactNode {
  const { ref: usernameRef, width: usernameWidth } =
    useResizeObserverHook<HTMLDivElement>();

  return (
    <div className={styles["user-badge"]}>
      <img
        className={styles.picture}
        src={picture ?? "/images/user-picture-placeholder.webp"}
        alt="User's Profile Picture"
      />
      <div className={styles["username-box"]}>
        <UsernameFrameComponent
          className={styles.frame}
          usernameWidth={usernameWidth}
        />
        <div ref={usernameRef} className={styles.username}>
          {username}
        </div>
      </div>
    </div>
  );
}
