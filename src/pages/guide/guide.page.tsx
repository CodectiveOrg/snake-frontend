import PaneComponent from "@/components/pane/pane.component.tsx";

import style from "./guide.module.css";

export default function GuidePage() {
  return (
    <PaneComponent title={"guide"}>
      <div className={style.guide}>
        <div className="navigation-keys">
          <img src="./../../../public/images/guide/wads.svg" alt="wasd" />
        </div>
        <div className="esc-key">
          <img src="./../../../public/images/guide/button.svg" alt="button" />
        </div>
        <div className="move-with-touch">
          <img
            src="./../../../public/images/guide/TOUCH%20SCREEN%20CONTROLL.svg"
            alt="touch"
          />
        </div>
        <div className="pause-game">
          <img
            src="./../../../public/images/guide/pause%20btn.svg"
            alt="pause"
          />
        </div>
      </div>
    </PaneComponent>
  );
}
