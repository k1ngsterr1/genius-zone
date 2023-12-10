import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/store/authSlice";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";
import { RootState } from "../redux/store";

export function useVerifyAuth() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  const verifyAuth = async () => {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axios.get(
        `https://inquisitive-creature-production.up.railway.app/api/courses/courses/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("response");
        console.log(isLoading);
        const userData = response.data.user;
        dispatch(logIn(userData));
        dispatch(turnOffLoader());
      }
    } catch (error: any) {
      console.error("Authentication verification failed:", error);
    } finally {
    }
  };

  return verifyAuth;
}
