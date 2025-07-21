import type { ReactNode } from "react";

import { Navigate, Outlet, useLocation } from "react-router";

import useVerifyQuery from "@/queries/use-verify.query.ts";

export default function GuestOnlyGuard(): ReactNode {
  const { isLoading, isError } = useVerifyQuery();

  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Outlet />;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
}
