import type { ReactNode, SVGProps } from "react";

import styles from "./modal.module.css";

export default function ModalComponent(): ReactNode {
  return (
    <div className={styles.modal}>
      {/*<Frame className={styles.frame} />*/}
      <SimpleFrame className={styles.frame} width={100} height={200} />
      <div className={styles.content}>
        <h1>SETTINGS</h1>
      </div>
    </div>
  );
}

// function Frame(props: SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       width="723"
//       height="738"
//       viewBox="0 0 723 738"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <foreignObject x="-37" y="-39.9238" width="797" height="811.088">
//         <div
//           style={{
//             backdropFilter: "blur(20px)",
//             clipPath: "url(#bgblur_0_21_77_clip_path)",
//             height: "100%",
//             width: "100%",
//           }}
//         ></div>
//       </foreignObject>
//       <g filter="url(#filter0_d_21_77)" data-figma-bg-blur-radius="40">
//         <path
//           d="M4.95703 25.7668L26.9438 0.0761719H244.674L283.783 41H445.234L488.354 0.0761719H696.048L719.826 24.2997L720 700.32L697.443 730.724H474.315L433.2 692.5H273.254L235.649 731.163L26.3496 730.724L3 700.32L4.95703 25.7668Z"
//           fill="#2E6DFF"
//           fill-opacity="0.168627"
//           stroke="#2E6DFF"
//           stroke-width="2"
//           shape-rendering="crispEdges"
//         />
//       </g>
//       <defs>
//         <filter
//           id="filter0_d_21_77"
//           x="-37"
//           y="-39.9238"
//           width="797"
//           height="811.088"
//           filterUnits="userSpaceOnUse"
//           color-interpolation-filters="sRGB"
//         >
//           <feFlood flood-opacity="0" result="BackgroundImageFix" />
//           <feColorMatrix
//             in="SourceAlpha"
//             type="matrix"
//             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//             result="hardAlpha"
//           />
//           <feOffset dy="3" />
//           <feGaussianBlur stdDeviation="1.5" />
//           <feComposite in2="hardAlpha" operator="out" />
//           <feColorMatrix
//             type="matrix"
//             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.160784 0"
//           />
//           <feBlend
//             mode="normal"
//             in2="BackgroundImageFix"
//             result="effect1_dropShadow_21_77"
//           />
//           <feBlend
//             mode="normal"
//             in="SourceGraphic"
//             in2="effect1_dropShadow_21_77"
//             result="shape"
//           />
//         </filter>
//         <clipPath
//           id="bgblur_0_21_77_clip_path"
//           transform="translate(37 39.9238)"
//         >
//           <path d="M4.95703 25.7668L26.9438 0.0761719H244.674L283.783 41H445.234L488.354 0.0761719H696.048L719.826 24.2997L720 700.32L697.443 730.724H474.315L433.2 692.5H273.254L235.649 731.163L26.3496 730.724L3 700.32L4.95703 25.7668Z" />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }

type Props = SVGProps<SVGSVGElement> & {
  width: number;
  height: number;
};

function SimpleFrame({ width, height, ...props }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${200} ${100}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d={`M10 0L0 10V90L10 100H70L80 90H120L130 100H190L200 90V10L190 0H130L120 10H80L70 0H10Z`}
        fill="#00FF00"
        // stroke="#FF0000"
        // stroke-width="2"
      />
    </svg>
  );
}
