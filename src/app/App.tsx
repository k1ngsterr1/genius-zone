import { MyRoutes } from "@pages/index";
import { useVerifyAuth } from "@shared/lib/hooks/useVerifyAuth";
import { useEffect } from "react";

export const App = () => {
  const verifyAuth = useVerifyAuth();

  useEffect(() => {
    verifyAuth();
  }, [verifyAuth]);

  return (
    <>
      <MyRoutes />
    </>
  );
};
