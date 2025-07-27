import { type ReactNode } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { signOutApi } from "@/api/auth/sign-out.api.ts";

import MenuComponent from "@/components/menu/menu.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";

import useVerifyQuery from "@/queries/use-verify.query.ts";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  const { data } = useVerifyQuery();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["sign-out"],
    mutationFn: signOutApi,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (result) => {
      await queryClient.invalidateQueries({ queryKey: ["verify"] });
      toast.success(result.message);
    },
  });

  const exitButtonClickHandler = async (): Promise<void> => {
    await mutation.mutateAsync();
  };

  return (
    <div className={styles.home}>
      <PaneComponent title="Menu" className={styles.pane}>
        <div className={styles.username}>
          <span className={styles.prefix}>Hello, </span>
          {data?.username}!
        </div>
        <MenuComponent
          items={[
            { to: "/game", children: "Start" },
            { to: "/profile", children: "Profile" },
            { to: "/board", children: "Board" },
            { to: "/settings", children: "Settings" },
            {
              asType: "button",
              onClick: exitButtonClickHandler,
              children: "Exit",
            },
          ]}
        />
      </PaneComponent>
    </div>
  );
}
