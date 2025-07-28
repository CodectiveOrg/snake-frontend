import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import styles from "./username-frame.module.css";

type Props = SVGProps<SVGSVGElement> & {
  usernameWidth: number;
  usernameHeight: number;
};

export default function UsernameFrameComponent({
  usernameWidth,
  usernameHeight,
  className,
  ...otherProps
}: Props): ReactNode {
  const width = usernameWidth + 109;
  const extraWidth = width - 269;
  const height = usernameHeight + 27;
  const extraHeight = height - 57;

  return (
    <svg
      className={clsx(styles["username-frame"], className)}
      style={{
        width: `${269 + extraWidth}px`,
        height: `${height}px`,
      }}
      viewBox={`0 0 ${269 + extraWidth} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={styles.pane}
        d={`M9.1775 6.49366C7.08845 3.87356 8.95409 0 12.3051 0H${232.593 + extraWidth}C${233.777 + extraWidth} 0 ${234.9 + extraWidth} 0.524587 ${235.66 + extraWidth} 1.43254L${266.711 + extraWidth} ${38.5291 + extraHeight}C${268.016 + extraWidth} ${40.0872 + extraHeight} ${267.944 + extraWidth} ${42.3756 + extraHeight} ${266.546 + extraWidth} ${43.8497 + extraHeight}L${256.201 + extraWidth} ${54.7532 + extraHeight}C${255.445 + extraWidth} ${55.5492 + extraHeight} ${254.396 + extraWidth} ${56 + extraHeight} ${253.299 + extraWidth} ${56 + extraHeight}H79.7805C78.8769 ${56 + extraHeight} 77.9999 ${55.694 + extraHeight} 77.2924 ${55.1319 + extraHeight}L51.0349 ${34.2716 + extraHeight}C50.3273 ${33.7095 + extraHeight} 49.4503 ${33.4035 + extraHeight} 48.5467 ${33.4035 + extraHeight}H32.5597C31.3423 ${33.4035 + extraHeight} 30.1911 ${32.8491 + extraHeight} 29.4321 ${31.8972 + extraHeight}L9.1775 6.49366Z`}
      />
      <path
        className={styles.edge}
        d={`M9.10619 ${48.4991 + extraHeight}C9.10619 ${50.3982 + extraHeight} 7.0677 ${51.9377 + extraHeight} 4.5531 ${51.9377 + extraHeight}C2.03849 ${51.9377 + extraHeight} 0 ${50.3982 + extraHeight} 0 ${48.4991 + extraHeight}C0 ${46.6001 + extraHeight} 2.03849 ${45.0605 + extraHeight} 4.5531 ${45.0605 + extraHeight}C7.0677 ${45.0605 + extraHeight} 9.10619 ${46.6001 + extraHeight} 9.10619 ${48.4991 + extraHeight}Z`}
      />
      <path
        className={styles.line}
        d={`M6 ${46.5}L20.5 ${34}H49.5L74.5 ${53.5}`}
      />
      <path
        className={styles.edge}
        d={`M68.8755 ${49.7342 + extraHeight}C68.2075 ${49.1165 + extraHeight} 68.6445 ${48 + extraHeight} 69.5544 ${48 + extraHeight}H138.248C138.414 ${48 + extraHeight} 138.576 ${48.041 + extraHeight} 138.722 ${48.1192 + extraHeight}L149.622 ${53.9788 + extraHeight}C150.538 ${54.4709 + extraHeight} 150.188 ${55.8596 + extraHeight} 149.149 ${55.8596 + extraHeight}H75.8915C75.6398 ${55.8596 + extraHeight} 75.3974 ${55.7647 + extraHeight} 75.2126 ${55.5939 + extraHeight}L68.8755 ${49.7342 + extraHeight}Z`}
      />
      <path
        className={styles.line}
        d={`M65.9997 ${43.7607 + extraHeight}L152.499 ${43.7596 + extraHeight}L179.5 ${55.4993 + extraHeight}L${218.001 + extraWidth} ${55.4993 + extraHeight}`}
      />
      <path
        className={styles.edge}
        d={`M223.503 ${49.5512 + extraHeight}H${244.05 + extraWidth}L${254.324 + extraWidth} ${41.2617 + extraHeight}H${269.001 + extraWidth}L${255.792 + extraWidth} ${55.9986 + extraHeight}H211.762L223.503 ${49.5512 + extraHeight}Z`}
      />
      <path
        className={styles.edge}
        d={`M157 ${48 + extraHeight}H142L157 ${56 + extraHeight}H176L157 ${48 + extraHeight}Z`}
      />
    </svg>
  );
}
