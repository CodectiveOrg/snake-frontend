import type { ReactNode } from "react";

import { Toaster } from "sonner";

import RouterComponent from "@/components/router/router.component.tsx";

import QueryProvider from "@/providers/query.provider.tsx";

import "./app.module.css";

function AppComponent(): ReactNode {
  return (
    <QueryProvider>
      <RouterComponent />
      <Toaster />
    </QueryProvider>
  );
}

export default AppComponent;
