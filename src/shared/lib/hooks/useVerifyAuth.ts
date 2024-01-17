import { useState } from "react";
import axiosInstance from "@shared/lib/middleware";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/store/authSlice";

export function useVerifyAuth() {
  const dispatch = useDispatch();
  const [isLoading, setLoaded] = useState(true);

  const verifyAuth = async () => {
    try {
      const accessToken = Cookies.get("accessToken");
      const response = await axiosInstance.get(
        `https://genzone.up.railway.app/api/courses/courses/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        const userData = response.data.user;
        dispatch(logIn(userData));
      }
    } catch (error: any) {
      console.error("Authentication verification failed:", error);
    } finally {
      setLoaded(false);
    }
  };

  return { verifyAuth, isLoading };
}
