import { useEffect } from "react";
import { MyRoutes } from "@pages/index";
import { useVerifyAuth } from "@shared/lib/hooks/useVerifyAuth";
import { useSelector } from "react-redux";
import { Loader } from "@shared/ui/Loader";
import { RootState } from "@shared/lib/redux/store";

export const App = () => {
  const { verifyAuth, isLoading } = useVerifyAuth();

  useEffect(() => {
    verifyAuth();
  }, [verifyAuth]);

  return <>{isLoading ? <Loader /> : <MyRoutes />}</>;
};
