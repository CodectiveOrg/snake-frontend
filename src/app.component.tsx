import type { ReactNode } from "react";

import { Toaster } from "sonner";

import RouterComponent from "@/components/router/router.component.tsx";

import "./app.module.css";

function AppComponent(): ReactNode {
  return (
    <>
      <RouterComponent />
      <Toaster />
    </>
  );
}

export default AppComponent;
