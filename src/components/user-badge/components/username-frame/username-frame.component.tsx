import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import styles from "./username-frame.module.css";

type Props = SVGProps<SVGSVGElement> & {
  usernameWidth: number;
};

export default function UsernameFrameComponent({
  usernameWidth,
  className,
  ...otherProps
}: Props): ReactNode {
  const extraWidth = usernameWidth - 160;

  return (
    <svg
      className={clsx(styles["username-frame"], className)}
      style={{
        width: `${269 + extraWidth}px`,
        height: "57px",
      }}
      viewBox={`0 0 ${269 + extraWidth} 57`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={styles.pane}
        d={`M9.1775 6.49366C7.08845 3.87356 8.95409 0 12.3051 0H${232.593 + extraWidth}C${233.777 + extraWidth} 0 ${234.9 + extraWidth} 0.524587 ${235.66 + extraWidth} 1.43254L${266.711 + extraWidth} 38.5291C${268.016 + extraWidth} 40.0872 ${267.944 + extraWidth} 42.3756 ${266.546 + extraWidth} 43.8497L${256.201 + extraWidth} 54.7532C${255.445 + extraWidth} 55.5492 ${254.396 + extraWidth} 56 ${253.299 + extraWidth} 56H79.7805C78.8769 56 77.9999 55.694 77.2924 55.1319L51.0349 34.2716C50.3273 33.7095 49.4503 33.4035 48.5467 33.4035H32.5597C31.3423 33.4035 30.1911 32.8491 29.4321 31.8972L9.1775 6.49366Z`}
      />
      <path
        className={styles.edge}
        d="M9.10619 48.4991C9.10619 50.3982 7.0677 51.9377 4.5531 51.9377C2.03849 51.9377 0 50.3982 0 48.4991C0 46.6001 2.03849 45.0605 4.5531 45.0605C7.0677 45.0605 9.10619 46.6001 9.10619 48.4991Z"
      />
      <path className={styles.line} d="M6 46.5L20.5 34H49.5L74.5 53.5" />
      <path
        className={styles.edge}
        d="M68.8755 49.7342C68.2075 49.1165 68.6445 48 69.5544 48H138.248C138.414 48 138.576 48.041 138.722 48.1192L149.622 53.9788C150.538 54.4709 150.188 55.8596 149.149 55.8596H75.8915C75.6398 55.8596 75.3974 55.7647 75.2126 55.5939L68.8755 49.7342Z"
      />
      <path
        className={styles.line}
        d={`M65.9997 43.7607L152.499 43.7596L179.5 55.4993L${218.001 + extraWidth} 55.4993`}
      />
      <path
        className={styles.edge}
        d={`M223.503 49.5512H${244.05 + extraWidth}L${254.324 + extraWidth} 41.2617H${269.001 + extraWidth}L${255.792 + extraWidth} 55.9986H211.762L223.503 49.5512Z`}
      />
      <path className={styles.edge} d="M157 48H142L157 56H176L157 48Z" />
    </svg>
  );
}
