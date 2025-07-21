import { Navigate, useLocation } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { getVerifyUserTokenApi } from "@/api/public/get-VerifyUserToken.api";

type ProtectedRouteProps = {
  children?: React.ReactNode;
};

export default function ProtectedRouteComponent({
  children,
}: ProtectedRouteProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["verify"],
    queryFn: getVerifyUserTokenApi,
    retry: 1,
  });
  //   console.log("result", data); // return undefined

  const location = useLocation();
  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/signup";

  if (isLoading) {
    return <div>Loading authentication...</div>;
  }

  //   token is invalid or verification failed
  if (isError) {
    // If the user is trying to access a protected route and token is invalid, redirect to sign-in
    // If current page is NOT an auth page, redirect to sign-in
    if (!isAuthPage) {
      //   console.error("Authentication error:", error);
      // Redirect to your sign-in page, preserving the current path in state for redirection after login
      return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    // If it's an auth page and there's an error (meaning they are not logged in), let them proceed
    return <>{children}</>;
  }

  // If data is successfully returned => token is valid
  if (data) {
    // If the user is logged in AND trying to access an auth page, redirect to the main menu
    if (isAuthPage) {
      return <Navigate to="/game" replace />;
    }
    // If logged in and not on an auth page, allow access to the requested content
    return <>{children}</>;
  }

  // If user not authenticated.
  if (!data && !isAuthPage) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // it's a public route wrapped.
  return <>{children}</>;
}
