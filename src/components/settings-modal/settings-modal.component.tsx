// import React, { type ReactNode, useEffect, useRef } from "react";

// import { useQueries } from "@tanstack/react-query";

// import { toast } from "react-toastify";

// import { getuserSettingsApi } from "@/api/public/get-settings.api.ts";

// import ButtonComponent from "@/components/button/button.component";
// import ModalComponent from "@/components/modal/modal.component.tsx";

// import { useGameStore } from "@/stores/game.store.ts";

// type Props = {
//   onRestart: () => void;
//   onExit: () => void;
// };

// export default function SettingsModalComponent({
//   onRestart,
//   onExit,
// }: Props): ReactNode {
//   const gameState = useGameStore((state) => state.gameState);

//   const modalRef = useRef<HTMLDialogElement>(null);

//   // const [useSettingsQuery] = useQueries({
//   //   queries: [
//   //     {
//   //       queryKey: ["user-settings"],
//   //       queryFn: getuserSettingsApi,
//   //     },
//   //   ],
//   // });

//   // const {
//   //   data: userSettingsData,
//   //   isPending: userSettingsPending,
//   //   isError: userSettingsError,
//   //   error: userSettingsErrorMessage,
//   // } = useSettingsQuery;

//   // console.log(userSettingsData);

//   const restartButtonClickHandler = (): void => {
//     modalRef.current?.close();
//     onRestart();
//   };

//   const pendingMessage = (): React.JSX.Element | undefined => {
//     return <p>Loading...</p>;
//   };

//   const errorMessage = (): React.JSX.Element | undefined => {
//     if (userSettingsError) {
//       toast.error(userSettingsErrorMessage.message, {
//         containerId: "modal",
//         toastId: "user-settings",
//       });

//       return <p>Error: {userSettingsErrorMessage.message}</p>;
//     }
//   };

//   return (
//     <ModalComponent
//       ref={modalRef}
//       // className={styles["game-over-modal"]}
//       // contentClassName={styles.content}
//       title="Game Over"
//     >
//       {userSettingsPending ? (
//         pendingMessage()
//       ) : userSettingsError ? (
//         errorMessage()
//       ) : (
//         <React.Fragment>
//           {/* <TableComponent items={userSettingsData} /> */}
//           <div>
//             <ButtonComponent color="secondary" onClick={onExit}>
//               Exit
//             </ButtonComponent>
//             <ButtonComponent onClick={restartButtonClickHandler}>
//               Restart
//             </ButtonComponent>
//           </div>
//         </React.Fragment>
//       )}
//     </ModalComponent>
//   );
// }
