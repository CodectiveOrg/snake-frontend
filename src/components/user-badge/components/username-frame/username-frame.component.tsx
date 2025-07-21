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
  return (
    <svg
      className={clsx(styles["username-frame"], className)}
      width={269 + usernameWidth}
      height="57"
      viewBox={`0 0 ${269 + usernameWidth} 57`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={styles.pane}
        d="M9.1775 6.49366C7.08845 3.87356 8.95409 0 12.3051 0H232.593C233.777 0 234.9 0.524587 235.66 1.43254L266.711 38.5291C268.016 40.0872 267.944 42.3756 266.546 43.8497L256.201 54.7532C255.445 55.5492 254.396 56 253.299 56H79.7805C78.8769 56 77.9999 55.694 77.2924 55.1319L51.0349 34.2716C50.3273 33.7095 49.4503 33.4035 48.5467 33.4035H32.5597C31.3423 33.4035 30.1911 32.8491 29.4321 31.8972L9.1775 6.49366Z"
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
        d={`M65.9997 43.7607L152.499 43.7596L179.5 55.4993L${218.001 + usernameWidth} 55.4993`}
      />
      <path
        className={styles.edge}
        d="M223.503 49.5512H244.05L254.324 41.2617H269.001L255.792 55.9986H211.762L223.503 49.5512Z"
      />
      <path className={styles.edge} d="M157 48H142L157 56H176L157 48Z" />
    </svg>
  );
}
