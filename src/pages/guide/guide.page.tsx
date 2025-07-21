import PaneComponent from "@/components/pane/pane.component.tsx";

import style from "./guide.module.css";

export default function GuidePage() {
  return (
    <div className={style["guide-page"]}>
      <PaneComponent title={"guide"}>
        <div className={style.guide}>
          <div className={style["navigation-keys"]}>
            <img src="./../../../public/images/guide/wads.svg" alt="wasd" />
            <span className="explain">Navigation keys</span>
          </div>
          <div className={style["esc-key"]}>
            <img
              src="./../../../public/images/guide/esc%20button.svg"
              alt="button"
            />
            <span className="explain">Access Game menu</span>
          </div>
          <div className={style["move-with-touch"]}>
            <img
              src="./../../../public/images/guide/TOUCH%20SCREEN%20CONTROLL.svg"
              alt="touch"
            />
            <span className="explain">Move with touch</span>
          </div>
          <div className={style["pause-game"]}>
            <img
              src="./../../../public/images/guide/pause%20btn.svg"
              alt="pause"
            />
            <span className="explain">Pause the Game</span>
          </div>
        </div>
      </PaneComponent>
    </div>
  );
}
