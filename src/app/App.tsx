import { useEffect } from "react";
import { MyRoutes } from "@pages/index";
import { useVerifyAuth } from "@shared/lib/hooks/useVerifyAuth";
import { Loader } from "@shared/ui/Loader";
import "draft-js/dist/Draft.css";

export const App = () => {
  const { verifyAuth, isLoading } = useVerifyAuth();

  useEffect(() => {
    verifyAuth();
  }, [verifyAuth]);

  return <>{isLoading ? <Loader /> : <MyRoutes />}</>;
};
