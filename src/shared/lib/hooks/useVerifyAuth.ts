import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/store/authSlice";

export function useVerifyAuth() {
  const dispatch = useDispatch();
  const [isLoading, setLoaded] = useState(true);

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
