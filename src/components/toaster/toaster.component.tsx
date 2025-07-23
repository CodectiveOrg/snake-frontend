import type { ReactNode } from "react";

import {
  Slide,
  ToastContainer,
  type ToastContainerProps,
} from "react-toastify";

type Props = ToastContainerProps;

export default function ToasterComponent({ ...otherProps }: Props): ReactNode {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Slide}
      {...otherProps}
    />
  );
}
