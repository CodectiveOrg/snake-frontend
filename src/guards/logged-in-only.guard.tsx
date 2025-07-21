import type { ReactNode } from "react";

import { Navigate, Outlet } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { getVerifyUserTokenApi } from "@/api/public/get-VerifyUserToken.api.ts";

export default function LoggedInOnlyGuard(): ReactNode {
  const { isLoading, isError } = useQuery({
    queryKey: ["verify"],
    queryFn: getVerifyUserTokenApi,
    retry: 1,
  });

  if (isLoading) {
    return <div>Loading authentication...</div>;
  }

  if (isError) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
