import type { ReactNode } from "react";

import { Navigate, Outlet, useLocation } from "react-router";

import useVerifyQuery from "@/queries/use-verify.query.ts";

export default function LoggedInOnlyGuard(): ReactNode {
  const { isLoading, isError } = useVerifyQuery();

  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
