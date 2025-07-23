import type { ReactNode } from "react";

import RouterComponent from "@/components/router/router.component.tsx";
import ToasterComponent from "@/components/toaster/toaster.component.tsx";

import QueryProvider from "@/providers/query.provider.tsx";

import "./app.module.css";

function AppComponent(): ReactNode {
  return (
    <QueryProvider>
      <RouterComponent />
      <ToasterComponent />
    </QueryProvider>
  );
}

export default AppComponent;
