import type { ReactNode } from "react";

import { Navigate, Outlet, useLocation } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { getVerifyUserTokenApi } from "@/api/public/get-VerifyUserToken.api.ts";

export default function GuestOnlyGuard(): ReactNode {
  const { isLoading, isError } = useQuery({
    queryKey: ["verify"],
    queryFn: getVerifyUserTokenApi,
    retry: 1,
  });

  const location = useLocation();

  if (isLoading) {
    return <div>Loading authentication...</div>;
  }

  if (isError) {
    return <Outlet />;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
}
